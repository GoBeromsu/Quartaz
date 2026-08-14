---
title: "Let’s Build an Upstage Solar Skill Creator"
translationKey: upstage-solar-skill-creator
locale: en
sourceLocale: ko
sourcePath: content/Articles/Upstage solar skill creator 만들어보자.md
sourceHash: sha256:0062acc3d7cec5b4dfb965ba45b024e598a2f447f436ba2b156f0b7c256dd924
translationStatus: translated
permalink: upstage-solar-skill-creator
date_created: 2026-04-19
date_modified: 2026-04-19
description: "Agent skill design principles and trial-and-error notes from building a solar-skill-creator for undergraduates with the Upstage API"
tags:
  - agent-skill
  - ai
  - upstage
---

# 2026 JNU x Upstage Skillthon: Skill-Creator Development Journey

## Introduction

The 2026 JNU x Upstage Skillthon event led us to create a **skill-creator** tool to help undergraduate students easily build skills. This tool assists in creating skills using the Upstage API. Today, I'd like to share what I learned through this process.

I started by exploring what skills are used in agents. What makes them different from traditional prompts? Looking back 2-3 years, I was copying prompts and pasting them into ChatGPT. I wondered if skills are simply tools that make prompt copying and pasting easier.

## What is Skill

Reading the [Agent Skills official documentation](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview), I discovered the core concept is **Lazy Loading**. Essentially, current agents' LLMs are constrained by context window limits. Therefore, we need to use this memory resource effectively. Assuming the model is already smart enough, to make our smart friend work well, we should provide tools when needed and only know about them when necessary. For this purpose, skill standards have name and description in YAML format. When the model loads initially, only the skill's name and description are loaded into the context window.

This means the agent only fetches the body part of SKILL.md when needed. This saves context.

Additionally, placing name and description in fixed positions at the front is advantageous from a KV-cache perspective. LLM APIs reuse K/V vector calculations when the prompt's prefix (front part) is identical to previous requests. According to Anthropic Claude's [prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching), when the cache hits, costs reduce to about 1/10. If the skill's name+description is fixed in the same position every turn, this prefix stabilizes, increasing cache hit rate. This is why the [Manus team](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns.html) identified [KV-cache hit rate](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus) as the most important single metric for production agents. Moreover, current skills can include references and assets under nested folders. This is essentially an extreme technique for saving context through procedural approaches.

Looking at this, I see computer science philosophy embedded in lazy loading and caching.

A skill is essentially a set of tools that tells the model what tools are available.

So what makes a good skill? Anthropic shares [best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices). A good skill tells our smart model what it doesn't know. This includes our team's procedures, domain expertise called tacit knowledge, latest data that appeared after model training, and workflows that the model already knows but require specific order and repetition.

When converting a PDF to markdown, if you simply say "Convert this PDF to markdown," it will do it, but you won't be satisfied. For example, if you say "Convert to markdown" without the context that markdown is top-down and emojis in corners of books lose meaning and should be removed, that context disappears. There are countless types of books. Skills need to cover this ambiguity.

There's a frequently seen sentence in Anthropic documentation: "Start simple." Skills are the same. Start with SKILL.md, and when procedures become complex, expand it. Add references and forms.

Finally, add a feedback loop. Write what the expected output is from input → processing → output.

## How I Made Skill

Initially, I thought I could take Anthropic's quality skill-creator and add Upstage API support. If I give a good skill-creator the API information, it would do well. That might work, but the problem is I'm not the creator of the skill-creator. Also, Anthropic's skills are optimized for Claude, but if an undergraduate student using Codex takes this skill, they won't know what "cowork" means and will have to add unnecessary context to the skill.

Starting with the skill-creator, I gradually removed prompts while reading through it. The original skill-creator has large evaluation logic to progressively strengthen skills through a "write → evaluate → improve" loop. However, the scope of the solar-skill-creator I'm making is "helping undergraduates create skills that work with Upstage API." I decided to leave progressive strengthening to the user's responsibility.

Instead, I embedded the skill format (folder structure, SKILL.md frontmatter format, reference/asset placement rules) into the skill itself to verify if the output is correct. The format itself acts as a verification mechanism to check if the output is a valid skill. So I removed evaluation logic and started from creation, and removed assets and scripts. I changed the example from Claude to agent (Codex, Claude, etc.).

I also read the Upstage API docs one by one. While reading, I found information about what formats each API supports, what DPI should be used when processing PDFs, the difference between sync and async, and tips. Information about API formats and advice like "it's better to split large PDFs."

After reading the docs, I saw mental models like chat, parse, extract, classify, embed, so I added API-specific references based on these.

Since this is an API-using skill, I added environment variables to use API keys instead of hard-coded scripts.

The resulting solar-skill-creator draft embodies my intentions like best practices:

- Put API keys in environment variables for security
- Show API format examples in code blocks to explain how to make API requests
- Separate references by API so the model only loads necessary API information
- Explain supported formats and constraints for each API
- Create skills following the current agent skill format
- Since the skill creator's reference notes may become outdated, read machine-readable Upstage API docs when errors occur

## Conclusion

As a result, I created a solar-skill-creator for the JNU hackathon. Since I'm dogfooding it, I'm seeing various issues as I use it. When converting books I have to PDF, it extracts emojis as images and adds them, but in markdown, emojis themselves lose meaning and need to be removed, adding my personal context. I'm solving this and using Upstage's own Solar to correct line breaks and clean up unnecessary images in the processed markdown.

Based on this, I was able to process a 225-page book into markdown in a short time. Using the skill-creator, I chunked the PDF and ran it through the placement to convert it to markdown.

The hackathon is ongoing, so I expect there will be many things to consider and fix in the future, but it's enjoyable. Thank you.

## References

- [Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Agent Skills best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
- [Anthropic prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching)
- [Context Engineering for AI Agents: Lessons from Building Manus](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)
- [프롬프트에서 하네스까지 — AI 에이전틱 패턴 4년의 기록](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns.html)
