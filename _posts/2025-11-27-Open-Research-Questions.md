---
layout: post
title: Open Research Questions
excerpt_separator: <!--more-->
---

A list of open research questions. These are of varying depth of thought; some might be personal interest questions, while others might be open for research.

<!--more-->



# Computer Science Questions

### RQ1: Price of Anarchy
What's the price of anarchy for independent Q-learning as opposed to centralized Q-learning (with respect to some social welfare optimal metric)?

### RQ2: Stability in Games
Is the Nash bargaining solution an evolutionary stable state? How does stability of NE relate to the  eigenvalues of the bimatrix game, relative to some 'best response' or MWU/Hedge dynamic?


### RQ3: Adverarial ML
What's the query complexity for inferring model weights given the output of a model?

### RQ4: Strategic ML in Federated Learning
How are adversaries handled in federated learning, if an edge compute device wants to influence the parameter vector of a central server? Is VCG needed in order to incentivize edge devices to report their parameter vectors correctly?

### RQ5: Distortion
What is the distortion of distributed SLAM? As in, if there are communication constraints, what is the process for (1) determining which information is most needed to be communicated, (2) error rates on correctness as a function of the partial information?

### RQ6: LLMs and Metabolic rates
LLMs are notoriously inefficient, energy-wise. I conjecture that they are less efficient than crows, dolphins, pigs, and octopi (other specias with human-like reasoning capabilities), and plants. As suggested in Geoffrey West's book "Scale", there is an empirical power-law distribution between size and metabolic rate of mammals. How do present-day LLMs fit to this curve? Since intelligence (or communication) per energy unit is the limiting factor in human civilization progression, how can we make LLMs as energy-efficient as plants?

### RQ6: Boosting
Boosting with other social choice rules besides majority rule, in the same way as Borda is MLE to Kemeny.

### RQ7: Reputation and MARL
Reputation system management in MARL, and eg communicating an estimate of a reputation to other agents. Perhaps treat this as a network info cascade model. Reputation as reliable in the cooperative set, vs antagonistic/selfish. Or eg in population games/ Axelrod PD experiment.



# Cognitive Science Questions

### RQ1: Epistemology and Expertise
What's the philosophy or reason behind becoming an expert at something? Besides intellectual novelty, there are cognitive skills learned by thinking about a problem non-stop for 4+ years straight. What is the change?

### RQ2: Preference Elicitation with LLMs
How can we use natural language (via LLMs) in order to gain the most information as possible about users' preferences and run a successful (approximate) auction? As in, choose the NLP question $Q$ which maximizes VOI over $P_{t+1} = (P_t, \hat{P}(Q))$, where $P_t$ is the preference information gathered so far, up to time $t$, and $\hat{P}(Q)$ is the expected response from a user given $Q$.

See:
* Huang, D., Marmolejo-Cossío, F., Lock, E., & Parkes, D. (2025). Accelerated Preference Elicitation with LLM-Based Proxies. arXiv preprint arXiv:2501.14625.

### RQ3: Information processing
Are there ways of processing information besides (i) Bayesian updating, and (ii) attention algorithms for determining what information is important for certain contexts? Different people find different information important, depending on context, yet classical reinforcement learning algorithms assume information is independent of order (and context; see framing cognitive bias). What would a Markovian process for how information, that is step-wise interpreted over time, look like? Perhaps check whether ACT-R has this.

### RQ4: LLMs
Do LLMs use probabilistic reasoning and would they fail the Ellsberg paradox?

### RQ5: Perception

How do time scales shift in perception? 1hr for an adult is 4 hrs for a kid? 1st exposure to a 1min youtube short is "feels like" 1.5x the speed of the 2nd exposure. Someone who’s heavily invested in a work and things are steadily progressing, versus someone who needs to be caught up to speed. What are the cognitive processing differences between these two states?.


# Economics and Business Mangement Questions

### RQ1: Executive and Labor Salaries
Are executives' marginal contributions to the company worth their bonuses? How does marginal performance and compensation on teams correlate with Shapley values? To what extent is compensation correlated with someone's ability to unilaterally impact a company's bottom line (upside or downside via regular operations)? How do we measure marginal impact, and how far off is marginal compensation from what is 'fair'?

### RQ2: Wealth Inquality and Prices
What is the relationship between wealth inequality and local prices? As in, how are prices a function of local net wealth / incomes, and the city/county-wide GINI index?

### RQ3: Labor Market
What is the correlation of earning potential with high school GPA, or amount of extra-curriculars taken in middle school, high school, and college?

Are curriculum adaptive enough for changing labor demands? Both in public and private schools. Also, how does the use of school choice vouchers change curriculum and education standards?

Similarly, what is the carrying capacity of the economy to adapt to new technologies? This is the LLM/AGI question of 2025.

To what extent does the labor market capture peoples' revealed preference? For instance, a person might prefer electrician over doctor because the collective bundle is better based on their financial situation, amount of effort they want ot put in, and other aspects of opportunity.

### RQ4: Flux of Capital
Can we capture the 'flux' of money / liquidity in certain communities? For instance, how does Walmart take money "out of the community," whereas a mom and pop shop keeps money "in the community?" Although Walmart provides goods and services to communities cheaper than mom and pop shops, it is net-extractive in terms of wealth. That is, average productive labor in a community decreases with Walmart, as opposed to when there are several mom and pop shops in a community.

What makes a community 'self sufficient' both in terms of (# gas stations per capita, # banks or religious or community institutions, etc) and (independent sovereign communities)? How big can a community be before people start ‘relying’ on others (or, in other words, require more complex financial systems)? Or needing a different currency system (e.g., does Gaza/ West Bank use NIS)? What does 'community institutions' mean and how is their use correlated with quality of life and GDP?

See:
* West, G. (2018). Scale: The universal laws of life, growth, and death in organisms, cities, and companies. Penguin.

### RQ5: Systemic Risk on the "Mesa"-economic level
Consider the cycle: scarcity -> mom and pop shops -> Walmart -> fails -> scarcity.

What macroeconomic factors make this cycle risky for the underlying community? Although an individual mom and pop shop is more susceptible to economic shocks than Walmart is, and Walmart benefits the underlying community via economies of scale and its distribution network, having many mom and pop shops in an area is more economically resilient. What is a control system that can counter the natural economic cycle in an area, in order to optimize for both economic efficiency and systemic resilience?

### RQ6: Scale and Optimal Social Institutions
Can the concepts of Geoffrey West's book "Scale" be used for corporate strategy and planning? That is, Suppose there are more gas stations per capita than the expected rate, for a given city size, based on the power law distribution presented in the book Scale. Does this provide predictive power that some of those gas stations will fail, as the city reverts to mean? Similarly, if there are fewer than expected, does this suggest there is sufficient market opportunity?


### RQ7: Trust in Instiutions in the 2020s
What institutions and authorities do consumers have trust in, and where _should_ they based on certain objective measures? E.g., FDA vs EWG.

### RQ8: Successes and Failures of 'The Market'
Where does 'the market' succeed or fail at building resilient social infrastructure (as a function of e.g., community spaces, architecture, religious institutions, etc)?

### RQ9: Living Wage Contributors
It is ethically arguable that people should get a living wage for an honest day's work, as a notion of distributional justice. However, a significant percentage of jobs in the US economy don't offer this necessity. What are the causes for this, such as (1) what jobs does this happen, (2) what personal finance and education/skills does a person find themselves with, or (3) what macroeconomic factors contribute to this)? For instance, Walmart has a cutoff in their labor pool for self-sustaining 40 hr/week positions. Consider this for both companies whose margins can, and cannot, support such a salary, relative to the market for a specific type of labor altogether.

### RQ10: Labor elasticity and epistemic resilience
The relationship between labor supply in different geographical areas and elasticity for where people are willing to move, depending on how specialized of a skill set the job is. How does supply/demand ratios for certain specialized skill sets affect epistemic resilience in the economy?


### RQ11: Microeconomic network effects
To what extent can we measure income of companies as a function of expenditures from other companies? E.g., how does Firestone’s income in a city depend on the success of other companies in a city? If the city was all-Firestone, then it would fail. But diversity, plus positive exchange of capital and growth vis a vis loans means that the service industry can survive. My intuition suggests that deleveraging doom-loops are inevitable but certain mechanisms enable time-to-death to be kicked down the road indefinitely.


### RQ12: Credit Scores
What are the most significant causal features for peoples' credit scores? To what extent are people in structural deficit environemts as opposed to making poor choices?

### RQ13: Random Walks
How robust are people, based on their choices throughout a given week, to sensitive shocks? This is similar to the finding of X% people living paycheck-to-paycheck, but more specific.


### RQ14: Inflation Measurement
How is inflation captured by liquid markets, such as Meta's auction platform? We can see inflation measure in the Manheim Used Vehicle Value Index, but this is a short-term measure. I am not familiar with other active auctions.

Relatedly, the balance sheets JPM and BoA are public. Where do we measure "debt" issued via fractional-reserve banking on their balance sheets?

Supply vs demand curves as M2 increases from one equilibrium to another. What happens theoretically, how to measure and validate empirically? Also, who benefits and who is hurt as prices shift between equilibrium due to this shock?

### RQ15: Tacit Knowledge
How do we systematically measure tacit knowledge? Is it related to how efficient a team or company is at getting someone new to get up to speed? If a consulting company like BCG is recommending cutting labor for cost savings, how should they measure how concentrated certain knowledge is about the company and the price for recouping that knowledge?


### RQ16: Housing market
I think pricing houses by "comps" (last price sold of similar other houses in an area) are a bad idea in the housing market because of their illiquidity. how big is this concern?


# Political Science Questions

### RQ1: Political deescalation
We know that tit-for-tat can cause political escalation, as discussed extensively by Axelrod and Schelling. What are mechanisms or requirements that can deescalate political tension? Do both players need to have a vested interest in accepting sunk costs in favor of future peace?


### RQ2: Case Study in the ethical foundations of societal impacts
In consumer marketing, there's a positive relationship between advertising exposure and purchasing behavior, dampened by personal consumption susceptibility factors. We can conceivably find data to support that increased advertising exposure causes increased debt load **(TODO: Source)**. Minimum ethical considerations of Freedom of Choice are justified, notably in:
* (1) option to be exposed to advertising is available to the consumer, since they are going out in public or choosing to activate a device with ads;
* (2) advertisers paying a platform to place their advert is legal and fair;
* (3) consumers have the freedom of choice for purchasing advertised products and services or not.

Despite these ethical microfoundations being justified, increased advertising is (reasonably) causing increased consumer debt load, which affects households' long-term outcomes. The RQ is whether it is ethical to prohibit over-saturation of advertising in public, where the saturation limit is the empirical optimal amount of advertising relative to advert costs and consumer acquisition. If so, how is this regulation justified? Note that this case study is similar to BNPL.


### RQ3: Regulatory Capture
What makes an industry susceptible to regulatory capture, as opposed to cooperation game-like positive feedback loops? For instance, the MITRE ATT&CK framework and OWASP security guidelines are not mandated, but they are convenient for third-parties to abide by them. SAE International and IEEE similarly set guidelines, although these do not necessarily get translated into policy regulation. 

People trust others who are in-the-ballpark correct, even if the industry-leading guidelines are not exact for what a specific client needs. It's costly to hire the right specialists who may adapt standards to specific use-cases, so small businesses essentially have to align by the recommendations. Standards developed over 10+ years have a substantial moat.

Which regulations help support the biggest companies on the S&P 500 today? For instance, Section 230 upholds Meta's existence.

### RQ 4: Legality of Inconvenience

There are many situations where something is technically feasible but very inconvenient, which affects distributional outcomes. For instance, voter ID registration (no- or low-cost) adds inconvenience, thus changes political outcomes, while Terms and Service are available for everyone to read, but favor certain parties. On the other hand, there are Accredited Investor regulations so that only certain individuals or entities can invest in some financial products. Under the ethic of Freedom of Choice, making something "inconvenient" is immaterial. However, US law does encode certain restrictions in favor of disallowing contracts that require "unreasonable" effort. How consistent is US jurisprudence in its coverage, across industries, and how empirically consistent is it in application?



# Other

### RQ1: Myths
How do myths, as Joseph Campbell discusses, play out in our daily lives?

### RQ2: The Giver
What is the role of consultants or other academics in our society, as in the book The Giver? Who actually reads manuals from the 1950s, or earlier, to see if society has "missed" anything in contemporary language 


