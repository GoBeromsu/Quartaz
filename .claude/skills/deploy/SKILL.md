---
name: deploy
description: This skill automates Quartz static site deployment to GitHub Pages with Playwright-based visual verification. This skill should be used when the user requests deployment, publishing, or explicitly invokes "/deploy". The workflow includes building the site, committing changes with auto-generated messages, pushing to the v4 branch, and verifying the deployed page in both light and dark modes using Playwright MCP tools.
---

# Deploy

## Overview

Automate Quartz site deployment with visual verification to ensure content renders correctly before confirming success.

## Workflow

### Step 0: Pre-deploy Checklist

Before building, verify the content quality:

**1. Permalink Check**
- Check if new/modified articles have `permalink` in frontmatter
- If missing, suggest adding one (English, kebab-case)
- Without permalink, URL becomes `/Articles/{filename}` instead of `/{permalink}`

```bash
# Check frontmatter of modified markdown files
git diff --name-only | grep "\.md$" | head -5
```

**2. Content Review**
- 어투 통일 (존댓말/반말 혼용 체크)
- 오타 점검
- 수식 렌더링 확인 (LaTeX 문법)
- 이미지 경로 확인 (`file:///` 경로가 없는지)

If issues found, fix before proceeding. If all good, continue to Step 1.

### Step 1: Build the Site

To build the Quartz static site, execute:

```bash
npx quartz build
```

To handle build warnings, note any "isn't yet tracked by git" warnings but proceed unless actual errors occur. Build errors require resolution before continuing.

### Step 2: Commit and Push Changes

To generate a commit message, analyze the staged changes:

```bash
git diff --stat
```

To create an appropriate commit message:
- For new articles: `feat: add {article-name}`
- For content updates: `fix: update {description}`
- For style changes: `style: {description}`
- For documentation: `docs: {description}`
- For multiple changes: summarize the primary change

To commit and push:

```bash
git add . && git commit -m "{generated-message}" && git push origin v4
```

### Step 3: Verify Deployment with Playwright

To allow GitHub Actions deployment to complete, wait 10 seconds:

```
mcp__playwright__browser_wait_for(time: 10)
```

To navigate to the deployed site:

```
mcp__playwright__browser_navigate(url: "https://berom.net")
```

For verifying a specific article, navigate to its permalink URL.

To capture light mode verification:

```
mcp__playwright__browser_take_screenshot(filename: "deploy-light.png")
```

To switch to dark mode, locate and click the theme toggle:

```
mcp__playwright__browser_snapshot()
```

Identify the dark mode button (typically labeled "Dark mode" or "Light mode") and click it:

```
mcp__playwright__browser_click(element: "Dark mode button", ref: "{ref-from-snapshot}")
```

To capture dark mode verification:

```
mcp__playwright__browser_take_screenshot(filename: "deploy-dark.png")
```

To check for issues, examine the page snapshot for:
- Missing images (img elements without proper src)
- Broken links (404 references)
- Layout anomalies

To close the browser:

```
mcp__playwright__browser_close()
```

### Step 4: Handle Verification Results

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
