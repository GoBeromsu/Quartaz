---
aliases: []
date_created: 2024-09-06
date_modified: 2024-09-06
permalink: fixing-couldnt-find-remote-ref-obsidian-plugin
tags:
  - obsidian
  - typescript
  - troubleshooting
title: "How I Fixed the ‘Couldn’t Find Remote Ref’ Error in My Obsidian Plugin"
---

I recently created my first community plugin for Obsidian, which has basic functions for practicing pronunciation. After submitting it, I received feedback from a reviewer suggesting I change the plugin’s name because its features are more focused on the pronunciation of selected text.

Following the advice, I updated the information in `manifest.json`, `README`, and the repository name. After making these changes, I submitted my pull request (PR) again but encountered an error:

```
Error: fatal: couldn't find remote ref refs/pull/4172/merge
The process '/usr/bin/git' failed with exit code 128
```

I believe the error was caused by the repository name change. Even though I updated everything, the workflow still referenced the same old information:

```
Repo info: goberomsu/british-pronunciation-plugin
Found issue: Your repository does not have issues enabled. Users will not be able to report bugs and request features.
```

Fortunately, I realized what was wrong and fixed it!

## How to Solve This Issue

If you’re facing a similar issue, as discussed in [this forum post](https://forum.obsidian.md/t/plugin-validation-fails-couldnt-find-remote-ref/78863), here’s a simple solution:

1.  **Delete the Obsidian release fork**: Remove the forked repository from your GitHub account.
2.  **Fork the release again**: Fork the original repository once more to your account.
3.  **Create a new Pull Request (PR)**: After making your changes, open a new PR to submit your code.

![](/_attachments/medium-bbaa58a4d7a7-01.png)

This process resets the fork, allowing you to avoid the “couldn’t find remote ref” error during validation.

---

*2024-09-06에 [Medium](https://beromkoh.medium.com/how-i-fixed-the-couldnt-find-remote-ref-error-in-my-obsidian-plugin-bbaa58a4d7a7)에 쓴 글을 옮겼습니다.*
