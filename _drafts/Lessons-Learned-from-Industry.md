---
layout: post
title: Lessons Learned from Industry
excerpt_separator: <!--more-->
---

A handful of lessons learned from working in industry over the past two years.


<!--more-->


# Lessons Learned from Software Engineering
- A lot of software engineering involves creating development lifecycle process to protect complex systems against stupid mistakes by human developers.


- Working in industry realizes a weird dichotomy between "anyone can do X" and "I can do X." The former is valued in academia as an intellectual novelty to the human race; whereas the latter is valued in industry as a professional skill that someone needs and is willing to pay for. Although anyone can figure out X once it's known, you are in the privileged position of being responsible for figuring it out at your firm.

- Understanding a software system thoroughly requires certain general background knowledge on a topic and specific knowledge of the design choices and trade-offs accumulated through the system's development. Documentation serves the epistemological purpose of explaining why certain choices were made, why they are beneficial, and why certain decisions might be too costly to optimize, for abitrary future developers.

- A key goal of engineering is "handoffability:" the point at which you can hand off a project without incurring significant cost for new engineers to maintain or grow your system.

- Software engineering is a time allocation optimization problem, where you trade-off importance and urgency with respect to fluctuating personal concentration throughout the day, as well as personnel and available resources.











- Software engineering is fundamentally a time-allocation optimization problem. You are constantly trading off the importance and urgency of different tasks against your fluctuating concentration throughout the day, as well as the personnel and resources available to you.

- In large teams, information can become fragmented across different groups that attend different meetings. Knowledge has to be social to some degree; otherwise, important information becomes siloed.

- Two key pillars of organizational effectiveness are leverage and momentum. Leverage comes from creating assets and processes that you can hand off to other people. Momentum comes from cognitive caching, established processes that don't need to be recreated, and people who accumulate knowledge and learn lessons over time.

- Some good management practices include:

  - Incentivizing behaviors rather than necessarily incentivizing outcomes.

  - Asking people what they think they should do in a given situation instead of immediately telling them what to do.

  - If people want to experiment and the risk is bounded, letting them try it and seeing what happens.


- The job of a software engineer is fundamentally to structure ambiguity. Much of the work involves taking unclear requirements, incomplete information, and loosely defined problems and turning them into concrete, manageable systems.

- Automate any recurring process that consumes more than 3% of your weekly working time.

- When evaluating large organizations, there are several things worth considering: organizational culture, established processes, how repetitive the work is, "hit by the bus" factor, where people go to find information or make suggestions, how well distributed teams can depend on one another, how efficiently each team uses its CAPEX, how much individual employees demonstrate drive and initiative, etc.

- Organizations benefit from capturing institutional knowledge and carrying lessons learned from one project into the next. Documenting what worked, what could have been done differently, and what you wish you had known earlier helps future projects get up to speed faster. Even when you already know what needs to be done, experience helps you develop a better intuition for the relative importance and priority of different tasks.

- Recall the diffusion of responsibility: people need specific points of contact (POCs) for particular tasks and scopes of responsibility. Otherwise, predictable gaps in ownership and execution can occur.

- Culture and norms create "cow trails," which are established behavioral patterns and social expectations, which can incentivize desired behavior more effectively than formal rules or laws alone.


# Lessons Learned over Long Periods of Time
These are lessons that often become apparent only after working at an organization for an extended period of time.

- As organizations grow and people move between roles, it's increasingly important to maintain institutional knowledge. "I think it works like X" is sometimes the best information available, so a well-functioning organization should make it easy to identify who has more authoritative information.

- You eventually have to deal with the code debt you left yourself or inherit the consequences of decisions you made previously. It's a different experience when you're dealing with your own poor engineering decisions than when you're adopting someone else's.

- You learn how to prioritize and execute (Jocko) across different time horizons, rather than just focusing on whatever is immediately in front of you.

- You learn how to work with peers who have different experiences and perspectives than you, and how to resolve conflicts with them. If there was tension last week but you're going to be working together for another 15+ weeks, you have to get over your hurt ego and figure out how to keep working together.

- If someone asks a question in a way that's different from how you would have approached the same situation, try stepping into their shoes first. Figure out whether their question adequately addresses the situation before deciding that you need to override their perspective.

- Some decisions eventually become locked in. Past a certain point, you can't fundamentally change the structure of your product anymore without incurring substantial opportunity costs.

- Stakeholder involvement can evolve throughout a project, and incorporating feedback earlier in the design and development process can help avoid costly changes later.

- Every production system should have enough documentation that a competent, well-meaning engineer who wasn't involved in its creation can safely modify and operate it.

- Every user-specific choice you build into a product increases the degree to which the customer becomes locked into the supplier. Recreating all the features and customizations that have been determined over a long period of time is expensive.

- Trust is built over time. If I say I need surplus resources to accomplish X, you should eventually be able to trust my judgment that I'll get it done without wasting those resources.

- Long-running projects can accumulate hundreds or thousands of decisions, making it increasingly difficult to reconstruct the reasoning behind them without some form of systematic documentation.

- Over time, you start to recognize your own strengths, weaknesses, and error rates. You also learn which processes you need to put in place to manage your own workflow and compensate for your particular tendencies.

- Sometimes, it just takes time to grow. The things you find important, the questions you instinctively ask, and the things you think about naturally today are different from what you would have considered important earlier in your career. Experience gradually changes how you think about problems and what you pay attention to.
