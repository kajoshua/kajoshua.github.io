---
layout: post
title: On Meta-Cognition
excerpt_separator: <!--more-->
---

Some questions I've thought about while working in industry the past two-to-three years, after earning my PhD. (NOTE: Work in progress.)

<!--more-->


## When Reading a Papers
* Is the text understandable (for someone with reasonable knowledge on this subject)?
* Do I understand it?
* Do I need to understand it to accomplish some goal (such as improve my understanding on this topic, generally)?
* Is it worth my time to understand this topic relative to opportunity cost and amount of concentration power I have to give to this topic today?


## Intellectual Discrepancies while Debating Someone Else
* Are we debating in good faith?
* Are we actually talking about the same topic?
* Do we differ in information about this topic, or are we interpreting the same information differently?
* Are we honest about our beliefs and internally consistent about our understanding of the world, relative to our value system?
* If one of us is wrong or doesn't understand the topic well enough to sufficiently support it, how much effort will it take to thoroughly re-evaluate our belief on the topic? Are we willing to do this right now, relative to the other things we could be doing with our day? Are we intellectually honest enough to admit that we might be wrong about a topic, subject to us going out of our way to explore it more deeply, for the duration of the conversation?
* Are either of us emotionally attached to, or is our ego defending, the version of the world we're espousing?
* Are either of us financially incentivized to believe a certain perspective?
* What's the purpose of this discussion? Do I need to convince the other person, am I actually trying to understand their perspective (as opposed to the common habit of waiting for my turn to speak while the other person is talking), am I trying to debate the merits of certain ideas and learn someone else's perspective on the pitfalls of my ideas, or am I trying to lean how well I actually understand this topic by going through the process of explaining my views to someone else?


## Operational Processes
* Are we doing something suboptimal? If so, how much effort would it take to figure out a better solution? How likely is that better solution going to have enough impact that it would beat the direct cost for improving the process and the opportunity cost for directing those labor resources elsewhere?
* How easy is it for someone to onboard onto this project and get up to speed so that they'll be able to contribute and be successful? 
* To what extent are our people using our own resources, information, and network (local assets) as opposed to open-source tools and techniques? This distinction is proportional to your team / project / company's moat.
* Do I understand some topic? If not, who does? How easy will it be for me to figure this out on my own versus asking someone directly for help or as a community post? This is a distributed search problem for relevant information to my problem.


## Project Management questions (software engineering)

**Delivery Throughput and Flow**

* How do we configure infrastructure and CI/CD so PRs are fast to validate and merge (build times, parallelization, flaky tests)?
* What is our cycle time from ticket start to production? Where are the bottlenecks?
* Does each person have a sufficient, well-scoped backlog so they can keep moving, including picking up other work when blocked? How much work-in-progress does each person carry at once? 
* Do people feel a sense of progress and accomplishment within a given week (closing tickets, moving forward on blocked work)?
* Are tickets scoped small enough to be completed in a few days, or do they drag on?

**Code Quality and Maintainability**

* How do we ensure PRs are easy to review and don't require excessive context to understand?
* Do PRs clearly communicate why the change is being made, not just what changed?
* What coding standards and shared abstractions exist to maintain consistency?
* Is ownership of different parts of the codebase clear?

**Testing and Reliability**

* What mix of unit, integration, and regression tests makes sense for this project?
* Are tests fast, deterministic, and easy to understand?
* How do we detect and handle flaky tests?
* When a bug reaches production, do we have a consistent way of responding and learning from it?

**Learning, Growth & Career Development**

* Beyond IC work, how are people developing professionally (leading meetings, presenting, proposing solutions, learning new tools/techniques)?
* Are senior people actively developing others, or primarily executing faster?

**Communication and Coordination**

* Do people know how to get help or information when they need it?
* What decisions require synchronous discussion vs async documentation?
* Are meetings structured to minimize context switching and maximize usefulness?
* Which meetings are for decision-making vs status updates vs implicitly for socializing and building team cohesion?
* Do we consistently write things down (design docs, decisions, retrospectives)?
* When something is unclear, do people ask early or get stuck working it out alone?

**Culture and Incentives**

* What behaviors are actually rewarded (speed, quality, ownership, visibility)?
* Do incentives align with long-term system health or short-term output?
* Is failure treated as a learning opportunity or something to avoid?
* Do people feel psychologically safe raising concerns or dissenting?
* Are there gaps between what leadership says is important and what is actually incentivized?

