---
layout: post
title: How to Redirect Pages in Jekyll
categories:
- jekyll
tags: []
type: post
published: true
comments: true
---

If you change the url of a page or post on WordPress, it automatically redirects from the old url to the new one. But since Jekyll is just static pages, it doesn't do this for you. I didn't really like WordPress doing this for me. Sometimes I didn't want or need it to do that. With Jekyll, you can be in full control, but you have to remember to do it.

If, for example, you changed a page from `videos/more-videos/index.html` to `media/videos/index.html`, then just put this in the old file.

{% highlight html %}
<html>
    <head>
	<meta http-equiv="refresh" content="0; url=http://www.lifestonechurch.net/media/videos/">
	<link rel="canonical" href="http://www.lifestonechurch.net/media/videos/" />
    </head>
</html>
{% endhighlight %}

