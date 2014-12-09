---
layout: post
title: My iTerm 2 Setup
categories:
- Tutorial
tags: []
status: publish
type: post
published: true
comments: true
---

I started using iTerm 2 recently, mostly because of the ability to use the mouse inside tmux and vim. Other than that, I probably would have stuck with Terminal. But, with that being said, there are my settings in iTerm.

![iTerm 2]({{ site.url }}/assets/uploads/2014/12/iterm2.jpg)

## Profiles
Open preferences and to to the Profiles tab. Create new profile and name it

### Colors tab
For the colors, I use a theme called [Solarized](http://ethanschoonover.com/solarized). It's a really nice looking theme available for a lot of platforms in a dark and light version. I use it for iTerm and vim.

Load Presets
Import Solarized Dark
Then select your profile on the left, click Load Presets and select Solarized Dark
Turn up Minimum contrast a little bit or you can’t see some text (like line numbers in grunt jshint)

### Text tab
Check Blinking cursor
Uncheck Draw bold text in bright colors
Download a [patched font](https://github.com/Lokaltog/powerline-fonts)
I use Anonymous for Powerline
Select patched font for regular and non-ASCII (14pt)

If you decide to use powerline (mentioned below), for non-ASCII, turn the vertical character spacing up a little bit until the > and < symbols on powerline don’t overlap the top

Check Flash visual bell

### Window Tab

Turn up the transparency just a little

### Terminal tab
Set terminal type to xterm-256color

## Keys tab

Under Hotkey, check "Show/hide iTerm2 with a system-wide hotkey"
I set mine to option-Space

### Install zsh and oh-my-zsh

Zsh and oh-my-zsh are awesome. If you don't know what they are you should check thme out.

## Install Powerline

[Powerline](https://github.com/Lokaltog/powerline/) adds a nice prompt to my zsh (I also use it for tmux and vim).

    ```
    brew install python
    # Install powerline
    pip install --user git+git://github.com/Lokaltog/powerline
    ```
## Other stuff

I also use tmux and vim, and I have all of my [configurations for them up on github](https://github.com/aharris88/dotfiles). Feel free to check it out, it's all pretty well commented.
