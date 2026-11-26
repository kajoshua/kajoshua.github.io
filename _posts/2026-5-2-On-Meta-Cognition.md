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
* Consider the following research question. How much understanding do I need to have about a problem in order to come up with such a question?


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



# Lessons Learned from Software Engineering
- A lot of software engineering involves creating development processes to protect complex engineered systems against stupid mistakes by human developers.
- Working in industry realizes a weird dichotomy between "anyone can do X" and "I can do X." The former is valued in academia as an intellectual novelty to the human race; the latter is valued in industry as a professional skill that someone needs and is willing to pay for. Although anyone can figure out X (once it's publicly known), you are in the privileged position of being responsible for figuring it out at your firm.
- Understanding a software system thoroughly requires certain general background knowledge on a topic and specific knowledge of the design choices and trade-offs accumulated through the system's development. Documentation serves the epistemological purpose of explaining why certain choices were made, why they are beneficial, and why certain decisions might be too costly to optimize, for abitrary future developers.
- A key goal of engineering is "handoff ability:" the point at which you can hand off a project without incurring significant cost for new engineers to maintain or grow your system.
- Software engineering is a time allocation optimization problem, where you trade-off importance and urgency with respect to fluctuating personal concentration throughout the day, as well as personnel and available resources.
- In large teams, information can become fragmented across different groups that attend different meetings. Knowledge has to be social to some degree; otherwise, important information becomes siloed.
- Two key pillars of organizational effectiveness are leverage and momentum. _Leverage_ comes from creating assets and processes that you can hand off to other people. _Momentum _comes from cognitive caching, established processes that don't need to be recreated, and people who accumulate knowledge and learn lessons over time. (Inspired by Alex Hormozi.)
- Some good management practices include:
  - Incentivizing behaviors rather than necessarily incentivizing outcomes.
  - Asking people what they think they should do in a given situation instead of immediately telling them what to do.
  - If people want to experiment and the risk is bounded, letting them try it and seeing what happens.
- My job is to structure ambiguity, taking unclear requirements, incomplete information, and loosely defined problems and turning them into concrete, manageable systems.
- On automation:
  - Automate any recurring process that consumes more than 3% of your weekly working time.
  - In evaluating the efficiency of complex teams (see e.g., [The Diversity Bonus](https://press.princeton.edu/books/paperback/9780691191539/the-diversity-bonus){:target="_blank"} by Dr. Scott Page), consider the following: culture, processes, repetitiveness factor (i.e., how often a team is repeating tasks without automating the process), [hit by the bus factor](https://en.wikipedia.org/wiki/Bus_factor){:target="_blank"}, where do people go for information or to make suggestions (i.e., social epistemological efficiency), how well distributed teams can depend on each other, efficiency of CAPEX on each team, and drive and initiative of individuals on the team.
  - Part of the responsibility of companies is to enable to productive capacity of their employees. In this sense, companies are supposed to capture institutional memory (as in the book The Giver). As individuals, make sure to write down lessons learned as you learn them, including relative priorities of tasks through certain phases of projects).
- Recall the diffusion of responsibility: people need specific points of contact (POCs) for particular tasks and scopes of responsibility. Otherwise, predictable gaps in ownership and execution can occur.
- Culture and norms create "cow trails," which are established behavioral patterns and social expectations, which can incentivize desired behavior more effectively than formal rules or laws alone.

