---
layout: post
title: Problem with tmux When Upgrading to Yosemite
categories:
- Tutorial
tags: []
status: publish
type: post
published: true
comments: true
---

When I updated to Yosemite and started tmux, I get this warning every time I open a new tmux window:

{% highlight ruby %}
warning: reattach-to-user-namespace: unsupported new OS, trying as if it were 10.6-10.9
warning: _vprocmgr_move_subset_to_user failed
warning: reattach-to-user-namespace: unable to reattach
{% endhighlight %}


But running this fixed the problem:

{% highlight ruby %}
brew update
brew upgrade reattach-to-user-namespace
{% endhighlight %}

