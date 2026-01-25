---
name: deploy
description: This skill automates Quartz static site deployment to GitHub Pages with visual verification. This skill should be used when the user requests deployment, publishing, or explicitly invokes "/deploy". The workflow syncs content, fixes Eagle image paths, builds the site, commits changes, pushes to the v4 branch, and verifies the deployed page using Playwright MCP tools.
---

# Deploy

## Overview

Automate Quartz static site deployment with content sync, Eagle image path fixing, and visual verification to ensure content renders correctly before confirming success.

## Workflow

### Step 1: Sync and Fix Content

To prepare content for deployment, execute these commands sequentially:

```bash
npm run sync && node scripts/fix-eagle-images.mjs
```

**Content Sync** (`npm run sync`):
- Syncs latest content from `../Ataraxia/40. Digital Garden/` to `./content/`
- Ensures all recent articles are included

**Eagle Image Fix** (`scripts/fix-eagle-images.mjs`):
- Scans all markdown files for `file:///...Ataraxia.library/images/...` paths
- Copies images to `content/_attachments/` with descriptive names (using alt text or Eagle ID)
- Updates markdown to use `/_attachments/{filename}` paths
- Prevents broken images in production

To verify no Eagle paths remain:

```bash
grep -r "file:///" content/ --include="*.md" | wc -l
```

Should return `0`. If not, check script output for errors.

### Step 2: Pre-deploy Content Validation

To check for new/modified articles needing permalinks:

```bash
git diff --name-only | grep "\.md$" | head -5
```

For each file without a `permalink` in frontmatter:
- Suggest adding one (English, kebab-case)
- Without permalink, URL becomes `/Articles/{filename}` instead of `/{permalink}`

**Quick Content Checks:**
- 어투 통일 (존댓말/반말 혼용 체크)
- 오타 점검
- 수식 렌더링 확인 (LaTeX 문법)

If critical issues found, fix before proceeding. Minor issues can be addressed post-deploy.

### Step 3: Build the Site

To build the Quartz static site:

```bash
npx quartz build
```

To handle build output, note any "isn't yet tracked by git" warnings but proceed unless actual errors occur. Build errors require resolution before continuing.

### Step 4: Commit and Push Changes

To analyze changes for commit message generation:

```bash
git diff --stat
```

To create an appropriate commit message:
- For new articles: `feat: add {article-name}`
- For content updates: `fix: update {description}`
- For Eagle image fixes: `fix: update image paths for {article-name}`
- For style changes: `style: {description}`
- For multiple changes: summarize the primary change

To commit and push:

```bash
git add . && git commit -m "{generated-message}" && git push origin v4
```

### Step 5: Verify Deployment with Playwright

To allow GitHub Actions deployment to complete:

```
mcp__playwright__browser_wait_for(time: 10)
```

To navigate to the deployed site:

```
mcp__playwright__browser_navigate(url: "https://berom.net")
```

For verifying a specific new article, navigate to its permalink URL instead.

To capture light mode verification:

```
mcp__playwright__browser_take_screenshot(filename: "deploy-light.png")
```

To switch to dark mode:

```
mcp__playwright__browser_snapshot()
```

Identify the theme toggle button (typically labeled "Dark mode" or "Light mode") and click it:

```
mcp__playwright__browser_click(element: "Dark mode button", ref: "{ref-from-snapshot}")
```

To capture dark mode verification:

```
mcp__playwright__browser_take_screenshot(filename: "deploy-dark.png")
```

To check for issues in the page snapshot:
- Missing images (img elements without proper src or 404s)
- Broken links (404 references)
- Layout anomalies
- Eagle `file:///` paths that weren't fixed

To close the browser:

```
mcp__playwright__browser_close()
```

### Step 6: Handle Verification Results

**On Success:**
Report to user:
- Commit hash and message
- Light mode screenshot
- Dark mode screenshot
- "배포 완료!" confirmation

**On Failure:**
To handle detected issues:

1. Report the specific problem with screenshot evidence
2. Ask: "문제가 발견되었습니다: {issue}. 롤백할까요?"
3. If user confirms rollback:

```bash
git revert HEAD --no-edit && git push origin v4
```

4. Re-verify after rollback

## Bundled Resources

### Scripts

**`scripts/fix-eagle-images.mjs`**
- Automatically detects and fixes Eagle plugin `file:///` image paths
- Copies images to `content/_attachments/` with descriptive names
- Updates markdown references to use web-accessible paths
- Uses Node.js built-in modules only (no dependencies)

## Configuration

| Parameter | Value |
|-----------|-------|
| Branch | `v4` |
| Remote | `origin` |
| Site URL | `https://berom.net` |
| Deploy wait | 10 seconds |

## Trigger Conditions

This skill activates when the user:
- Says "배포", "배포해줘", "deploy", "publish"
- Invokes "/deploy"
- Requests to "push to production" or "update the site"
