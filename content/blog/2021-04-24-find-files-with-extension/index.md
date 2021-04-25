---
title: "Find Files with Extension"
date: 2021-04-24
tags:
- cli
---

Over the past few years, I've moved a bunch of files from Evernote to DEVONthink to Keep It and finally landed on just storing them in folders on my harddrive. But I realized that some files were `.html` files instead of plain text files or images, so I wanted a quick way to find all of them. I did some searching and here's how you do it in the command line.

```
find . -name \*.html -print
```

This looks through all of the files in the current directory and all of the sub-directories for files that end with `.html` and lists them out. In iTerm 2 I can even command-click on them to open them in the browser. I manually converted them by opening them one by one and saving the images or copy/pasting the text into new text files. That part is a little tedious, but at least I have a list to work off of.
