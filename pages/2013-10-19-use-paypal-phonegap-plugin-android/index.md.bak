---
title: How to Use the Paypal Phonegap Plugin for Android
date: 2013-10-19
tags:
- Tutorial
---

**Update**- The [PhoneGap Plugin is now deprecated](https://devblog.paypal.com/phonegap-android-sdk-plugin/)

Here's a quick tutorial on what I did to accept paypal payments on android with the PayPal Android SDK PhoneGap Plug-in. These instructions are out there, but you kinda have to dig around a little to piece it all together.


1. Download the [PayPal Android SDK](https://github.com/paypal/PayPal-Android-SDK).
1. Put everything in the libs folder into `platforms/android/libs`
1. Ensure your minimum SDK level is 8 or above. You should have an element like this in your `AndroidManifest.xml` inside the manifest tag:
    ```xml
    <uses-sdk android:minSdkVersion="8" android:targetSdkVersion="17" />
    ```
1. Request the required permissions, also inside the manifest tag:
    ```xml
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
    ```
1. Add the SDK's service and activities to the application tag:
    ```xml
    <service android:name="com.paypal.android.sdk.payments.PayPalService" android:exported="false" />
    <activity android:name="com.paypal.android.sdk.payments.PaymentActivity" />
    <activity android:name="com.paypal.android.sdk.payments.LoginActivity" />
    <activity android:name="com.paypal.android.sdk.payments.PaymentMethodActivity" />
    <activity android:name="com.paypal.android.sdk.payments.PaymentConfirmActivity" />

    <activity android:name="io.card.payment.CardIOActivity" android:configChanges="keyboardHidden|orientation" />
    <activity android:name="io.card.payment.DataEntryActivity" />
    ```
1. Download the java file and the js file from the [Paypal Phonegap plugin](https://github.com/paypal/PayPal-Android-SDK-PhoneGap). Put the java file in `platforms/android/src/com/paypal/android/sdk/phonegap`. Put the js file in `www/js`.
1. Add the following to `platforms/android/res/xml/config.xml`
    ```xml
    <feature name="PayPalMobile">
      <param name="android-package" value="com.paypal.android.sdk.phonegap.PayPalMobilePGPlugin" />
    </feature>
    ```
1. Then some sample code might be something like this. Put this in your `index.html`.
    ```html
    <button id="buyButton">Buy Now!</button>
    ```
1. And put this in your javascript:
    ```js
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
    }
    ```

And that's it. Build your app and when you click the button it should open up a screen like this:

<img alt="Paypal" src="./paypal.png" />
