---
title: Toward a Better Personal Website
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

### First Site — Build it Yourself, Host it Somewhere Else

I started out as most Gen-Z developers start, I think. You want to be a developer, you need a portfolio. You want to be a _web developer_? Your portfolio is your website. And so my first website was just that. It was designed to be artsy and beautiful and to get me a job as a web developer. And so I didn't post or write about anything, just listed what I felt would be most impressive to recruiters. But, after proving to yourself that you can indeed get a job and you can indeed make enough to pay your rent and not be a broke college kid forever, you start to realize there's more important things in life than just trying to impress recruiters. You realize that a personal website can be so much more. It can be a _reflection of yourself_. 

And so, with that in mind, I built my first "real" attempt at a personal site. I built it in [Sveltekit](https://svelte.dev/) (which was in unstable version 3 at the time), used the [MDSveX](https://github.com/pngwn/MDsveX) library so I could write my articles in [Markdown](https://en.wikipedia.org/wiki/Markdown). This was a proper blogging site that also listed projects and "About Me" and "Contact" and whatnot, however there were several problems:

- **Hosting**: It was hosted on Netlify, which meant that there were often cold starts when visiting it. This also meant that I wasn't hosting the site myself, which wasn't a big deal to me at the time, but developed into one over the course of the year.
- **Features**: The site was low on features and bells and whistles, but this was mainly because I just didn't take the time to implement them. The fact that everything was written in Sveltekit meant that I could have, but I wasn't taking the time to really think about what I wanted implemented and then come up with a good plan to do it.
- **Preprocessing the Markdown**: I didn't quite understand how to set up the preprocessor in MDSveX properly, which does the job of converting the Markdown to HTML when building the site. What I _think_ was happening was this resulted in pages having to convert the Markdown to HTML on the fly during runtime, and so the bigger the article, the slower the page load, but I never truly investigating this since I decided to redo the website from the ground up anyway. To the end user, this just felt like the page was frozen for awhile, which was really annoying UX.
- **Content and Organization**: I wasn't sure of how I wanted things organized, and I only had a few articles, blogs, and quotes on there. The way I would write my content was by writing the article in Markdown directly on the site and then just committing and pushing the code to Github, and from there it would build and deploy to Netlify automagically. That was nice, but I would prefer to be able to write the article in another program (so that I could have "draft" versions of it and whatnot) and then just commit + push when ready in a single command/click sort of way.

All these problems contributed to a year of experimentation that left my actual ability to write things a bit in limbo (where would I put it?).

### Baby Steps

My first attempt move was to look at Substack

Developing a personal website can be as much or little work as its' creator decides, depending on whether they want more control over things like where it's hosted, the layout of the site, price, and features. Most independent bloggers opt for out-of-the-box solutions, the most popular of which these days seems to be [Substack](https://substack.com/), and for good reason. It's simple and comes with the things most bloggers want and doesn't require much work from them other than the writing itself. A year or two ago, my personal website was hosted on [Netlify](), written in [Sveltekit](), and Netlify was connected to Github so that it auto-deployed when pushing any change. That was nice, but visiting it was extremely slow (Netlify does cold starts; the server had to spin up if the website was infrequently visited).

I spent the next year ideating on different ways to build a site in my spare time, and got more hands-on experience with the different tradeoffs of each. Most importantly, however, I ran into a few influences that led me to rethink my priorities and philosophy for how I should build my personal website, and in truth, for how I should build things in general

- Luke Smith
- Gwern
- Zig creator


### On the section explaining why bitcoin
> Humans are distinguished from other species by our ability to work miracles. We call these miracles technology.
> [Peter Thiel, _Zero to One_](https://www.goodreads.com/quotes/5500367-humans-are-distinguished-from-other-species-by-our-ability-to)
