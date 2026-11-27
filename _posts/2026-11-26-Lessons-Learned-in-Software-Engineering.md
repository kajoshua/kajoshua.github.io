---
layout: post
title: Lessons Learned in Software Engineering
excerpt_separator: <!--more-->
---

Some lessons learned while working in software engineering for the past two years after earning my PhD. Several lessons in this page I didn't realize until working at a firm for an extended period of time.


<!--more-->

# 1. The Nature of Software Engineering
- Software engineering is about managing complexity. A lot of software engineering involves creating development processes to protect complex engineered systems against mistakes by human developers.
- Software engineering is about structuring ambiguity. My job is to take unclear requirements, incomplete information, and loosely defined problems and turn them into concrete, manageable systems.
- The distinction between intellectual novelty and professional value. Academia often values discovering something that anyone can do once they know how. Industry values being the person who can reliably do that thing when an organization needs it.
- Software engineering is a resource allocation problem. It involves optimizing time and attention against importance, urgency, personal concentration, personnel, and available resources.


# 2. Engineering Systems for Maintainability and Knowledge Transfer
- A key goal of engineering is "handoff ability:" the point at which you can hand off a project without incurring significant cost for new engineers to maintain or grow your system.
- Understanding a software system thoroughly requires certain general background knowledge on a topic and specific knowledge of the design choices and trade-offs accumulated through the system's development. 
- Documentation serves an epistemological purpose: explaining why certain choices were made, why they are beneficial, and why certain optimizations might not be worth their cost to future developers.
- Production systems should have enough documentation that a competent, well-meaning engineer who wasn't involved in their creation can safely modify and operate them.
- Long-running projects accumulate hundreds or thousands of decisions. Without systematic documentation, reconstructing the reasoning behind them becomes increasingly difficult.
- In large teams, information can become fragmented across different groups that attend different meetings. Knowledge has to be social to some degree; otherwise, important information becomes siloed.
- If there is significant turn over, then not everyone knows everything. Sometimes "I think the product works like X" is the best information available. A well-functioning organization makes it easy to identify who has the most authoritative information.
- Part of the responsibility of companies is to enable to productive capacity of their employees. In this sense, companies are supposed to capture institutional memory (as in the book The Giver). As individuals, make sure to write down lessons learned as you learn them, including relative priorities of tasks through certain phases of projects. This helps create a culture of information retention over time.


# 3. Organizational Effectiveness and Leverage
- Two key pillars of organizational effectiveness are leverage and momentum. _Leverage_ comes from creating assets and processes that you can hand off to other people. _Momentum_ comes from cognitive caching, established processes that don't need to be recreated, and people who accumulate knowledge and learn lessons over time. (Inspired by Alex Hormozi.)
- Automate any recurring process that takes up more than 5% of your weekly time.
- When evaluating the efficiency of complex teams (see e.g., [The Diversity Bonus](https://press.princeton.edu/books/paperback/9780691191539/the-diversity-bonus){:target="_blank"} by Scott Page), consider the following: 
  - culture,
  - processes,
  - repetitiveness factor (i.e., how often a team is repeating tasks without automating the process),
  - [hit by the bus factor](https://en.wikipedia.org/wiki/Bus_factor){:target="_blank"},
  - where do people go for information or to make suggestions (i.e., social epistemological efficiency),
  - how well distributed teams can depend on each other,
  - efficiency of CAPEX on each team, 
  - drive and initiative of individuals on the team,
  - etc.


# 4. Management, Leadership, and Organizational Culture
- Incentivize behaviors rather than necessarily incentivizing outcomes.
- Ask people what they think they should do in a given situation instead of immediately telling them what to do.
- If people want to experiment and the risk is bounded, let them try it and seeing what happens.
- If someone asks a question in a way that's different from how you would have approached the same situation, try stepping into their shoes first. Figure out whether their question sufficiently addresses the situation before deciding that you need to override their perspective by announcing your judgement.
- Recall the diffusion of responsibility: people need specific points of contact for particular tasks and scopes of responsibility. Otherwise, predictable gaps in ownership and execution can occur.
- Culture and norms create "cow paths," which are established behavioral patterns and social expectations, which can incentivize desired behavior more effectively than formal rules or laws alone.

# 5. Long-Term Project and Technical Decision-Making
- You eventually have to deal with the code debt you left yourself or inherit the consequences of your prior decisions. It's a different experience when you're dealing with your own prior decisions than when you're adopting someone else's.
- You learn how to prioritize and execute (see Jocko Wilink) across different time horizons, rather than just focusing on whatever is immediately in front of you.
- Locked-in decisions: past a certain point, you can't structurally change your product anymore without incurring substantial opportunity cost.
- Stakeholder involvement can evolve throughout a project and not all design decisions may be known during the initial scoping of a project. With experience, you learn how to create an initial plan that's workable but amenable to forseeable future requests.

# 6. Collaboration, Trust, and Professional Relationships
- You get to work with many peers with different perspectives and experiences than you, at all seniority levels. Especially, you learn better conflict and recovery management skills. For example, if there was tension last week but you're going to be working together for another 15+ weeks, you have to get over your hurt ego and figure out how to keep working together.
- Trust is built over time. For example, if I say I need surplus resources to accomplish X, a manager should eventually be able to trust my judgment that I'll get it done without wasting those resources.
- Over time, you start to recognize your own strengths, weaknesses, and error rates. You also learn which processes you need to put in place to manage your own workflow and compensate for your particular tendencies.
- Sometimes, it just takes time to grow. The things you find important, the questions you instinctively ask, and the things you think about naturally today are different from what you would have considered important earlier in your career. Experience gradually changes how you think about problems and what you pay attention to.

