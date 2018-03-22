---
title: "Problem with tmux When Upgrading to Yosemite"
date: 2014-11-17
tags:
- Tutorial
---

When I updated to Yosemite and started tmux, I get this warning every time I open a new tmux window:

```bash
warning: reattach-to-user-namespace: unsupported new OS, trying as if it were 10.6-10.9
warning: _vprocmgr_move_subset_to_user failed
warning: reattach-to-user-namespace: unable to reattach
```

But running this fixed the problem:

```bash
brew update
brew upgrade reattach-to-user-namespace
```
