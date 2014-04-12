---
layout: post
title: Android Automation
categories:
- Tutorial
tags: []
status: publish
type: post
published: true
comments: true
---

In my [last post]({{site.url}}/sign-publish-phonegap-app-google-play-store-windows/) about releasing for android, I had a long list of commands that you had to run, to finally create a releasable apk file. It looked something like this:

{% highlight ruby %}
ant release
cd bin
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore /Users/username/Documents/path/to/my-release-key.keystore AppName-release-unsigned.apk app_name
jarsigner -verify -verbose -certs AppName-release-unsigned.apk
zipalign -v 4 AppName-release-unsigned.apk AppName.apk
{% endhighlight %}

Well, that's kinda complicated. And it [turns out](http://stackoverflow.com/a/14765511/1665818), there's any easy way to do all of this with just this:

{% highlight ruby %}
ant release
{% endhighlight %}

What?!? How can the first command do the same thing as 5 commands?

The answer is with a few configuration files that will let ant know where the keystore file is and what its passwords are.

First open build.xml and make sure that it has this line:

{% highlight xml %}
<property file="ant.properties" />
{% endhighlight %}

And this line:

{% highlight xml %}
<import file="custom_rules.xml" optional="true" />
{% endhighlight %}

Then open ant.properties and make sure it looks like this:

{% highlight ruby %}
key.store=/Users/username/Documents/path/to/my-release-key.keystore
key.alias=app_name
{% endhighlight %}

The key.store can either be an absolute path (like the example above), or a relative path like this:

{% highlight ruby %}
key.store=../../../../my-release-key.keystore
key.alias=app_name
{% endhighlight %}

Then open custom_rules.xml (create it, if it doesn't exist) and make sure it looks like this:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<project name="custom_rules" default="help">
  <property file="../../../secure.properties" />
</project>
{% endhighlight %}

This will point to a custom file that will store your passwords for your keystore file. In this example, I'm pointing 3 directories above the current directory. Since this file will contain sensitive information, it's best to keep it outside of your source control. You can either put it outside of your source control as I did, you you can ignore the file in your .gitignore.

Create the secure.properties file, in the location of your choice and set it up like this. It contains the password for your key store and alias.

{% highlight ruby %}
key.store.password=mypassword
key.alias.password=mypassword
{% endhighlight %}

And there you have it. You should just be able to run

{% highlight ruby %}
ant release
{% endhighlight %}

and you should get a final apk output in the bin directory. Just remember to go into your AndroidManifest and set debuggable to false.