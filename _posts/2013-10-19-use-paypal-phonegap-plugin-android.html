---
layout: post
title: How to Use the Paypal Phonegap Plugin for Android
categories:
- Tutorial
tags: []
status: publish
type: post
published: true
comments: true
---

Here's a quick tutorial on what I did to accept paypal payments on android with the <a href="https://github.com/paypal/PayPal-Android-SDK-PhoneGap" target="_blank">PayPal Android SDK PhoneGap Plug-in</a>. These instructions are out there, but you kinda have to dig around a little to piece it all together.

<ol>
	<li>Download the <a href="https://github.com/paypal/PayPal-Android-SDK">PayPal Android SDK</a>.</li>
	<li>Put everything in the libs folder into platforms/android/libs</li>
	<li>
    Ensure your minimum SDK level is 8 or above. You should have an element like this in your AndroidManifest.xml inside the manifest tag:
    {% highlight ruby %}
    <uses-sdk android:minSdkVersion="8" android:targetSdkVersion="17" />
    {% endhighlight %}
  </li>
	<li>Request the required permissions, also inside the manifest tag:

{% highlight ruby %}
<!-- for card.io card scanning -->
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.VIBRATE" />

<!-- for most things, including card.io and paypal -->
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="android.permission.INTERNET" />

<!-- Camera features -->
<uses-feature android:name="android.hardware.camera" android:required="false" />
<uses-feature android:name="android.hardware.camera.autofocus" android:required="false" />
<uses-feature android:name="android.hardware.camera.flash" android:required="false" />
{% endhighlight %}
</li>

<li>Add the SDK's service and activities to the application tag:

{% highlight ruby %}
<service android:name="com.paypal.android.sdk.payments.PayPalService" android:exported="false" />
<activity android:name="com.paypal.android.sdk.payments.PaymentActivity" />
<activity android:name="com.paypal.android.sdk.payments.LoginActivity" />
<activity android:name="com.paypal.android.sdk.payments.PaymentMethodActivity" />
<activity android:name="com.paypal.android.sdk.payments.PaymentConfirmActivity" />

<activity android:name="io.card.payment.CardIOActivity" android:configChanges="keyboardHidden|orientation" />
<activity android:name="io.card.payment.DataEntryActivity" />
{% endhighlight %}

</li>
<li>Download the java file and the js file from the <a href="https://github.com/paypal/PayPal-Android-SDK-PhoneGap">Paypal Phonegap plugin</a>. Put the java file in platforms/android/src/com/paypal/android/sdk/phonegap. Put the js file in www/js.
</li>
<li>
Add the following to platforms/android/res/xml/config.xml
{% highlight xml %}
<feature name="PayPalMobile">
  <param name="android-package" value="com.paypal.android.sdk.phonegap.PayPalMobilePGPlugin" />
</feature>
{% endhighlight %}
</li>
	
<li>Then some sample code might be something like this. Put this in your index.html
{% highlight ruby %}<button id="buyButton">Buy Now!</button>{% endhighlight %}</li>
	<li>And put this in your javascript:</li>
</ol>
{% highlight ruby %}
var buyButton = document.getElementById("buyButton");
buyButton.onclick = function(e) {

  // See PayPalMobilePGPlugin.js for full documentation
  // set environment you want to use
  window.plugins.PayPalMobile.setEnvironment("PayPalEnvironmentNoNetwork");

  // create a PayPalPayment object, usually you would pass parameters dynamically
  var payment = new PayPalPayment("1.99", "USD", "Awesome saws");

  // define a callback when payment has been completed
  var completionCallback = function(proofOfPayment) {
    // TODO: Send this result to the server for verification;
    // see https://developer.paypal.com/webapps/developer/docs/integration/mobile/verify-mobile-payment/ for details.
    console.log("Proof of payment: " + JSON.stringify(proofOfPayment));
  }

  // define a callback if payment has been canceled
  var cancelCallback = function(reason) {
    console.log("Payment cancelled: " + reason);
  }

  // launch UI, the PayPal UI will be present on screen until user cancels it or payment completed
  window.plugins.PayPalMobile.presentPaymentUI("YOUR_CLIENT_ID", "YOUR_PAYPAL_EMAIL_ADDRESS", "someuser@somedomain.com", payment, completionCallback, cancelCallback);
}{% endhighlight %}

And that's it. build your app and when you click the button it should open up a screen like this:
<p style="text-align: center;"><a href="http://www.adamwadeharris.com/wp-content/uploads/2013/10/2013-10-19-17.19.46.png"><img class="aligncenter  wp-image-403" alt="2013-10-19 17.19.46" src="{{site.url}}/assets/uploads/2013/10/2013-10-19-17.19.46.png" width="288" height="480" /></a></p>
