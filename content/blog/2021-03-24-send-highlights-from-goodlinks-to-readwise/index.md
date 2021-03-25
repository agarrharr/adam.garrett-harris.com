---
title: "Send Highlights From Goodlinks to Readwise"
date: 2021-03-24
tags:
- automation
- goodlinks
- shortcuts
---

If you use [GoodLinks](https://goodlinks.app) for reading articles and you use [Readwise](https://readwise.io) for saving and remembering highlights from books/articles, you'll love this. I made a custom GoodLinks action and a shortcut that work together to send highlights to Readwise. If you want to use it, skip down to the part on "Using the Shortcut".

![The custom action in action](./goodlinks-to-readwise.gif)

## Motivation

Some podcasters I listen to have been rethinking their RSS/Read-It-Later situation recently, including [David Sparks](https://www.macsparky.com/blog/2021/3/why-im-switching-to-reeder-5) and [Federico Viticci](https://www.macstories.net/linked/appstories-episode-210-imagining-the-perfect-read-it-later-app/).

For me, I love GoodLinks, but I want to be able to send highlights to Readwise. That's why I switched to Instapaper and even started paying for it for it so that I could make more than 3 highlights per article and make unlimited notes (like I mentioned in my [2021 State of the Apps](https://adam.garrett-harris.com/2021-01-16-2021-state-of-the-apps/)). But I would rather use GoodLinks if I can.

## Technical Details

I read about GoodLinks custom actions [in the MacStories review](https://www.macstories.net/reviews/goodlinks-review-a-flexible-read-it-later-link-manager-packed-with-automation-options/) and wondered if I could build something to send highlights to Readwise from GoodLinks. And it is possible with the [Readwise API](https://readwise.io/api_deets) and Shortcuts. To create a highlight with the API, you can't use a `GET` request. You have to send a `POST` request. So I couldn't just add a Readwise URL as my GoodLink action, which is probably for the best anyway, because now, using an x-callback-url, it brings you back to GoodLinks when it's done.

GoodLinks provides data that you can pass along in the URL like title, author, and url. With the Shortcuts URL, you can pass a single piece of text. If all the shortcut needed was the title, the URL would look like this (anything wrapped in `{}` is URL encoded).

`shortcuts://run-shortcut?name={Send Clipboard to Readwise}&input=text&text={[title]}`

To pass along the title, author, and URL, I decided to use JSON.

`{
  "title": "{[title]}",
  "author": "{[author]}",
  "url": "[url]"
}`

I couldn't use GoodLinks' handy feature of wrapping it with `{}` to url encode it, because my text includes curly braces, so I did it manually, which ends up looking like this:

`%7B%22title%22:%22{[title]}%22,%22author%22:%22{[author]}%22,%22url%22:%22[url]%22%7D`

When you put that all together (and stick `x-success=goodlinks://` on the end so that it will return to GoodLinks when it's done) this is what it looks like.

`shortcuts://run-shortcut?name={Send Clipboard to Readwise}&input=text&text=%7B%22title%22:%22{[title]}%22,%22author%22:%22{[author]}%22,%22url%22:%22[url]%22%7D&x-success=goodlinks://`

Unfortunately, GoodLinks can't tell you what text is highlighted, so you have to copy the text you want to highlight to the clipboard and then run the action.

Shortcuts, then URL decodes the input, and gets the contents of the clipboard, then it constructs a Dictionary and calls the Readwise API.

## Using the Shortcut

1. Get a Readwise account if you don't already
1. Get a Readwise access token (also known as an API key) [here](https://readwise.io/access_token)
1. Add a custom action in GoodLinks
	- Tap the Gear icon
	- Tap "Custom Actions"
	- Tap the "..." button
	- Tap "Add Action"
	- Under name, type/paste "Send Clipboard to Readwise"
	- Under URL, paste `shortcuts://run-shortcut?name={Send Clipboard to Readwise}&input=text&text=%7B%22title%22:%22{[title]}%22,%22author%22:%22{[author]}%22,%22url%22:%22[url]%22%7D&x-success=goodlinks://`
	- You can choose a color and an icon
1. Install the [Send Clipboard to Readwise shortcut](https://www.icloud.com/shortcuts/f88b56119b11461b86d9858597dbf4ff)
	- On your iPhone or iPad, open the link above
	- Tap "Get Shortcut"
	- Scroll to the bottom of the shortcut and tap "Add Untrusted Shortcut"
		- If this doesn't work for you, you have to go to the settings app, scroll down to Shorcuts and turn on "Allow Untrusted Shortcuts"
	- Paste in your Readwise access token from step 2 and tap "Done"
1. You're all done, Phew! You can now use it by copying some text from an article you're reading, tapping the "..." at the bottom and tapping "Send Clipboard to Readwise". It will open up Shortcuts briefly and take you right back to GoodLinks. Magic.	
