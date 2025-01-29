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

### Inspiration Draws From Disparate Sources

> Shall I tell you the secret of the true scholar? It is this: Every man I meet is my master in some point, and in that I learn of him.

- [Ralph Waldo Emerson, _Greatness_](https://wist.info/emerson-ralph-waldo/65482/)

My website was hosted on Ghost for a couple months, and it actually allowed me to write an article or two and post a quote here and there, and I was starting to give up on monetizing it (was I ever really doing it for that anyway?).

But around this time I was coming into greater contact with online presences that helped me to think differently, and though they all differ radically in occupation, style, and personal beliefs, they share an energy for creating good things meant to _last_; a passion for thinking long-term and for following their hearts over easy money and fame. A desire to achieve greatness in some form or other, and to have the revenues of their considerable efforts paid in something deeper than cash.

One of those I stumbled across was [Luke Smith](https://lukesmith.xyz/), a thoroughly original person, whose unique admixture of Twitter-like meme humor, dead-serious power usage of FOSS-only tech, deep historical, philosophical, and linguistic knowledge, and opinionated Christianity fascinated me, even if I didn't agree with many of his opinions and sometimes his style. It's rare to find a person occupying all those particular spheres simultaneously, particularly in technology. From him I learned to ask for more from my software, to seek and value the right to and practice of _ownership_, whether that's in owning your own land, owning your own money (bitcoin, being debt-free), or owning your own technology to the highest degree possible. He even [removed all credit card-based ways to donate to him](https://lukesmith.xyz/updates/retiring-fiat-donation-portal/) on his website, as they weren't in keeping with his principles. I used his tutorial website on becoming an [Internet Landlord](https://landchad.net/) by self-hosting a website on your own DNS, for example, to build and host the version of this site at the time of writing. Another thing that is important to him is to have technology be a _tool you use_, rather than you be _its' tool_. To that end, he helped encourage me to try to build and use software that will last, and focus less on the ephemeral. Not an easy pursuit in the software world, open source or otherwise!

Another figure who influenced this blog is [Henrik Karlsson](https://www.henrikkarlsson.xyz/), whose article [_A blog post is a very long and complex search query to find fascinating people and make them route interesting stuff to your inbox_](https://www.henrikkarlsson.xyz/p/search-query) had a deep impact on me and the direction of my thinking about how a blog should be made. It is excellent, both the idea and the read.

[Zig](https://ziglang.org/) creator Andrew Kelley, also comes to mind, whose article [Why We Can't Have Nice Things](https://andrewkelley.me/post/why-we-cant-have-nice-software.html) helped me realize the incredible waste that often goes into making products worse when money alone is the goal.

[Visakan Veerasamy]()'s article is often 

But the final major influence was [gwern.net](https://gwern.net/), whose beautiful and carefully crafted website design is matched by its rich content and elegant prose. Seriously, this blog is amazing!

### history plays a role
Studying history also gives a sense of wanting to create things that last. In one way, this is a paradoxical pursuit in the tech world — most things we do are constantly being outdated by something new that has come along. But in another sense, if you build the right things, then everything else gets built on top of that, and what you worked on could just be the bedrock of the future, instead of merely trampled underneath it.



But then I started going down more of a rabbit hole. And it's a rabbit hole I'd never have started going down were it not for the influence of the Bitcoin community in the first place. Once you submit that software should be Free and Open Source, as the Bitcoin community does, a hundred divergences from traditional thoughts on software creation spring. It's a natural logical step to assume that if code is open to anyone to read and run, it should and will be completely own-able and modifiable by its' users. If it is owned by its' users, it should be private to them and they should be in control of their data. If software and the data users store in it is freely modifiable, own-able, private, etc., then they should And so, we have , [Luke Smith](), 


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
