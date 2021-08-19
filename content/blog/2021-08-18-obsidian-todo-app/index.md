---
title: "Obsidian Todo App"
date: 2021-08-18
tags:
- ios
---

I started using Obsidian lately. It's an app for Mac and iOS that looks at a directory of markdown files on your computer and it has some cool features to help you link notes together. It also supports lots of plugins and of course, since it's markdown, it supports checklists. I'm using a plugin called [Tasks](https://github.com/schemar/obsidian-tasks) to query tasks from across the entire directory in different ways.

Since it's just a directory of markdown files, I could make an app that looks at a directory, finds all the tasks in the files, and displays them to me like a traditional todo app. I should also be able to mark them off, edit them, and create new ones. And since I would be editing the actual markdown file, it would still show up in Obsidian.

So, the first task in making this app is to let the user pick the directory (or folder) they want the app to look at. And they should only have to do this once. After that, the app should remember which directory they picked.

I remember [Federico Viticci](https://twitter.com/viticci) talking about something called "file bookmarks" and "open in place" or "edit in place" on an episode of [Connected](https://www.relay.fm/connected), [AppStories](https://appstories.net), or [Adapt](https://www.relay.fm/adapt). And he mentioned that two apps that take advantage of this API are [Working Copy](https://workingcopy.app) and [iA Writer](https://ia.net/writer). He's not a developer, but he knows what he's talking about. 

I searched for those things and came across an article on Apple's developer documentation called [Providing Access to Directories](https://developer.apple.com/documentation/uikit/view_controllers/providing_access_to_directories).

With the knowledge that this should be doable and where to look, I set out to make a proof of concept. And since I'm so new to iOS development, I was banging my head against the wall until my friend Elaine helped me out and pair programmed with me. I wrote a post about [how to get access to directories from other apps](https://adam.garrett-harris.com/2021-08-19-providing-access-to-directories-in-ios-with-file-bookmarks/).