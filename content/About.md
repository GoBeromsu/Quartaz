---
aliases: []
authorship: mixed
created_by: user
date_created: 2026-01-18
date_modified: 2026-11-25
description: "Public About page of beomsukoh.com. Introduces Beomsu Koh in the first person: mission, current work, open-source tools (Obsidian plugins, MCP servers, agent skills), research, teaching, awards, bio and contact. Update it together with the home-page profile when the CV changes."
permalink: about
tags:
  - digital-garden
title: About
type: note
status: done
---

> "The only way to save yourself is to struggle to save others."
> — _Zorba the Greek_, Nikos Kazantzakis

## About Me

Hello, I'm Beomsu Koh, an AI engineer and educator.

I build and run products through agent-driven development, publish open-source tools for Obsidian and personal knowledge systems, and teach what I learn along the way. Alongside product work, I pursue first-author software-engineering research on tangled code commits.

### Missions

All technology amplifies intent. I believe good intent makes the world better.

I want to stop attention theft and the seizure of people's cognitive resources, and help people stay truly focused on what matters to them.

## Work

- **SeeON** (2026.06 – 2026.10, Senior AI Lab, co-founder and CTO): a system that detects falls of older adults in care-facility CCTV video in real time and raises alerts. I built it alone, from dataset and model training to backend, GPU serving, the monitoring frontend and testbed installation. With DeepStream and a site RTSP hub, one RTX 5070 Ti ingests 13 cameras at 29.97 fps each, and a CUDA preflight check at boot stops the service from serving in a faulty state.
- **KREN AI Ops** (2026.06 – 2026.08, freelance for KREN, sole designer and builder; project name SICHIMI AI Ops): brought agents into KREN's GitOps network operations. Agents stay read-only and propose-only, people approve sensitive changes, and one orchestrator with 11 role-based Hermes Agent workers runs in each team's Slack channel.
- **[OSS Hub](https://jnu-oss-hub.com/)** (2026.07 – now, Chonnam National University, PM & Developer): an open-source contribution tracker for Chonnam students, built with agent-driven development held to quality gates and shipped with three students new to web development. Agents iterate against CLI-measured LCP, CLS and per-route query-count thresholds, cutting LCP by up to 83%.

## Research

**[Detecting Multiple Semantic Concerns in Tangled Code Commits](https://arxiv.org/abs/2601.21298)** — Beomsu Koh, Neil Walkinshaw, Donghwan Shin.

My Sheffield master's dissertation research, which started from a problem: real commits mix several intents, making commit history hard to use. Submitted to _Empirical Software Engineering_ (Springer). It received a major revision, and the revised version was submitted in September 2026. The [dataset](https://huggingface.co/datasets/Berom0227/tangled-ccs-commits) is public on Hugging Face.

## Teaching and Community

- **2026.11**: speaker, "AI agents and developer productivity on a MacBook" at Chonnam National University
- **2026.10 – 2026.11**: on-site mentor, polar-plant smart-farm course by Upstage, Incheon Metropolitan Office of Education and Korea Polar Research Institute
- **2026.09**: "Generative AI, starting from knowledge management" at Chonnam National University, and a preparatory course for the Upstage LLMOps programme with Chonnam National University
- **2026.09 – 2026.11**: mentor, military–academic team projects at Chonnam National University
- **2026.07 – 2026.08**: on-site mentor, Upstage Making AI Beneficial Challenge (MABC 2026)
- **2026.07**: "The agent's manual: writing your own Skill", a talk at Upstage × DGIST AI Build Week
- **2026.04 – 2026.05**: planned, ran and judged the [Upstage × JNU Skillthon](https://github.com/GoBeromsu/JNU-Upstage-Skillthon), and taught its "AI Agent and Skill development" lecture
- **2026.04 – 2026.05**: built the "Harness Engineering Playbook" and was a TA for "Work automation with n8n" (Upstage × FastCampus)
- **2025.10**: conference talk at CMDS PKM Conference 2025, on restoring research context and knowledge-management workflows with AI
- **2023.03 – 2024.06**: TA for data communication and computer networks at Chonnam National University

## Open Source

I maintain seven official Obsidian community plugins, with 19,153 cumulative downloads and 99 GitHub stars as of 24 November 2026. Metadata Auto Classifier was featured in [Obsidian Plugins Review — 83](https://medium.com/technology-hits/obsidian-plugins-review-83-b9a59351199d) on Technology Hits (Nuno Campos, 2024-11-12) and in the [Obsidian Plugin Updates](https://obsidianpluginstats.substack.com/p/obsidian-plugin-updates-2024-10-26) newsletter (Ganessh Kumar R P, 2024-11-02).

| Plugin                                                                                     | What it does                                              | Downloads | Stars |
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------- | --------- | ----- |
| [Metadata Auto Classifier](https://github.com/GoBeromsu/obsidian-metadata-auto-classifier) | Classifies tags and frontmatter with LLMs                 | 8,912     | 59    |
| [Open Connections](https://github.com/GoBeromsu/obsidian-open-connections)                 | Indexes a 13,000-note vault without running out of memory | 5,031     | 23    |
| [Eagle Integration](https://github.com/GoBeromsu/obsidian-eagle)                           | Uploads pasted images to an Eagle library                 | 3,740     | 11    |
| [Note Player](https://github.com/GoBeromsu/obsidian-note-player)                           | Plays a note as a playlist                                | 525       | 2     |
| [QMD Search](https://github.com/GoBeromsu/obsidian-qmd)                                    | Local hybrid search (BM25 + vector + HyDE)                | 786       | 3     |
| [Hermes Control Center](https://github.com/GoBeromsu/obsidian-hermes)                      | Manages remote Hermes agent profiles over SSH             | 125       | 1     |
| [Multilingual Bible Search](https://github.com/GoBeromsu/obsidian-bible-search)            | Searches Korean and English Bible verses                  | 34        | 0     |

MCP servers, CLIs and agent skills:

- [x-m32-mcp-server](https://github.com/GoBeromsu/XM32-MCP): controls Behringer X32/M32 digital mixers over OSC, mapped from reverse-engineered OSC protocol documentation and used on site so an agent adjusts feedback EQ and channel gain.
- [oh-my-second-brain](https://github.com/GoBeromsu/oh-my-second-brain): a knowledge and contract layer that connects Markdown and Obsidian vaults to Claude Code, Codex and Hermes.
- [zotero-cli](https://github.com/GoBeromsu/zotero-cli): library search, item import and citation export for Zotero.
- [craft-skills](https://github.com/GoBeromsu/craft-skills) and [secondbrain-skills](https://github.com/GoBeromsu/secondbrain-skills): vendor-neutral agent skills; secondbrain-skills holds 20 knowledge-management skills that let an agent collect, link and query a vault.

## Awards

- **2026.03 – 2026.09**: Upstage AI Ambassador, cohorts 2 and 2.5, outstanding ambassador ([credential](https://www.credential.net/21cae0a5-624c-4aad-b168-50a43dd29a36))
- **2025.09**: Net Zero Data Challenge 2025 (YHODA, Sheffield, UK), Most Impactful Solution
- **2024.06**: University of Sheffield International Postgraduate Taught Merit Scholarship (£5,000)
- **2023.11**: Kakao Tech Campus 1st cohort, best overall team (grand prize)
- **2022.12**: NET Challenge Camp season 9, silver prize (KOREN partner-institution prize)
- **2022.11**: Engineer Information Processing (정보처리기사)

## Bio

- **2024.09 – 2026.01**
  - M.Sc. in Advanced Computer Science, [University of Sheffield](https://www.sheffield.ac.uk/) — Distinction
- **2020.08 – 2022.04**
  - Served in the Korea Coast Guard
- **2018.03 – 2024.08**
  - B.Eng. in Software Engineering, Chonnam National University
- **1999**
  - Born in Yeosu, South Korea

## Contact

Got any questions, thoughts, or feedback you'd like to share?
Please feel free to contact me via [email](mailto:gobeumsu@gmail.com). I'd be happy to hear from you!

[GitHub](https://github.com/GoBeromsu) · [LinkedIn](https://www.linkedin.com/in/beomsu-koh/) · [YouTube](https://www.youtube.com/@beomsuKoh) · [Hugging Face](https://huggingface.co/Berom0227) · [ORCID](https://orcid.org/0009-0004-2742-2200)
