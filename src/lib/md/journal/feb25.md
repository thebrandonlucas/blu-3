---
title: February 2025
description: Journal
---

---

_2025-02-18_

- I now have:
  - A VPS running Wireguard VPN which my devices are connected to
  - An Apple Silicon (Macbook M1) computer running NixOS 
  - The NixOS Macbook running a Jellyfin server for my media
  - The Jellyfin server can successfully be accessed by any computer connected to the VPN

- Example of why I love open-source. I was having an issue today where my Jellyfin server would keep disconnecting from my other devices, seemingly sporadically, after awhile. Often when checking the logs I would see an error related to websockets, but didn't understand why it was occurring. After browsing the [Jellyfin Github Issues](https://github.com/jellyfin/jellyfin/issues) for a bit [I discovered](https://github.com/jellyfin/jellyfin/issues/13379) someone who very likely is running into the same issue as me. It likely has something to do with running Jellyfin on Apple Silicon, which I am, despite the OS being NixOS. This person opened the issue last month, and the maintainers responded saying they had resolved it in the upcoming release. That release happened two days ago, and the maintainers responsible for pushing that update to the Nix package manager are now behind, so I literally can't update it yet. But because the project was open-source, I could find that I had the same problem as someone else, and rest assured that I simply have to update my software when the release becomes available. And since the Nix package for Jellyfin is only one patch version behind, I expect that to be very soon.

- _Idea_. [ppq.ai](https://ppq.ai) allows you to access many different AI models using micropayments. It's amazing. The only thing I'd like now is a command line tool that I can use their API with.

--- 

_2025-02-15_

- Thought - in general, we really need more things that are just "type these values into a list and run a program against it". NixOS's idea of just having a configuration file that defines an operating system is brilliant and is something we should have been doing for much longer in the computing world, and more programs and systems should operate this way. Instead of having to "re-setup" your computer every time you buy a new one (or relying on cleverly closed-source solutions like Apple has thus far successfully managed to do), you just plop in your config, sync your data, and _boom!_, you're back in business. Over the years your computer would become more and more personalized to _you_. As a side note, it seems this means NixOS can sort of be a playground with which to create the best operating systems (you can configure anything pre-built).

- *Idea* - Feedify - Turn a set of Markdown files into an RSS Feed. We really need to make RSS Great Again. It would appear, at a superficial glance, that it is just architecturally much more user friendly, privacy-respecting, and self-hostable in every way. Why don't we all use it? And, for what it's worth, XMPP for messaging?

- Thought - I got this idea from [Luke Smith](https://lukesmith.xyz/), but wouldn't it be awesome to have browsers that could be constructed from config files as well?


- *Installing NixOS on Apple Silicon*: (Note: I went ahead and *uninstalled* asahi linux to simplify the process, since these docs seem to assume a clean installl). I followed the instructions [here](https://github.com/tpwrules/nixos-apple-silicon/blob/main/docs/uefi-standalone.md), _carefully_, and was successfully able to run (headless, at least) NixOS on Apple Sillicon.

---

_2025-02-14 - Valentine's Day. ssh-copy-id_

This lovely Valentine's, I learned about a cool command for automating `ssh` logins to another computer.

`ssh-copy-id` sets up the `ssh` keypair exchange for you automatically by just running it against your `username@host-ip` like so:

```bash
ssh-copy-id root@123.456.789
```

Then, it'll ask you for your password, and voila! You should now have `ssh` setup between your computer and the host such that the next time you run `ssh root@123.456.789` it will just auto-log you in, no passwords required!

---


