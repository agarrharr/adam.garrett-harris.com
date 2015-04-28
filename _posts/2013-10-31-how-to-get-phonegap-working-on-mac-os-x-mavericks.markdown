---
title: How to Get Phonegap Working on Mac OS X Mavericks
tags:
- Tutorial
---

After I upgraded from Mountain Lion to Mavericks, all of a sudden, phonegap wasn't working anymore.

<a href="http://www.adamwadeharris.com/assets/uploads/2013/10/Screenshot-2013-10-31-13.42.25.png"><img class="aligncenter size-full wp-image-426" alt="Screenshot 2013-10-31 13.42.25" src="{{site.url}}/assets/uploads/2013/10/Screenshot-2013-10-31-13.42.25.png" width="567" height="172" /></a>

I noticed that the problem was that it couldn't find ant:

<a href="http://www.adamwadeharris.com/assets/uploads/2013/10/Screenshot-2013-10-31-13.42.47.png"><img class="aligncenter size-full wp-image-427" alt="Screenshot 2013-10-31 13.42.47" src="{{site.url}}/assets/uploads/2013/10/Screenshot-2013-10-31-13.42.47.png" width="223" height="59" /></a>

Ant has always come with Mac OS X, but something must have changed with the Mavericks update. So here's how I got things working again by installing ant with homebrew. If you don't already have homebrew, just install it with this command:

{% highlight ruby %}
brew install wget
{% endhighlight %}

First run:

{% highlight ruby %}
brew update
brew install ant
{% endhighlight %}

If you get this error:

{% highlight ruby %}
Warning: No developer tools installed. You should install the Command Line Tools. Run xcode-select --install to install them.{% endhighlight %}

Then just run this command:

{% highlight ruby %}
xcode-select --install
{% endhighlight %}

And install the tool:

<a href="http://www.adamwadeharris.com/assets/uploads/2013/10/Screenshot-2013-10-31-13.48.18.png"><img class="aligncenter size-full wp-image-428" alt="Screenshot 2013-10-31 13.48.18" src="{{site.url}}/assets/uploads/2013/10/Screenshot-2013-10-31-13.48.18.png" width="471" height="204" /></a> <a href="http://www.adamwadeharris.com/assets/uploads/2013/10/Screenshot-2013-10-31-13.48.30.png"><img class="aligncenter size-full wp-image-429" alt="Screenshot 2013-10-31 13.48.30" src="{{site.url}}/assets/uploads/2013/10/Screenshot-2013-10-31-13.48.30.png" width="648" height="508" /></a> <a href="http://www.adamwadeharris.com/assets/uploads/2013/10/Screenshot-2013-10-31-13.48.39.png"><img class="aligncenter size-full wp-image-430" alt="Screenshot 2013-10-31 13.48.39" src="{{site.url}}/assets/uploads/2013/10/Screenshot-2013-10-31-13.48.39.png" width="506" height="163" /></a> <a href="http://www.adamwadeharris.com/assets/uploads/2013/10/Screenshot-2013-10-31-13.59.51.png"><img class="aligncenter size-full wp-image-431" alt="Screenshot 2013-10-31 13.59.51" src="{{site.url}}/assets/uploads/2013/10/Screenshot-2013-10-31-13.59.51.png" width="508" height="135" /></a>

Then everything should work fine.
