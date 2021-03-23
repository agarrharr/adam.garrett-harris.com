---
title: "Helpful Zoom Keyboard Shortcuts with Keyboard Maestro"
date: 2021-03-21
tags:
- automation
- zoom
- keyboard maestro
---

I started using these when the pandemic hit and I started working from home. It's really made using Zoom much easier.

- Hyper 1 = Mute/Unmute
- Hyper 2 = Show/hide camera
- Hyper 0 = Push to talk

Yes, Zoom does have shortcuts, and you can enable them to be global shortcuts, but you can't customize what keys you press. So I did that customization with Keyboard Maestro.

For example, the KM macro from Mute/Unmute is triggered by Hyper 2 (Hyper is ⌃⌥⇧⌘, but I use Karabiner Elements to set the right command key to be all of those keys). And all it does is send ⇧⌘A to Zoom. I didn't want to have to remember ⇧⌘A is mute/unmute and ⇧⌘V is show/hide camera. I wanted to be able to set my own keyboard shortcut with the Hyper key.

You can download them here: [Zoom Keyboard Maestro macros](./zoom-macros.kmmacros)
