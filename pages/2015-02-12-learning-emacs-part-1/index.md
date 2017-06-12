---
title: Learning Emacs Part 1
path: "/learning-emacs-part-1/"
date: 2015-02-12
tags:
- emacs
---

It seems like there are a lot of die-hard fans of vim or emacs out there, and if you use a console editor, you're in one camp or the other, but for me, the choice to learn vim was just a toss-up. I was pretty happy with Sublime Text 2 at the time. I had dabbled with screen and emacs at one point, and I had heard of vim. The only reason I decided to learn vim was because I met someone who used vim. And that was all it took. Now I knew someone who really used it. Their environment was beautiful, they were productive, and now I knew it was actually possible in the real world to use a console-based editor. So with that I dove right into vim and I've been using it full-time for over a year now.

## I'm a vim guy

But I'm not a hard core, die hard fan of vim. I like it, but I can also see it's quirks. And I'm trying to learn more about those quirks and learn how to make plugins. I'm reading [Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com/), I'm subscribed to the [vim subreddit](http://www.reddit.com/r/vim/), and I'm active on the new [vi StackExchange](http://vi.stackexchange.com/).

But I'm also open to learning something new and possibly better. I'm willing to give emacs a try. And now I've met several people who have coded, or currently code in emacs. So tonight I decided to give it a shot. This was my experience.

## Diving into Emacs

First I tried to follow [this tutorial on Clojure with Emacs](http://clojure-doc.org/articles/tutorials/emacs.html) and I ended up installing the gui version of emacs, which isn't what I wanted, but I guess that will actually come in handy as I'm learning, because it has menus and stuff if you forget the commands. Then it wanted me to add some stuff to my emacs config file, which is `~/.emacs.d/init.el`. And to me that already seems like an overly complicated spot for a config file compared to vim's `~/.vimrc`, but that's fine, I'm sure there's a reason for it. And then I realized, I don't know how to edit the file in emacs yet, so I used vim to add the text in the config.

I go back to emacs, tried running the commands to install the packages from the config with this command: `M-x eval-buffer`, and after not knowing if it worked (it hadn't), I quit emacs and restarted. Actually I had no idea how to quit. I tried everything, I kept trying vim commands by habit, I even looked it up and couldn't get it right. It turns out I was trying `M-x M-c` instead of `C-x C-c`.

So then I realized I need to learn some basics before I can follow this tutorial, so I found a [basic tutorial on emacs](http://david.rothlis.net/emacs/howtolearn.html) so I could at least open files and stuff.

So I open the `.init.el` file and then run `M-x eval-buffer` and it says it can't find the better-defaults package ("Package `better-defaults-' is unavailable"). So I remove the "better-defaults" part of the config (in emacs this time) and re-run the eval-buffer command. This time a bunch of stuff whizes by and it looks like it worked. Yay!

By this time the Clojure tutorial tells me to go through the built-in emacs tutorial, and even how to hit the emacs key combos like the one to get into the tutorial: `C-h t`. Thanks, I could have used that 5 minutes ago...

I start going through the tutorial, which is very similar to vim's built-in tutorial, and I start to wonder if I could ever get used to it. Hitting the meta key is awkard. I wonder if it's possible to hit it and leave you fingers on the home row. And I wonder if learning emacs would make me forget vim. I hope not. And my immediate reaction is: I don't see how I could ever learn to like emacs as much as vim.

## Next Time

Hopefully I'll be posting more about my experience as I go along. I'll share my triumphs and my failures, I'll try to keep an open mind, and then I'll share my final verdict.
