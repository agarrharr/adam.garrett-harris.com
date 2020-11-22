---
title: "Automatic Time Tracking From Plex"
date: 2020-07-09
tags:
- automation
- time tracking
- plex
- toggl
---



## TLDR

I have a Webhook in Plex that goes to a zap in Zapier. That zap will start a Toggl timer (Watching Video) whenever I start or resume a movie or tv show. It will also start another timer (Personal time) whenever I pause or stop watching (but only if the Watching Video timer is running).

Plex webhook -> Zapier -> Toggl API

## Motivation

I time track everything, including time spent watching video. I want as much metadata in the description as possible, but I don't want to type it by hand and I want it in a consistent format. Most of my video watching is done on Plex, so that's where this automation comes in.

I used to use the Toggl action inside of Zapier, but it was getting too complicated and it wasn't really possible to do everything I wanted. I had an "Only Continue if..." block to make sure it was the right user on Plex and the right event type (play/pause/stop/resume). And there was no good way to handle pause/stop without making another zap, or using Paths. And if I made another zap, I would be running through my limited number of tasks/month more quickly, which is currently capped at 750/month.

![Old zap](./old-zap.png)

But I know JavaScript, so I finally sat down and made it more robust. Now it's just a "Catch Hook" and a "Run JavaScript" block.

![New zap](./new-zap.png)

- It's just one zap for play/pause/resume/stop.
- It starts another timer when you finish so that you don't have to worry about starting another timer when you pause/stop.
- If you pause and then stop, it doesn't start the "pause" timer again.
- It supports multiple users.

Here is the data coming from -the webhook into the JavaScript block.

![JavaScript input](./javascript-input.png)

And here is the JavaScript code. The only thing you have to change is the `accounts` object. You'll need to know the pid (project ids) from your Toggl account and your Toggl API Token (base64 encoded). If you wanted, you could also customize the description or make it an empty string if you don't want a description.

```js
const { account_id, event, type, title, year } = inputData;
// TV Show specific data
const { showTitle, season, episode } = inputData;

const accounts = {
  1: { // REPLACE 1 with the id of your user
    play_pid: 123456788, // REPLACE with the pid of the project you want when you play/resume watching on Plex
    pause_pid: 123456789, // project REPLACE with the pid of the project you want when you stop/pause watching on Plex
    Authorization: "Basic Ae308jas0O123jaseFE9023jasdifu2EDd3jlkasd8w3eoijsadfjkar", // REPLACE with your Toggl API Token base64 encoded
  },
  2: {} // You can add more users if multiple people want to time track their Plex activity or you can delete this line
};

const leftpad = (str, len, ch) => {
  str = String(str);
  var i = -1;
  if (!ch && ch !== 0) ch = " ";
  len = len - str.length;
  while (++i < len) {
    str = ch + str;
  }
  return str;
};

const startTimer = ({ description, pid }) => {
  const url = "https://www.toggl.com/api/v8/time_entries/start";
  const body = JSON.stringify({
    time_entry: {
      description,
      pid,
      created_with: "Zapier",
    },
  });
  const options = {
    method: "POST",
    "Content-Type": "application/json",
    headers: {
      Authorization,
    },
    body,
  };

  return fetch(url, options);
};

const getCurrentTimer = () => {
  const url = "https://www.toggl.com/api/v8/time_entries/current";
  const options = {
    method: "get",
    "Content-Type": "application/json",
    headers: {
      Authorization: `Basic OGFmMjA2NGJkZDIwYmQ2ODRkNjkxOWY5M2QwMmFiZGU6YXBpX3Rva2Vu`,
    },
  };

  return fetch(url, options)
    .then((response) => response.json())
    .then((response) => response.data);
};

const account = accounts[account_id];
if (account === undefined) {
  output = {
    warning: "Account is not setup in accounts object in the JavaScript code.",
  };
  return;
}
const { play_pid, pause_pid, Authorization } = account;

let description = "";
let pid;
if (event === "media.play" || event === "media.resume") {
  if (type === "show") {
    // This is the description of the timer when watching a TV show
    description = `TV Shows - ${showTitle} – s${leftpad(season, 2, "0")}e${leftpad(episode, 2, "0")} – ${title} (${year})`;
  }
  if (type === "movie") {
    // This is the description of the timer when watching a movie
    description = `Movies - ${title} (${year})`;
  }
  pid = play_pid;
} else if (event === "media.pause" || event === "media.stop") {
  const currentTimer = await getCurrentTimer();
  if (currentTimer.pid !== play_pid) {
    output = {
      currentTimer: currentTimer,
      pause_pid,
      warning: "Pause timer is already running.",
    };
    return;
  }
  pid = pause_pid;
} else {
  output = {};
  return;
}

output = { description, pid, response: await startTimer({ description, pid }) };
```