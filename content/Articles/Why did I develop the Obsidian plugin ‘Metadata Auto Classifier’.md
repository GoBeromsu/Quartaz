---
aliases: []
date_created: 2024-10-10
date_modified: 2024-10-10
permalink: why-i-built-metadata-auto-classifier
tags:
  - obsidian
  - obsidian-plugin
  - typescript
title: "Why did I develop the Obsidian plugin ‘Metadata Auto Classifier’?"
---

Recently, I’ve been developing an Obsidian plugin, [Metadata-Auto-Classifier](https://github.com/GoBeromsu/Metadata-Auto-Classifier). The main motivation was that I wanted to create a plugin directly in Obsidian, which is my favorite tool. Also, as the name suggests, entering metadata into notes manually is cumbersome and I wanted to solve this problem.

## Why is metadata important?

Obsidian allows you to add metadata to notes just like Notion or any other database. At first, I didn’t see the importance of adding custom metadata beyond tags and aliases, but as I created more and more notes, I realized the value of metadata.

The longer and more numerous your notes become, the more time it takes to understand the context when you come back to them. That’s where metadata can quickly tell you what the note is about and what its purpose is. Metadata like creation date, title, tags, and more can help you characterize a note and remind you of what it’s about.

Well-written metadata can help you manage your information by letting you know where a note fits in your body of knowledge. For example, if you want to write a **JavaScript tutorial**, you might utilize metadata like this

- **Search for project notes**: You can browse project notes created with JavaScript.
- Leverage tags: You can collect notes tagged with “js”.
- Role-based filtering: Find notes with the metadata “developer” to see how you used JavaScript as a developer.
- Browse pages by topic: Find pages named ‘JavaScript’ to synthesize relevant information.

In this way, metadata can help you organize information about JavaScript from multiple perspectives.

## Enhance your knowledge with metadata

![](/_attachments/medium-405a81f16657-01.jpg)

In the high-freedom Obsidian environment, front matter (metadata) provides an additional dimension to how we view our knowledge. By collecting notes based on specific metadata — like project notes or developer insights — we can focus on specific aspects of our work. This organization allows me to see all the work I’ve done as a developer or review all the notes related to a specific project.

To give you an example of my notes in action, when I keep notes about programming, I link my 🔥 Programmer notes to an attribute called persona.

![](/_attachments/medium-405a81f16657-02.png)

When I link to my 🔥 Programmer notes, when I go back to them later, I can see how much programming-related work I’ve done, as shown below!

![](/_attachments/medium-405a81f16657-03.png)

As a result, metadata plays an essential role in helping you quickly find the information you need among your vast collection of notes, and in managing your knowledge efficiently.

## Plugin introduction

The [Metadata-Auto-Classifier](https://github.com/GoBeromsu/Metadata-Auto-Classifier) analyzes the content of the current note and recommends values for each metadata field using LLM. It reads the contents of the document and allows you to sequentially enter multiple frontmatters for that note. Users can categorize notes based on attributes they set. For this purpose, we have set `tags` as the default value and can automatically insert tags based on relevance from all the tags you currently have.

So, you can **enter frontmatter and customize the number of entries**.

## Currently supported features

![](/_attachments/medium-405a81f16657-04.gif)

- Automatic document categorization via API

Use AI models to analyze document content and automatically assign appropriate categories.

- **Create custom frontmatter**.

Add and manage frontmatter fields as you wish.

- Auto-generate tags

Automatically generate relevant tags based on document content.

## Points of concern as a developer

### 1. Expand support for open source AI models

- Integrate different LLMs: We currently use the OpenAI API, but to make the plugin more flexible and accessible, we are considering compatibility with local Local Language Models (LLMs) or other open source AI models. This will allow users to choose their favorite AI model or apply a custom model.
- Modular architecture design: We want to modularize the architecture of the plugin to support different AI models. By defining interfaces or abstract classes to create implementations for each AI provider, we can minimize code changes when adding new models.
- Performance and compatibility validation: Open source models vary in performance or API structure, so you’ll need performance testing and compatibility validation for each model.
- For this, we plan to build automated test suites and integrate the validation process in a continuous integration (CI) environment.
- I’m wondering how to create test cases in Obsidian haha

### 2. Support partial contextual analysis.

- Selection-based processing: When a user selects a specific part of a note, we want to add the ability to generate metadata based on that part only. To do this, we need to implement logic to detect the selected text in the editor and pass it to the AI model.
- Content segmentation and parallel processing: Long notes can hit the token limit, so we are considering splitting the note into meaningful units, processing each part separately and then combining the results.
- Context preservation strategies: The full context can be lost when generating metadata based on partial content, so we plan to provide a summary or keywords from the note to help the AI model produce more accurate results.

### 3. Provide custom taxonomies.

We want to improve classification accuracy by providing the AI model with clear instructions or examples of how each front matter item should be categorized. Currently, we rely on the user to provide the values that should be categorized and the AI will make a judgment call. We believe that by adding context to the categorization, the AI will be able to categorize more closely to the user’s intent.

### 4. Strategies for handling large volumes of notes

- Workaround for token limit: Currently, we process the entire note at once, but for long notes, the token limit can cause issues. To solve this problem, we are considering splitting the note into parts of a certain size, processing each part sequentially or in parallel, and then synthesizing the results.
- Summary-based processing: We’re also looking at ways to extract the key content of a note, or generate a summary, and generate metadata based on that summarized information. This could speed up processing time and alleviate token limit issues.
- Memory and performance optimization: We plan to apply algorithms and data structures to minimize memory usage and optimize performance when processing large amounts of data.

### 5. Improved User Experience (UX).

- Intuitive UI design: We are working on improving the interface of the plugin to make it easier for users to understand and utilize its features. We’re redesigning icons, menu structure, settings screen, etc. to make it more user-friendly.
- Provide real-time feedback: Provide transparency to users by displaying progress or results in real-time during the metadata generation process. For example, a progress bar or notification message lets users know what is currently being done.
- Increase customization: To address different user needs, we plan to expand our settings options and introduce presets or profiles so that users can customize the plugin to fit their workflow.
- Provide help and guides: We will provide tutorials, FAQs, tooltips, and other help to make it easier to understand what the plugin does and how to use it. This will make it easier for first-time users to utilize the plugin.
- Improve error handling and logging features: We will provide clear error messages and solutions when errors occur, and improve the system to make it easier to diagnose problems through logging features.

---

*2024-10-10에 [Medium](https://beromkoh.medium.com/why-did-i-develop-the-obsidian-plugin-metadata-auto-classifier-405a81f16657)에 쓴 글을 옮겼습니다.*
