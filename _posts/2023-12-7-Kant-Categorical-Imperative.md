---
layout: post
title: Kant's Categorical Imperative
excerpt_separator: <!--more-->
---

<center><blockquote>
Act only according to that maxim whereby you can at the same time will that it should become a universal law.
</blockquote></center>

--- [Kant, 1785](https://www.earlymoderntexts.com/assets/pdfs/kant1785.pdf)


In layman's terms, Kant's [Categorical Imperative](https://en.wikipedia.org/wiki/Categorical_imperative) states that a moral priciple is justified only if everyone could abide by those maxims and society would be better-off. While people often apply this imperative toward moral principles such as deception, theft, and suicide, I find a particular homage toward it through my research in <b>computational social choice</b> and <b>multiagent systems</b>. 

<!--more--> 

Researchers in my field study interactions of agents (humans, algorithms, robots, etc.) and theorize how they may behave in certain settings (e.g., whether a mechanism is <i>strategyproof</i>) or about the aggregate effects of a procedure prescribed to the agents (e.g., whether an allocation of resources is a <i>Nash equilibrium</i>). To these ends, we often make assumptions about the properties of the agents in our system, such what behavior they may have, how their preferences are structured, or what means they have to communicate with each other. This allows us to prove properties about the aggregate system that result from populations of agents with these assumptions. 

For example, consider three siblings whose wealthy parents recently passed away, but who did not specify which sibling should get what out of the inheritance. The siblings split the items -- some painting, jewelry, stocks, and cash -- via the <b>round robin</b> procedure: the siblings take turns deciding what they want next out of the remaining pool. It is known mathematically that this division of resources is <i>[envy-free up to one good](https://en.wikipedia.org/wiki/Envy-free_item_allocation)</i> (i.e., approximately fair).

This example demonstrates one way to achieve <i>approximate</i> fairness if all agents follow this procedure, just like with Kant's Imperative. However, achieving <i>actual</i> fairness (via the notion envy-freeness) turns out to be a computationally hard problem (i.e, the solution can be verified quickly but cannot be solved quickly unless <b>P=NP</b>). Kant did not forsee that finding maxims (or, sometimes even testing maxims) would be virtually an impossible task.

Aside from computational issues, there are a few other aspects of computer science -- including game theory, reinforcement learning, and distributed systems -- from which Kant's Imperative deserves scrutiny. For one, how should the imperative be interpreted if people have different preferences, information, cognitive methods of processing that information (e.g., [biases](https://en.wikipedia.org/wiki/List_of_cognitive_biases)), or time horizons? (These are factors often considered as "<i>types</i>" in Bayesian games.) Does the imperative assert that everyone must behave the same way (follow the same moral guidelines) regardless of their situation, even if they don't have enough information to do so, or is Free Will a virtue in-and-of-itself so that everyone should make the best with what they have? How much due diligence does an individual need to do and at what personal cost?

I'm curious how trading and contracts are viewed in Kantian ethics -- especially in the American view of the notions, where contracts are practically legally omnipotent. For example, suppose that a seller of a house asks for an amount higher than what it's worth. Person A bids the house at the appraisal value while Person B bids what the seller is asking for. Where is the moral fault if Person B buys the house and then realizes it's a dump? Kantian ethics would seem to imply that the seller should not over-ask the true value because this is a lie and a deception for Person B. However, the effect of every person over-asking is a market solution -- people would eventually stop bidding on over-valued items. This entails that goods should only be exchanged through strategyproof mechanisms. However, this runs into the good 'ol <b>[Gibbard's Theorem](https://en.wikipedia.org/wiki/Gibbard%27s_theorem)</b>, which basically states that this is impossible (without, say, imposing restrictions on peoples' preferences -- see the [VCG mechanism](https://en.wikipedia.org/wiki/Vickrey%E2%80%93Clarke%E2%80%93Groves_mechanism)).

As separate point, if the fault is in the seller choosing B over A, then we violating the free exchange of goods between willing participants (assuming the setting is not monopolistic and every person has reasonable alternatives). It seems that one problem is that Person B did not do enough due diligence before placing their bid. However, this puts all of the onus of determining (USD) value on buyers, who have an information disadvantage. If this is entirely the case, then society becomes prolific with [snake oil](https://en.wikipedia.org/wiki/Snake_oil) -- such as Subway's [tuna may not actually contain any tuna](https://www.npr.org/2022/07/13/1111270816/subway-tuna-lawsuit) (NPR, 2022). This is clearly not a good outcome, suggesting that Kantian ethics, that <i>what holds for one must necessarily hold for all,</i> is not the end-all-be-all for ethical decision-making.

A third connection to Kantian ethics relates to crowding effects. [Crowding in](https://en.wikipedia.org/wiki/Crowding-in_effect) and [Crowding out](https://en.wikipedia.org/wiki/Crowding_out_(economics)) have specific interpretations in economics (or [psychology](https://en.wikipedia.org/wiki/Motivation_crowding_theory)) with respect to increased government spending affects private investment in a market economy. I prefer to think of these as follows:

* <b>Crowding in</b>: the more people that do something, the <i>more</i> effective it is per person. For example, clearning up a beach takes less time per person with more people. Also, higher demand for products eventually lowers the price since there <i>should</i> generate higher supply to fulfill the demand.
* <b>Crowding out</b> (diminishing returns): the more people that do something, the <i>less</i> effective it is per person. For example, the more cars on a freeway, the less efficient it is. Also, one or two people can cheat on a test in a large classroom without getting caught, but half the class did it then there'd be problems (for the students).

This suggest that circumstance does effect the moral or economical quality of behavior. Rather, Kant's Categorical Imperative does not tolerate any nuance. It may be useful as a general guideline, but perhaps not categorically.

