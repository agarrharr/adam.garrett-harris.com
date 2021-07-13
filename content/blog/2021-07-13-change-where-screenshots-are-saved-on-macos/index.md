---
title: "Change Where Screenshots Are Saved on macOS"
date: 2021-07-13
tags:
- cli
- macos
---

Open Terminal (by searching spotlight (by pressing ⌘ Space)).

Paste in the following command and hit enter.

```
defaults write com.apple.screencapture location -string "${HOME}/Downloads"
```

From now on, screenshots will be saved to your Downloads folder instead of your Desktop. You can customize the command to change it to any folder you want. Maybe you want to save it to a folder on your Desktop. You could do this:

```
defaults write com.apple.screencapture location -string "${HOME}/Desktop/screenshots"
```

To change it back to the default location of the desktop, run:

```
defaults write com.apple.screencapture location -string "${HOME}/Desktop"
```
