---
layout: post
title: Remote Debugging in Phonegap with Chrome Devtools
categories:
- Tutorial
tags: []
status: publish
type: post
published: true
comments: true
---

The requirements are:


Phonegap 3.3 or higher,


An android device running Android 4.4 Kitkat or higher,


Chrome 30+ on the desktop,


1. Enable usb debugging on your phone


2. Update your phonegap app to API Level 19 (Kitkat).


In AndroidManifest.xml change this line:


{% highlight ruby %}
<uses-sdk android:minSdkVersion="17" android:targetSdkVersion="19" />
{% endhighlight %}


In project.properties, change this line:


{% highlight ruby %}
target=android-19
{% endhighlight %}


3. Enable WebViews for debugging


platforms/android/src/com/yourAppName/YourAppName.java


Add the following lines under the other import statements:


{% highlight ruby %}
import android.os.Build;
import android.webkit.WebView;
{% endhighlight %}


And add the following inside the onCreate method:


{% highlight ruby %}
if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
  WebView.setWebContentsDebuggingEnabled(true);
}
{% endhighlight %}


4. Remote Debug


Run the app on your phone, and in Chrome type about:inspect in the address bar. Then you should see your device and app listed. Click inspect and you'll be able to do everything you would normally be able to do with Chrome Devtools.


<img src="{{site.url}}/assets/uploads/2014/03/chrome-devtools.png" />


Sources:


https://developers.google.com/chrome-developer-tools/docs/remote-debugging


https://github.com/jrstarke/webview-debug


http://stackoverflow.com/a/20399267/1665818