---
title: How to Easily Embed YouTube Videos in Jekyll Sites Without a Plugin
tags:
- jekyll
---

If you're constantly embedding videos on your site, it can be a pain to include the YouTube embed code each time. And if you're hosting on Github, you can't use a [third](https://github.com/tuananh/BetterTube) [party](https://github.com/pibby/jekyll-youtube) [plugin](https://gist.github.com/joelverhagen/1805814). So here is an easy way to use includes instead of a plugin.

Just create a file in your `_includes` folder called `youtubePlayer.html` with this in it:

{% highlight html %}
{% raw %}
<iframe width="560" height="315" src="https://www.youtube.com/embed/{{ include.id }}" frameborder="0" allowfullscreen></iframe>
{% endraw %}
{% endhighlight %}

Then include this wherever you want to embed a youTube video. You can do like I did here and use data from the front matter of the post or page, or you can just put the id of the YouTube video directly.

{% highlight html %}
{% raw %}
{% include youtubePlayer.html id=page.youtubeId %}
{% endraw %}
{% endhighlight %}

You can also do the same thing with vimeo by making a file called `vimeoPlayer.html`:

{% highlight html %}
{% raw %}
<iframe src="https://player.vimeo.com/video/{{ include.id }}" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
{% endraw %}
{% endhighlight %}
