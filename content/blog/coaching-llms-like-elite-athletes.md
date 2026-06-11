---
title: 'Stop benchmarking your LLM. Coach it like an athlete.'
description: 'The teams getting real value from AI aren''t the ones running benchmarks. They''re the ones putting models in real situations and coaching them through. Here''s the playbook.'
datePublished: '2026-04-08'
dateModified: '2026-04-08'
author: 'Jim Zaslaw'
topics: ['Operating System', 'Frameworks', 'Strategy']
featured: true
coverImage: '/images/blog/coaching-llms-like-elite-athletes.png'
coverImageAlt: 'An athlete standing before a wall-sized performance display analyzing his biometrics — representing coaching large language models with the same discipline as elite athletic training.'
faq:
  - question: 'What''s wrong with benchmarking LLMs against fixed tests?'
    answer: 'Benchmarks measure performance on static, isolated tasks — like measuring an athlete''s vertical jump in an empty gym. They don''t reveal how a model behaves in a real workflow with shifting context, ambiguous goals, and the need to improvise. Real performance only shows up in real situations.'
  - question: 'How do I know which LLM is right for my use case?'
    answer: 'Run your actual work through several models. GPT-5 is highly steerable and responds well to detailed prompts. Claude tends to be faster and more consistent with lighter prompting. Gemini has tight Google integration. The right model is the one that fits your team''s tasks, not the one with the highest benchmark score.'
  - question: 'When should I stop iterating on a prompt?'
    answer: 'When you see repetition without progression — the outputs vary in form but not in substance — you''ve plateaued. That''s the signal to switch tactics: change the framing, try a different model, or adjust the underlying scenario rather than refining the same prompt for the tenth time.'
---

**TL;DR.** Most teams treat LLMs like calculators — feed in a prompt, get an answer, judge it on the answer. The teams that get real value treat them like athletes — put them in real situations, watch them work, give specific feedback, and adjust. This is what coaching looks like when the player is a model.

I work with teams every week who are stuck in the same loop. They picked an LLM. They're using it for a few things. The output is okay. They're not sure if they're using it right, and they keep reading benchmark comparisons looking for a model that will magically perform better.

The problem isn't the model. The problem is the coaching.

## What's actually wrong with benchmarks?

Benchmarks measure narrow performance on isolated, static tasks. Knowledge recall. Code completion. Summarization fidelity. They're useful for model labs comparing architectures, but they're a weak signal for whether a model will perform in your team's actual workflow.

Watch a model in a real workflow and a different picture emerges. It has to navigate ambiguity, hold context across multiple turns, push back on bad assumptions, recover from misinterpretations. Benchmarks can't measure any of that — and benchmarks can't tell you whether a model fits *your* team's tasks.

The frame I'd use instead: don't benchmark. Coach.

## 1. Set up an arena, not just a test

Coaches don't evaluate athletes by isolated drills. They watch them in scrimmages, with shifting variables and real opponents. Do the same with your model.

Frame the work as a dynamic challenge — a multi-turn negotiation, a long-running project plan, a content series with twists. Define a clear outcome ("a launch plan our PM will actually use") and let the model improvise toward it. The behavioral patterns you'll see — where it hedges, where it overclaims, where it surprises you — are the signals you actually need.

## 2. Record the tape

Coaches review game film. You should review chat logs.

Don't just judge each output in isolation. Save runs. Compare them. Vary the prompt slightly and see what shifts. You'll start to spot patterns — the model defaults to certain structures, hedges in certain spots, gets repetitive after certain context lengths. These patterns are coachable.

## 3. Learn each model's playing style

Every model has tendencies. GPT-5 is highly steerable; clear, detailed prompts produce sharp responses. Claude is consistent and fast — strong with lighter prompting and longer documents. Gemini is tightly integrated with Google's data ecosystem and shines when fresh information matters.

Knowing the playing style means you can match the model to the job, not the marketing copy to your stack. Steerable models for nuanced creative work. Consistent models for production-line tasks. Don't pick one and force everything through it.

## 4. Drill under pressure

Practice in a quiet room is one thing. Performance under stress is another.

Once your team is comfortable with a model in a controlled setting, push it into harder scenarios. Cascading multi-step tasks. Mid-flow constraint changes. Forced trade-offs. Watch where it stays composed and where it falls apart. That's where you'll find the boundary of where this model can be trusted to operate without supervision.

## 5. Treat prompts like coaching cues

The best prompts don't read like instructions. They read like the cue a coach gives a player before a play.

- **Be explicit about role:** "You are a senior CFO advising a 30-person SaaS company on cash runway."
- **Show the form you want:** Provide one example of the output structure.
- **Refine incrementally:** "Tighter. Cut the hedging. Lead with the conclusion."

You're building muscle memory — yours and the model's. After a few rounds, you'll have a working prompt that reliably produces output your team can use.

## 6. Use self-play and feedback loops

For more sophisticated workflows, let models check each other.

Run an output through a second model and ask it to critique the first. Use a third to score them both against your criteria. The patterns are well established now — *self-play preference optimization*, *reinforced self-training*, multi-agent debate. None of this is bleeding-edge anymore. It's just a feedback loop where the coach is also a model.

## 7. Recognize the plateau

You'll hit a point where prompting harder stops producing meaningfully better output. The model is varying form but not substance. Each round of refinement makes things 5% sharper, not 50%.

That's the plateau. Stop refining the prompt. Switch tactics:

- **Change the arena.** Reframe the task entirely.
- **Switch the model.** A different model may simply be better at this kind of work.
- **Restructure the input.** Give more context, or less. Reorder the components.

Refining a stuck prompt for the tenth time is wasted energy. Recognize the plateau and move on.

## 8. Combine the metrics with the eye test

Benchmarks and coverage stats matter — they tell you whether a model is even in the running. But once you've narrowed the field, the eye test is what matters. How does the model handle ambiguity? Does it follow your team's voice? Does it know when to push back and when to defer?

The best LLM for your team is rarely the one at the top of the leaderboard. It's the one your team can coach into being useful.

## What this looks like in practice

When I run a [Service 01: AI Operating System](/services/ai-operating-system) engagement, this is most of the work. We pick the right models for the right jobs. We build prompt libraries that read like coaching playbooks. We set up the feedback loops so the team can keep getting better without me in the room.

Most teams stop after step 1 — picking a model. The teams that compound results don't stop until they're coaching at all eight.
