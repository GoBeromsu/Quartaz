#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '..', 'content');
const attachmentsDir = path.join(contentDir, '_attachments');

// Ensure attachments directory exists
if (!fs.existsSync(attachmentsDir)) {
  fs.mkdirSync(attachmentsDir, { recursive: true });
}

/**
 * Recursively find all markdown files
 */
function findMarkdownFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...findMarkdownFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Extract Eagle image paths from markdown content
 */
function findEagleImages(content) {
  const eaglePattern = /!\[([^\]]*)\]\(file:\/\/\/[^)]*Ataraxia\.library\/images\/([^)]+)\)/g;
  const matches = [];
  let match;

  while ((match = eaglePattern.exec(content)) !== null) {
    matches.push({
      fullMatch: match[0],
      altText: match[1],
      imagePath: match[0].match(/file:\/\/\/([^)]+)/)[1]
    });
  }

  return matches;
}

/**
 * Generate descriptive filename from context
 */
function generateDescriptiveFilename(altText, imagePath, index) {
  const ext = path.extname(imagePath);

  // Use alt text if available
  if (altText && altText.trim()) {
    return `${altText.toLowerCase().replace(/[^a-z0-9]+/g, '-')}${ext}`;
  }

  // Use Eagle ID as fallback
  const eagleId = imagePath.match(/images\/([^/]+)\.info/)?.[1];
  return `eagle-${eagleId || index}${ext}`;
}

/**
 * Copy Eagle image to attachments and return new path
 */
function copyEagleImage(imagePath, newFilename) {
  const sourcePath = `/${imagePath}`;
  const destPath = path.join(attachmentsDir, newFilename);

  if (!fs.existsSync(sourcePath)) {
    console.warn(`⚠️  Source image not found: ${sourcePath}`);
    return null;
  }

  // Avoid overwriting if file already exists
  let finalDestPath = destPath;
  let counter = 1;
  while (fs.existsSync(finalDestPath)) {
    const ext = path.extname(newFilename);
    const base = path.basename(newFilename, ext);
    finalDestPath = path.join(attachmentsDir, `${base}-${counter}${ext}`);
    counter++;
  }

  try {
    fs.copyFileSync(sourcePath, finalDestPath);
    console.log(`✅ Copied: ${path.basename(finalDestPath)}`);
    return path.basename(finalDestPath);
  } catch (error) {
    console.error(`❌ Failed to copy ${sourcePath}:`, error.message);
    return null;
  }
}

/**
 * Process a single markdown file
 */
function processMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const eagleImages = findEagleImages(content);

  if (eagleImages.length === 0) {
    return false;
  }

  console.log(`\n📄 Processing: ${path.relative(contentDir, filePath)}`);
  console.log(`   Found ${eagleImages.length} Eagle image(s)`);

  let newContent = content;
  let changesApplied = false;

  eagleImages.forEach((image, index) => {
    const newFilename = generateDescriptiveFilename(image.altText, image.imagePath, index);
    const copiedFilename = copyEagleImage(image.imagePath, newFilename);

    if (copiedFilename) {
      const newMarkdown = `![${image.altText}](/_attachments/${copiedFilename})`;
      newContent = newContent.replace(image.fullMatch, newMarkdown);
      changesApplied = true;
    }
  });

  if (changesApplied) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`   ✅ Updated markdown file`);
    return true;
  }

  return false;
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Scanning for Eagle image paths...\n');

  const markdownFiles = findMarkdownFiles(contentDir);
  let filesProcessed = 0;

  for (const file of markdownFiles) {
    if (processMarkdownFile(file)) {
      filesProcessed++;
    }
  }

  console.log(`\n✨ Done! Processed ${filesProcessed} file(s)`);

  if (filesProcessed === 0) {
    console.log('   No Eagle images found.');
  }
}

main();
