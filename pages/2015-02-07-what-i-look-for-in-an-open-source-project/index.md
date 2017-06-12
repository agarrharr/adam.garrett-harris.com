---
title: What I Look For in an Open Source Project
path: "/what-i-look-for-in-an-open-source-project/"
date: 2015-02-07
tags:
- coding
---

I don't have a ton of experience with open source, but I'm really starting to get into it. I've had some ups and downs as I've put some stuff out there in the wild for people to use and as I've tried to use stuff that people have put out there. So, I just thought I'd share my feelings about what makes a good open source project, and what I look for when I need to use an open source project.

## It's open source

This should be obvious, right? But my point here is that as a developer, I would always rather go with something that's open source over something that's not because I love to be able to see the code and learn, and to be able to make changes and contribute. And this goes for both projects I want to include in my own projects, and simply apps that I want to use, but have no desire to modify. But there are some cases (or a lot of cases) where there just aren't any good options for open source and I'm willing to pay good money for software that's well-designed, beautiful, useable, and delightful. Also, I want to clarify that you *can* make money from free and open source software.

## It's on github

This is a personal preference, but it's become a pet peave of mine, and I'm sure [I'm not the only one](https://twitter.com/_eric_castro/status/525768277662781440). If you want people to see your work, use it, and contribute to it. If you want it to have any legitimacy, put it on github, not Google Code, not Bitbucket, definitely not on SourceForge. The only time I'll check out code on Google Code is when I'm desperate and even then, I immediately hit the back button, because the site just looks old, the code will be old, and honestly I don't know how to use the site. Also, Google Code allows you to use git or Mercurial. And this goes without saying if you're using github, but use git, not Mercurial, or SVN.

## It's well documented

The main thing here is that it at least has a nicely laid out `README.md`. It doesn't have to be fancy, but at a minimum, it should have a section that explains what it is, a section on how to install it, a section on how to use it, and a license. It's also really great to put a section on how to contribute.

Really the more documentation the better. You can use github's build in wiki, however if you aren't going to use the wiki, please disable the wiki (it's on by default).

Or if you want to get really snazzy, you can use github pages, which give you free hosting for a site. This will really make your project seem legit, as long as your site looks nice. And make sure you link to this site, next to the description of the repo. If I find a project that meets my needs and it has a website, I'm immediately sold.

## It's being maintained

I definitely want to use something that's being actively maintained, but that could mean different things for different types of projects. I check when the last commit was, how often it's being updated, how many issues there are, if issues are being answered and closed, if pull requests are being made and accepted.

## It's being supported

This is similar to whether it's being maintained, but the focus is on "customer" support. Look at whether or not issues are being answered, even if it's not really a problem with the software, but with the way people are using it, or how it's documented.

## People are using it

I look at the number of stars. That's the best indicator that people like it and are using it. Another way to tell is if issues are being filed. Obviously, too many issues, and you have to wonder if it's just super-buggy, but too few issues means no one is actually using it. And if other people besides the mainter are answering a question, that's a sign that it's catching on, and other people are passionate about it. Be wary though, of projects where everyone but the creator is supporting it. This may be a sign that they no longer have time to maintain it.

Another great indication that people are using it, is if people are blogging about it. Even if it's just the creator who is blogging about it, I take that as a good sign. It's like a less formal version of documentation.

Also, if people are asking about it on StackOverflow, that's a great sign. This is normally only important for large projects and frameworks, but I've also seen people ask a few questions about smaller questions. If the maintainers, get on StackOverflow

## It doesn't have a better alternative

Obviously check around a see if there is something better for your needs. Popularity and the active development is important, but only if it does what you want. There may be a less popular project that works better for you.

## It's been around for a while

This doesn't always apply, but if it's been around long enough to have a proven track record, that's always a plus.

## It's easy to install

It should be easy to install or setup, but if it's reasonable for this type of project to have a complicated set up, it should at least be documented. The best case scenerio is that it should be easily intallable via [npm](https://www.npmjs.com/), [Bower](http://bower.io/), [Homebrew](http://brew.sh/), [Vundle for vim](https://github.com/gmarik/Vundle.vim), [Wordpress Plugin Directory](https://wordpress.org/plugins/), or whatever is appropriate. And while it's fine to have a prefered or suggested method, it should give the user options on how to install it, and not force them to do it your way.

## It's unit tested

If a project is unit tested it alwasys give me a ton more confidence in it. It's not something that I've been good at personally, and I want to learn a lot more about it. It doesn't really matter what testing framework is used and it's fine to mandate a certain framework for testing, and to require tests to be included in pull requests because that helps the quality of the code, and most users won't need to run the tests.

If you have unit tests, you'll need to include in the readme, a section about how to contribute, including how to run it locally, how to run the tests, how to make pull requests, and any code styles that you enforce.

## It's released with versioning

I don't really care what system of versioning it uses, even if it's [weird](http://sentimentalversioning.org/), although I like [semantic versioning](http://semver.org/).

## It's maintained by a company or the community (rather than a single individual)

If it's maintained by a company with people who are paid to maintain it, that's not necessarily a sure-fire sign that it's good, or actively maintained, but it probably doesn't hurt. Or if it's so popular that an entire community is working on it for free, that's great.

## It's cross-platform

This one isn't as big of a deal, but it really depends on what kind of project it is. If it's for the web, it should work on all modern browsers, and kudos if it has a graceful fallback for older browsers. If it's for Android, it should work on as many screen sizes and versions of Android as possible. If it's a command line utility, really I only care if it works on Mac OS X, but hopefully it will also work on Linux, and if it works on Windows, then that's a plus.

## It doesn't have a ton of dependencies

A certain number of dependencies are acceptable, but it should have as few dependencies as possible.

## The commit messages look good

If I open up the commit messages and it says stuff like `did some stuff`, or `best commit ever`, but they're just trying to funny, I'm out. That's just really unprofesional. The commit message should describe exactly what the commit does. Hopefully it's in the [imperative present tense](http://stackoverflow.com/questions/3580013/should-i-use-past-or-present-tense-in-git-commit-messages), but that's not a huge deal. If the commit message are multi-line messages, I'm even more impressed. Sometime really took their time to make it look nice.

## It's flexible

It's obvious when someone has written something just for themselves. A good open source project will be flexible enough for almost anyone to use for their unique situation, whether that means having a config file, setting flags when calling functions, letting them use their own templates, or css, or whatever the case may be. It should be flexible.

## Conclusion

I hope that helps. This list is by no means exhaustive or definitive. It's just my personal thought, which I hope resonate with some people. It's going to be my personal guide when making and using open source project. I hope to keep it up to date as I think of more things, and feel free to let me know what you look for, or what I left off the list that you think is important.
