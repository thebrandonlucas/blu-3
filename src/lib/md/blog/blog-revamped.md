---
title: Attempting to Build a Quality Personal Website
description: A more thoughtful approach to personal site development
date: 2025-01-22
---

> We shall not cease from exploration
> And the end of all our exploring
> Will be to arrive where we started
> And know the place for the first time.

- [T.S. Eliot, from “Little Gidding,” Four Quartets. Originally published 1943.](https://www.columbia.edu/itc/history/winter/w3206/edit/tseliotlittlegidding.html)

This past year, I've experimented with several different methods of creating and managing a personal website. I didn't merely want the most convenient solution, or the solution most likely to buy popularity more easily via its platform or network effects. I wanted a solution that was in line with:

- 1) A growing set of principles I want to practice see more of in software I use and create. 
- 2) A set of very unique and specific features I desired.

The pursuit of principles and features, of course, give way to the brutal constraints of reality to some degree. I don't have infinite time. And so the desire to obtain the features I want while maintaining those principles must be balanced with the constraints of time and effort. After experimenting with several iterations of website-building, I have in many ways "arrived where I started", but now feel more confident, more sure-footed, more "aligned", and more excited about what even a simple little personal website could be.

### First Site — A DIY Compromise

I started out as most Gen-Z developers start, I think. You want to be a developer, you need a portfolio. You want to be a _web developer_? Your portfolio is your website. And so my first website was just that. I built it during many skipped classes in college, while I was still painstakingly and inefficiently learning HTML, CSS, and Javascript. It was designed to be artsy and beautiful and to get me a job as a web developer. And so I didn't post or write about anything, just listed what I felt would be most impressive to recruiters. But, after proving to yourself that you can indeed get a job and you can indeed make enough to pay your rent and not be a broke college kid forever, you start to realize there's more important things in life than just trying to impress recruiters. You realize that a personal website can be so much more. It can be a _reflection of yourself_. 

And so, with that in mind, I built my first "real" attempt at a personal site. I built it in [Sveltekit](https://svelte.dev/) (which was in unstable version 3 at the time), used the [MDSveX](https://github.com/pngwn/MDsveX) library so I could write my articles in [Markdown](https://en.wikipedia.org/wiki/Markdown). This was a proper blogging site that also listed projects and "About Me" and "Contact" and whatnot, however there were several problems:

- **Hosting**: It was hosted on Netlify, which meant that there were often cold starts when visiting it. This also meant that I wasn't hosting the site myself, which wasn't a big deal to me at the time, but developed into one over the course of the year.
- **Features**: The site was low on features and bells and whistles, but this was mainly because I just didn't take the time to implement them. The fact that everything was written in Sveltekit meant that I could have, but I wasn't taking the time to really think about what I wanted implemented and then come up with a good plan to do it.
- **Preprocessing the Markdown**: I didn't quite understand how to set up the preprocessor in MDSveX properly, which does the job of converting the Markdown to HTML when building the site. What I _think_ was happening was this resulted in pages having to convert the Markdown to HTML on the fly during runtime, and so the bigger the article, the slower the page load, but I never truly investigating this since I decided to redo the website from the ground up anyway. To the end user, this just felt like the page was frozen for awhile, which was really annoying UX.
- **Content and Organization**: I wasn't sure of how I wanted things organized, and I only had a few articles, blogs, and quotes on there. The way I would write my content was by writing the article in Markdown directly on the site and then just committing and pushing the code to Github, and from there it would build and deploy to Netlify automagically. That was nice, but I would prefer to be able to write the article in another program (so that I could have "draft" versions of it and whatnot) and then just commit + push when ready in a single command/click sort of way.

All these problems contributed to a year of experimentation that left my actual ability to write things a bit in limbo. 

### Substack
I started out by just wanting something that worked, and worked well, for _writing_, without having to worry about anything else. Substack is the obvious choice for this. It's famously anti-censorship, has an intuitive UI, a large audience, most of my own subscriptions worth reading are from Substack, easy subscription tiers and connection to Stripe for payments, easy email subscriptions. What's not to like?

There was one thing that just ended up being a deal breaker for me. Probably a bizarre requirement to most people, but I just couldn't in good conscience do it. At the time, I was considering requiring subscriptions and payments for some of the articles I wrote, and on Substack, there's _no option for bitcoin payments_. The saddest thing of all is, it appears that there _was_ a way to pay with bitcoin while [Substack was using OpenNode's API](https://opennode.com/blog/bitcoin-payments-with-substack/), but don't any longer. I suppose that's a price of vendor lock-in. It is now Substack's [official policy](https://support.substack.com/hc/en-us/articles/360037862551-I-can-t-use-Stripe-Do-you-accept-PayPal-crypto-clamshells-etc) to _not_ support any bitcoin/crypto payments. I work in the Lightning Network _because_ the payments use case of bitcoin is one of if not it's most exciting aspect. It's probably one of the strongest ways bitcoin can positively influence how we use the internet. To only allow credit card subscriptions, and not bitcoin lightning micropayments, for paywalled articles if I did any would be sad and hypocritical of me. There are other reasons of course, like the fact that Substack isn't open source and that I wouldn't actually own my own data. The idea that my blog dies when the company dies was another major negative.

So what other options were there that fit my increasingly stringent criteria?

### Ghost

Enter [Ghost](https://ghost.org), a website which markets itself as essentially the more [principled and feature-rich version of Substack](https://ghost.org/vs/substack/) (which I believe they are). They are fully open source and you can run the blog software locally yourself, deploy it on a VPS of your choice, setup your own email provider, etc. If you choose to pay for them to host it for you, it's only $9 a month and that includes the ability to bring your own domain, email subscriptions, etc. A huge improvement to me, and a project and team that I was (and still am) very excited about.

They even have a marketplace of templates and integrations, and given their open-source spirit I was hopeful they'd have some sort of bitcoin integration on there — and there is one...that you have to pay for. It's called [Scribsat](https://scribsat.com/); here's the Ghost Forum [post](https://forum.ghost.org/t/a-new-bitcoin-payments-integration-scrib/36125/4) about it. They charge a monthly fee steeper than Ghost's hosting fees itself to allow you to accept bitcoin lightning payments on Ghost. That didn't really fit the bill for me, either, and I don't want to be forced to depend on another service to accept the payments for me. For what it's worth, this does seem to be a [hot topic](https://forum.ghost.org/t/bitcoin-payments/10514/37) on the Ghost Forum, and I hope that someone will take up the call of developing something people can use for this. Ghost is a great tool and company, [used by Bitcoiners](https://blog.lopp.net/), and would be powerful to many if properly combined with bitcoin payments.

I considered working on this myself, but there is significant overhead that I just didn't and don't have the time (for now) to take up.

For awhile, the lack of bitcoin-based payment options was worth it, and I paid for a full year's subscription even though I wasn't sure if I'd use it for long (I didn't, but I consider it a tithe to open-source software). I loved the writing and publishing experience, which was extremely simple, and there were a good number of default themes to choose from. However, none that I _loved_, and I found myself longing for more customizability. For most bloggers who can pay a few bucks a month or have the wherewithal to self-host, I would definitely recommend Ghost. 

### Discoveries

My website was hosted on Ghost for a couple months, and it actually allowed me to write an article or two and post a quote here and there, and I was starting to give up on monetizing it (was I ever really doing it for that anyway?). But then I started going down more of a rabbit hole. And it's a rabbit hole I'd never have started going down were it not for the influence of the Bitcoin community in the first place. Once you submit that software should be Free and Open Source, as the Bitcoin community does, a hundred divergences from traditional thoughts on software creation spring. It's a natural logical step to assume that if software should be open source, it should and will be completely own-able and modifiable by its' users. If it is owned by its' users, it should be private and they should be in control of their data. If software and the data users store in it is freely modifiable, own-able, private, etc., then they should And so, we have , [Luke Smith](), 


---

- Luke Smith
- Gwern
- Zig creator
- Aaron Schwartz
- Visakan Veerasamy
- Henrik Karlsson


### On the section explaining why bitcoin
> Humans are distinguished from other species by our ability to work miracles. We call these miracles technology.
> [Peter Thiel, _Zero to One_](https://www.goodreads.com/quotes/5500367-humans-are-distinguished-from-other-species-by-our-ability-to)
