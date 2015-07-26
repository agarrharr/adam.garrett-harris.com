---
title: Remote Debugging in Phonegap with Chrome Devtools
tags:
- Tutorial
---

The requirements are:

* Phonegap 3.3 or higher

* An android device running Android 4.4 Kitkat or higher

* Chrome 30+ on the desktop

Here's the steps to get setup:

1. Enable usb debugging on your phone

2. Update your phonegap app to API Level 19 (Kitkat).

   In AndroidManifest.xml change this line:

   `<uses-sdk android:minSdkVersion="17" android:targetSdkVersion="19" />`

   In project.properties, change this line:

   `target=android-19`

3. Enable WebViews for debugging

   In this file: `platforms/android/src/com/yourAppName/YourAppName.java`, add the following lines under the other import statements:

   `import android.os.Build;`
   `import android.webkit.WebView;`

   And add the following inside the onCreate method:

   `if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {`
   `  WebView.setWebContentsDebuggingEnabled(true);`
   `}`

4. Remote Debug

   Run the app on your phone, and in Chrome type `about:inspect` in the address bar. Then you should see your device and app listed. Click inspect and you'll be able to do everything you would normally be able to do with Chrome Devtools.

   <img src="{{site.url}}/assets/uploads/2014/03/chrome-devtools.png" />

Sources:

[https://developers.google.com/chrome-developer-tools/docs/remote-debugging](https://developers.google.com/chrome-developer-tools/docs/remote-debugging)

[https://github.com/jrstarke/webview-debug](https://github.com/jrstarke/webview-debug)

[http://stackoverflow.com/a/20399267/1665818](http://stackoverflow.com/a/20399267/1665818)
