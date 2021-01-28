---
title: On the best software
date: 2021-01-27T02:32:55.073Z
author: Ryan Jung
summary: An explosion of my thoughts about software development, and answering what my "tech stack" is.
tags:
  - web development
  - project management
---

After a year and a half of being a member of [C4C](https://c4cneu.com) and complaining about our tech stack, I realized it would be good to finally compile all my thoughts about what we're doing wrong into a blog post.

Since I hate reading long meandering articles from people who aren't very skilled at writing (i.e. me) I'll keep it short and elaborate afterwards.

Axioms of software development:

- In general, **Less code is better code**. 
- Let **form follow function**. 
- Programming is a people discipline. **Make it fun**.

Design recipe for creating software:

- Know a lot of technologies and languages.
- Aim to write less code with *semantic* structure.
- Create a list of features for the project.
- Purposefully choose the set of technologies best suited for the job.
- Develop in short complete iterations. Celebrate each one.

Why so vague? Because software development is hard and a single solution to all software development problems doesn't exist. Such a solution would have to cover a multiude of use cases and therefore be incredibly complex. It would then fail to be small, functional, and flexible. (see Rails, Redux, Django, request, and anything written in Java). A framework (or *scaffold*) that premeptively solves too many problems can often become bloated and complex. Instantly starting a project with two dozen folders and more files is a recipe for disaster. You immediately lose ownership of the project.

An attempt at a solution to this problem is small batteries-not-included base frameworks and powerful specific utility packages - AKA **Progressive Enhancement**. Its not perfect, but by using packages/modules to slowly increase complexity leads to the project growing naturally and inuitively.

A project that *grows* into its purpose will often fufill that purpose better and in less code. Another way to say this is that all frameworks/scaffolds will look and feel like boilerplate.

Yet another way of stating the same thing is that we want to maximize purposeful code and minimize boilerplate. When we write code with purpose we enjoy it more and will understand it better. Purposeful code is also often more semantic but not always.

**Every agile cycle should be a complete iteration, and they should be as short as humanly possible**. **More milestones, not less**. The best way to iterate fast with many people is with small modular code.

People also often forget that software developments are not robots, but in fact living breathing creatures. They deserve to be praised and feel proud of their work.

## Example: LLB

