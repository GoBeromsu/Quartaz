---
aliases: []
date_created: 2024-08-21
date_modified: 2024-08-21
permalink: hookmark-in-zotero-7
tags:
  - zotero
  - research
title: "How to use hookmark in zotero 7"
---

I’m currently using Zotero for my research, Zotero is free and easy to use.  
This week, I upgraded to Zotero 7 beta because it has a better design than the previous version. However, when I launched the new Zotero and tried to use Hookmark to connect the Obsidian vault with Zotero, Hookmark was not working.

Today, I will share how I solved this problem

## Zotxt Extension

Go to the [zotxt GitHub page](https://github.com/egh/zotxt). Download Zotxt suitable for your version of Zotero. Install zotxt by following the instructions on the its GitHub page.

Zotxt is a Zotero extension for supporting utilities that deal with plain text files (e.g., markdown, reStructuredText, latex, etc.) This plugin will be used for Hookmark required text to make hookmark link

## Zotero-markdown-translator

Go to the [silentdot/zotero-markdown-translator GitHub page](https://github.com/silentdot/zotero-markdown-translator?tab=readme-ov-file). download the Zotero translator from the repository. Then install the translator by following the instructions provided on the Github page.

The Zotero Markdown Translator plugin creates Markdown links when exporting. To solve my problem, I needed to change the Item Format to `Markdown Item URI`

![](/_attachments/medium-8c863d3dca9f-01.png)

- Go to the **Export** tab.
- Set the **Item Format** to `Markdown Item URI`.
- This ensures that your exported items are in the correct format for Markdown.

## Conclusion

![](/_attachments/medium-8c863d3dca9f-02.png)

Finally, reboot Zotero and check if the problem is solved. If you need further information,The latest discussions around Zotero 7 beta and its compatibility with Hookmark can be found [here](https://github.com/egh/zotxt/issues/37). It includes updates on potential issues and fixes related to Hookmark.

---

*2024-08-21에 [Medium](https://beromkoh.medium.com/how-to-use-hookmark-in-zotero-7-8c863d3dca9f)에 쓴 글을 옮겼습니다.*
