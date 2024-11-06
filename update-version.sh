#!/bin/bash

VAULT_DIR="$HOME/Documents/Ataraxia"
QUARTZ_CONTENT_DIR="$HOME/Documents/quartz/content"
EXCLUDE_DIRS=("50. Calendar" "60. Resources" "70. Settings")

# Create the exclude arguments for find command
EXCLUDE_ARGS=()
for dir in "${EXCLUDE_DIRS[@]}"; do
    EXCLUDE_ARGS+=(-not -path "*/${dir}/*")
done

# Function to check if a file has the 'public' tag
has_public_tag() {
    local file="$1"
    awk '
    BEGIN { in_front_matter = 0; public_found = 0 }
    /^---$/ { in_front_matter = !in_front_matter; next }
    in_front_matter {
        if (/^tags:/) {
            if ($0 ~ /\[.*public.*\]/) { public_found = 1 }
            in_tags = 1
            next
        }
        if (in_tags) {
            if ($0 ~ /^[a-zA-Z]/ && $0 !~ /^  -/) { in_tags = 0 }
            else if ($0 ~ /- public/) { public_found = 1 }
        }
        if ($0 ~ /#public/) { public_found = 1 }
    }
    END { exit !public_found }
    ' "$file"
}

# Function to copy and process a single file
process_file() {
    local source="$1"
    local dest="$QUARTZ_CONTENT_DIR/${source#$VAULT_DIR}"
    local dest_dir=$(dirname "$dest")
    
    echo "Processing file: $source to $dest"
    
    # Create destination directory if it doesn't exist
    mkdir -p "$dest_dir"
    
    # Process the file content
    if [[ "$source" == *"/obsidian/Metadata-auto classifer를 만들게 된 이유.md" ]]; then
        cp "$source" "$dest"
    else
        # Remove "@content" from the beginning of each line and write to destination
        sed 's/^@content //' "$source" > "$dest"
    fi
}

# Calculate total number of visible .md files, excluding specified directories
total_files=$(find "$VAULT_DIR" -type f -name "*.md" ! -path '*/.*' "${EXCLUDE_ARGS[@]}" | wc -l)
processed_files=0

echo "Total files to process: $total_files"

# Find and process files with 'public' tag, skipping hidden files and excluded directories
find "$VAULT_DIR" -type f -name "*.md" ! -path '*/.*' "${EXCLUDE_ARGS[@]}" | while read -r file; do
    if has_public_tag "$file"; then
        process_file "$file"
        processed_files=$((processed_files + 1))
        progress=$(awk "BEGIN {printf \"%.2f\", $processed_files / $total_files * 100}")
        
        echo "Processed: $(basename "$file")"
        echo "Progress: $processed_files / $total_files ($progress%)"
        echo "-------------------"
    fi
done

echo "Processing completed"
echo "Files processed: $processed_files / $total_files"

npx quartz update
git add *
git commit -m "Update blog"
git push