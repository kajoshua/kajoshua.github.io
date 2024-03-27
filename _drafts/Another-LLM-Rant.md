---
layout: post
title: Another LLM Rant
excerpt_separator: <!--more-->
---

<center><blockquote>
The only winning move is not to play.
</blockquote></center>

--- [WarGames, 1983](https://www.youtube.com/watch?v=NHWjlCaIrQo).

I bring up WarGames again because I believe there are inherent problems with large language models (LLMs) that must be addressed before their release at-scale. Of course, ChatGPT and later models (e.g., Google's Bard and Gemini, Meta's LLaMA, IBM's WatsonX) have already been released to the public since November, 2022; only a [handful of countries](https://www.conference-board.org/publications/pdf/index.cfm?brandingURL=restrictions-on-AI-large-language-models-by-country) have banned ChatGPT. These problems are political and social, rather than technical, that I forsee with grander consequence than disinformation and censorship issues on social media (see e.g., [House Report (June, 2023)](https://judiciary.house.gov/sites/evo-subsites/republicans-judiciary.house.gov/files/evo-media-document/cisa-staff-report6-26-23.pdf), and [House Report (November, 2023)](https://judiciary.house.gov/sites/evo-subsites/republicans-judiciary.house.gov/files/evo-media-document/EIP_Jira_Ticket_Staff_Report_11-6-23_Clean.pdf)). In short, LLMs are the newest [Weapon of Math Destruction](https://en.wikipedia.org/wiki/Weapons_of_Math_Destruction).

<!--more-->

## Context

LLMs are a type of machine learning (ML) model, meaning that they solely consist of (1) an [architecture](https://lakefs.io/blog/machine-learning-architecture/) and (2) a set of [parameters](https://towardsdatascience.com/parameters-and-hyperparameters-aa609601a9ac) over said architecture. For example, [GPT-4](https://the-decoder.com/gpt-4-has-a-trillion-parameters/) has 1.76 trillion parameters with a [Mixture of Experts](https://medium.com/@seanbetts/peering-inside-gpt-4-understanding-its-mixture-of-experts-moe-architecture-2a42eb8bdcb3) architecture. For our discussion, let us assume that LLMs are not being trained in real-time based on user input; that is, each version of an LLM has fixed parameters. A pair of (architecture, set of parameters) defines what amounts to a black-box which maps user inputs to outputs. [For example](https://javachallengers.com/21-amazing-things-to-do-with-chatgpt-that-will-save-you-lots-of-time/), a user might input:

<blockquote>
I will go to London for 2 days. Can you plan my travel with the most amazing things I can do there?
</blockquote>

and ChatGPT might respond with

<blockquote>
Morning:

* Start your day early by visiting the iconic Tower Bridge and Tower of London. You can take a guided tour of the Tower of London and learn about its rich history as a royal palace, fortress, and prison.

Mid-morning/Afternoon:

* From there, take a stroll along the Thames River and visit the famous Shakespeare’s Globe Theatre.
* For lunch, head to Borough Market, one of London’s oldest and most famous food markets, and try some of the delicious street food.

Afternoon:

* After lunch, head to the British Museum and explore its vast collection of art and artifacts from around the world.
* End your day by taking a ride on the London Eye and enjoying the panoramic views of the city from above.
</blockquote>

We do not yet have LLMs that generate content unprompted. 

In addition to the architecture and parameters, applying an LLM requires computational power, which in-turn requires machinery and capital investment. There is a similar distinction between <b>creating</b> an LLM and <b>hosting</b> an LLM, just as there is with writing software and hosting said software. Anyone can write an LLM (technically), which can then be <b>stored</b> privately or open-sourced, but only entities with the hardware can host the LLM. It is clear that corporate authors of LLMs have economic incentives to create <i>good</i> and profitable products as a means of raising their stock share price. It is not clear who is liable for content produced by an LLM.

## Comparison with Social Media

There are four forms of Speech relavent to social media policies and protections. 

1) First is the content that users post on the platform.
    a) can something be posted on the platform (minimal definition of free speech)
    b) can it be easily seen by others (shadowbanning)
    c) corporate policy procedures
        -- motivated by creating a good produce people will use
    d) [govt intervention](https://www.npr.org/2023/07/05/1186108696/social-media-us-judge-ruling-disinformation); [New Canada law](https://www.youtube.com/watch?v=SoiQx6Oes1A)
    e) "harmful speech" (CAD definition "that forments hatred" which is entirely subjective and includes reiterating any part of most of human history; has been used to stiffle dissent against Covid precautions -- which is up for debate about for whom dissenting is harmful) vs "hate speech" (there is [no US legal definition](https://www.ala.org/advocacy/intfreedom/hate) vs "free speech"

2) Second is content "re-posted" from other people.

As of 2017, the UK does not [differentiate](https://www.bbc.com/news/uk-england-merseyside-43816921) between publishing and republishing under (what would be by US law) Creative Commons.

3) Section 230 
    a) speech does not belong to the companies themselves
    b) recommender systems are forms of speech

4) echo chambers and political influence by RS suggesting certain material given peoples' interests
    a) political influence of whomever controls the RS
    b) there is no "neutral" RS, since reverse-chronological order is a bad product that few people would actually want or use (FB has this option buried in their side-bar)





Social media (e.g., Meta, X, Youtube, Reddit, etc.) as we know it today in the US exists at the behest of [Section 230](https://en.wikipedia.org/wiki/Section_230), which details:

<blockquote>
No provider or user of an interactive computer service shall be treated as the publisher or speaker of any information provided by another information content provider.
</blockquote>

This means that a social media company is not legally responsible for the content posted on its platform. 



I challenge this universal license (provided by the US congress) on the grounds that companies' recommendation systems is a form of Speech. 




