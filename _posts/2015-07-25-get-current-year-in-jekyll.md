---
title: Get The Current Year In Jekyll
tags:
- jekyll
---

At the bottom of several of my websites I have a copyright notice with the current year and I realized that I would have to go and update all of them each year. So instead I decided to use Jekyll to automatically output the current year.

Of course, it won't update automatically if I never make any changes to it, but as long as I make some sort of change to the site, it will output the current year. This way, I won't really have to think about it. As long as I'm updating the site on a normal basis anyway, the copyright year will stay up to date.

So here's the code to do that:

{% highlight bash %}
{% raw %}
{{ 'now' | date: "%Y" }}
{% endraw %}
{% endhighlight %}
