---
aliases:
  - Agent Driven Development
  - 에이전트 주도 개발
date_created: 2026-04-10
date_modified: 2026-04-10
moc: "[[📚 801 Blog]]"
status: inprogress
tags:
  - artificialintelligence
  - softwareengineering
quartz_url: null
tistory_url: null
medium_url: null
type: article
translationKey: agent-driven-development-process
locale: en
sourceLocale: ko
sourcePath: content/Articles/Agent driven developement process.md
sourceHash: sha256:47f1e37c0af34b9d4617a8f702d5cc5fef1b114eba890d5c397bbbde341aedbe
translationStatus: translated
permalink: agent-driven-development-process
title: Agent Driven Development Process
---

## Agent Driven Development Process

> [!abstract] TL;DR
> Each skill is my own strength, my internal power, and the system is what operates those skills. Training is the painful process of observing patterns in external systems, internalizing them, and building up skills of my own. This essay reflects on what I should do in the age of agentic coding.

I began writing this from a concern about what I should learn in this era and what I should leave behind. The starting point is [[결국 모든 것은 loop]]: in the flow from harness engineering to prompt engineering and context engineering, the point is that agents autonomously solve problems. A necessary Loop emerges for that purpose.

## Diagnosis of the Era: A World Where Execution Has Become Cheap

CEO [[노정석]] says that almost every problem can be converted into a compute-based search problem. Set a goal and run the Loop until it passes evaluation. OpenAI's harness-engineering article demonstrated this in practice. A small number of engineers handed execution to agents, while humans focused on environment design and feedback loops, producing one million lines of code in five months.

[[Geoffrey Huntley]], the creator of the [[Ralph Loop]] and an engineer who advocates for an "automated software factory," says in [[Everything is a Ralph Loop]]: "Software is now clay on the pottery wheel." His claim is that this is no longer an era of stacking bricks one by one, but an era of programming loops. Recently, we saw evidence for this claim in [[What you need to learn from claw-code repo|claw code]]. Converting a large-scale codebase in a few hours has become possible.

In the end, I understand that software development will be converted into a compute-based search problem, and that it will become something shaped down through repeated Loops, like turning a pottery wheel. [[Simon Willison]], Django co-creator and blogger specializing in AI development tools, also diagnosed in [[Designing Agentic Loops]] that the ability to design agentic loops itself is a core competency of this era. This flow seems to be continuing.

Then what should young me do? I think it is the ability to make Loops. This does not mean [[Software Engineering]] is unnecessary, nor does it mean AI will do everything and we should simply wait comfortably for that time. I think the need to gain hard experience and study intensely has not changed. We live in a world where problems appear faster than we solve them, and in a world where many more problems have become solvable. We need to build loops that solve problems.

Fundamentally, energy is required for putting in input and getting output, and for keeping entropy low. Humans have no choice but to operate as that module, because desire comes from humans, and because problems are defined by humans.

If I define the ability to make loops in more detail, it includes designing which tools to provide and which grand rules to set. At a smaller scale, I think it also includes the concept of delegation.

Do all Big Tech codebases have similar structures and architectures? They do not. The structure changes according to the problem. There is a gap here. The world is still complex, there are many problems to solve, and I think we need to focus on where to invest computational capacity in order to solve those problems.

## Internal Power and Martial Arts: The Distinction Between Skills and Systems

In martial arts fiction, a trainee observes secret manuals of external martial arts, embodies their principles, and turns them into their own internal power. A person with deep internal power shows different force no matter what weapon they hold. Recently, I have been thinking that what people call skills is not very different from martial arts. Similar plots already appear in webtoons. Anyone can register and use a skill with one click, but there are also people who go through hardship to train in martial arts.

I think the skills given to OpenClaw, Claude Code, and Codex are not different from game skills or martial arts.

Each individual tool and capability I create becomes strength. If I create and distribute my skill, anyone can use it. But the only person who can explain why it was made this way is me. In martial arts fiction, when martial arts accumulate, a door opens; each skill connects with others and reveals a unique flow; and when that flow coheres, it becomes a sect.

When my own unique skills accumulate and show my own flow, they will give value to my growth and to myself. In that sense, we become the elders of a sect, and agents become disciples.

> Hey, tsk, that is not how you do it. Give it here. This is how it is done.

Let us turn the Loop into a sect. We, who solve many problems in the world, are the founders of each sect. Our training is to turn internalized capabilities into skills and give them to disciples, to transmit insight, and to give this martial art, this Loop, to students, the agents.

We need to train and internalize while standing on the shoulders of giants who presented concepts such as ralph, autopilot, and autoresearch. We have no choice but to verify at which layer we can solve problems that cannot be solved by one-click execution alone: whether it is a skill, a loop, a batch, or whether the benchmark is wrong.

An internalization process in my own context is necessary. And it is truly painful. The brain screams. I think real internal power accumulates when I try many skills, ask "this is really good, why is it good?", and translate that problem into my own problem.

This does not mean creating every skill directly from scratch alone. It means watching the trajectories of earlier giants and rising stars, using what they made, and internalizing it.

## Five Principles

### 1. Turn Every Problem Into a Search Problem, and Every Search Into a Loop

When there is a problem, turn it into a structure that can be searched, then turn that search into a repeatable loop. This is also what [[Harness Engineering]] describes: wrapping non-deterministic model behavior with deterministic workflow primitives such as goal-setting, evaluation loops, routing, and fallback.

In practice, this means writing a spec, having an agent run the loop, and repeating until the evaluation passes. It is not "somehow do it well." It is redefining the problem as "what goal should be set, and how will it pass?"

### 2. Build Up Your Own Skills: Skills Are Internal Power

I think what this era requires is using many tools while building up my own tools. Seeing that someone used something, then leveling up my own version of it. Like building up one's own skills in martial arts fiction.

Anyone can use the same model and the same CLI. The difference comes from the depth of the skills built on top of them. As OpenAI showed in [[Harness engineering leveraging Codex in an agent-first world]], I think the source of differentiation is not the stronger model itself, but the surrounding process: rails, verification, routing, and so on.

Even with a single Obsidian CLI, I may use it for debugging, while another person may use it with a different philosophy. Multiple skills can branch out from one CLI.

### 3. The Spec Determines the Quality of the Loop

I am learning that a detailed spec matters when running a loop. Whether it is the [[Ralph Loop]] or autopilot, the quality of the input spec determines the quality of the output. This is also what [[Harness Engineering]] emphasizes: once the goal stabilizes, the loop removes chaos and refines the result.

I understand that Google created DESIGN.md and OpenAI gathered grand rules under docs/ in order to make good specs. They record their own philosophy and make it repeatedly referable. A Spec is not a one-off document; it is a crystallization of accumulated judgment.

### 4. Internalize Grand Principles, but Be Able to Explain the Reason for Violating Them

There are grand principles. But the world is complex. When a situation arrives where a grand principle must be violated, **you must also be able to explain why it can be violated.** This is the difference between "knowing" a principle and "internalizing" it.

OpenAI expressed this as "enforce boundaries centrally, allow autonomy locally." Boundaries are enforced at the center, while freedom is allowed inside them. Principles are not prisons; they are maps. Only those who know how to read a map can also take roads that are not on the map.

### 5. Dogfooding Is the Only Antifragile Path

The skills we struggle to make are fragile. The world is complex, and nothing works forever after being made once. [[Entropy]] inevitably rises. The only way to gain Antifragile properties is **to keep dogfooding what I make**.

As Huntley said: "watch the loop — that is where your personal development and learning will come from." Watching the loop, finding the failure domain, and solving it so it does not happen again. This repetition turns a skill from fragile into antifragile.

## The Process of Training

Training consists of three stages:

1. **Observation (觀)**: Observe external systems and patterns. How OpenAI designed its harness, why Huntley insists on a monolithic single-process loop, and why CEO Noh Jung-seok says to turn everything into a search problem. Try good harnesses.
2. **Internalization (化)**: Translate the observed patterns into my own problems. Cognitively understand the principles and transform them to fit my own context. This is the painful process.
3. **Accumulation (積)**: Turn what has been internalized into skills, repeatedly use those skills, and dogfood them. Over time, the skills naturally connect into a system.

What matters in this process is not speed but direction. Execution has already become cheap. What is expensive is **the evaluation criterion for discerning which problems deserve compute and time**: in other words, the trainee's eye.

## References

- [[Harness Engineering]]
- [[Everything is a Ralph Loop]]
- [[Harness engineering leveraging Codex in an agent-first world]]
- [[Designing Agentic Loops]]
- [[EP 91. 26.1Q 비즈니스 관점에서의 AI]]
- [[EP 74. 비즈니스 관점에서 오늘의 AI - 도망자 연합 발족 선언]]
- [[2026-03-31 Google Summer of Code]]
- [[노정석]]
- [[AI Agent]]
- [[Agentic AI]]
- [[Geoffrey Huntley]]
- [[Simon Willison]]

## Next Step

- Use [[Agent Skill Deploy]] to configure and manage my own skills.

## Thinking

> 💭 [[2026-04-10]] 14:39
> Did this perspective come from the reinforcement learning side?

---
