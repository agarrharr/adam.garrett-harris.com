---
title: "Notification for Low Battery When Docker Is Running"
date: 2021-03-29
tags:
- automation
- keyboard maestro
---

Sometimes after work, I unplug my Macbook Pro and then discover (not that much later) that my battery is super low and I need to scramble to grab my power cord. One reason for my battery draining so quickly is Docker. I run Docker all day at work, but I don't always remember to quit it when I'm using my computer for personal purposes.

So, I set up Keyboard Maestro to alert me whenever my battery is 80% or less if Docker is running. It relies on a couple of shell scripts to make this work. I got them from forums online, but I can't remember where, so I can't give credit to the original creator. One gets the battery percentage and another to find out if it's plugged in to power or not.

To get the battery power:

```
pmset -g batt | tr "\012|%|'" ' ' | awk '{print $8}'
```

To find whether it's plugged in or not:


```
if [[ $(pmset -g ps | head -1) =~ "AC Power" ]]; then
  echo "true"
else
  echo "false"
fi

```

Getting those two pieces of information was the hard part. After that it just checks to see if all three of these things are true:

- batteryPower <= 80
- pluggedIn = false
- Docker is running

![Macro](Blog/2021-03-29-notification-for-low-battery-and-docker-is-running/macro.png)

If all of those are true, then it shows a notification saying that power is low and Docker is running.

I set this macro to run every 15 minutes.

You can download the macro here: [Alert - Low Battery Status and Docker is Running](./alert-low-battery-status-and-docker is Running.kmmacros)
