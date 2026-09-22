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
  - question: 'What does it mean to coach an AI model like an athlete?'
    answer: 'Coaching an AI model means putting it in real situations, watching how it works, giving specific feedback, and adjusting, rather than feeding in a prompt and judging the single answer. Most teams treat LLMs like calculators. The teams that get real value treat them like athletes: they review past runs, learn each model''s tendencies, drill it under pressure, and build feedback loops so the team can keep getting better.'
  - question: 'What''s wrong with using benchmarks to choose an LLM for my business?'
    answer: 'Benchmarks only measure narrow performance on static, isolated tasks, like measuring an athlete''s vertical jump in an empty gym. They are useful for model labs comparing architectures, but they are a weak signal for your team''s actual workflow, where a model has to navigate ambiguity, hold context across turns, and recover from misinterpretations. Benchmarks can tell you whether a model is even in the running. Once you narrow the field, the eye test on real work matters more.'
  - question: 'How do I choose between GPT-5, Claude, and Gemini for my business?'
    answer: 'Run your actual work through several models and see how each one handles it. GPT-5 is highly steerable and responds well to clear, detailed prompts. Claude is consistent and fast, and strong with lighter prompting and longer documents. Gemini is tightly integrated with Google''s data ecosystem and shines when fresh information matters. Match the model to the job instead of forcing everything through one. The right model fits your team''s tasks, not the top of a benchmark leaderboard.'
  - question: 'How do I write better prompts to get more useful answers from AI?'
    answer: 'Write prompts like coaching cues rather than instructions. Be explicit about role, for example "You are a senior CFO advising a 30-person SaaS company on cash runway." Show the form you want by providing one example of the output structure. Then refine incrementally with short cues like "Tighter. Cut the hedging. Lead with the conclusion." After a few rounds, you will have a working prompt that reliably produces output your team can use.'
  - question: 'How should my team test an AI model on real work before relying on it?'
    answer: 'Set up an arena, not just a test. Frame the work as a dynamic challenge, such as a multi-turn negotiation, a long-running project plan, or a content series with twists. Define a clear outcome, like a launch plan your project manager will actually use, and let the model improvise toward it. Then watch where it hedges, where it overclaims, and where it surprises you. Those behavioral patterns are the signals you actually need.'
  - question: 'Why should I save and review my team''s AI chat logs?'
    answer: 'Saved chat logs reveal patterns that judging each output in isolation will miss. Coaches review game film, and you should review AI runs the same way. Save runs, compare them, and vary the prompt slightly to see what shifts. You will start to spot the model defaulting to certain structures, hedging in certain spots, or getting repetitive after certain context lengths. Once you can see those patterns, you can coach them.'
  - question: 'How do I know when an AI model can be trusted to work without supervision?'
    answer: 'You find out by drilling the model under pressure after it performs well in a controlled setting. Push it into harder scenarios: cascading multi-step tasks, constraint changes in the middle of a workflow, and forced trade-offs. Watch where it stays composed and where it falls apart. That boundary shows where the model can be trusted to operate without supervision, and where your team should keep a closer eye on it.'
  - question: 'Can I use one AI model to check another AI model''s work?'
    answer: 'Yes. For more sophisticated workflows, letting models check each other is a well-established pattern. Run an output through a second model and ask it to critique the first, then use a third model to score both against your criteria. Techniques like self-play preference optimization, reinforced self-training, and multi-agent debate are no longer bleeding-edge. It is simply a feedback loop where the coach is also a model.'
  - question: 'When should I stop iterating on a prompt and try a different approach?'
    answer: 'Stop when you see repetition without progression: the outputs vary in form but not in substance, and each round of refinement makes things 5% sharper, not 50%. That is the plateau. Switch tactics instead of refining the same prompt for the tenth time. Change the arena by reframing the task entirely, switch to a different model that may be better at this kind of work, or restructure the input with more context, less context, or a new order.'
  - question: 'How can an AI consultant help my team get more value from LLMs?'
    answer: 'A consultant can build the coaching system so your team keeps improving on its own. In my AI Operating System engagements, that is most of the work: picking the right models for the right jobs, building prompt libraries that read like coaching playbooks, and setting up feedback loops so the team can keep getting better without me in the room. A free AI and Digital Opportunity Assessment, a 60–90 minute working session, is a practical first step.'
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
