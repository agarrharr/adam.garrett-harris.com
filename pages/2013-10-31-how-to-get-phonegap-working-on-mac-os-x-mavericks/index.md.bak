---
title: How to Get Phonegap Working on Mac OS X Mavericks
tags:
- Tutorial
---

After I upgraded from Mountain Lion to Mavericks, all of a sudden, phonegap wasn't working anymore.

<img alt="Screenshot" src="./screenshot1.png" />

I noticed that the problem was that it couldn't find ant:

<img alt="Screenshot" src="./screenshot2.png" />

Ant has always come with Mac OS X, but something must have changed with the Mavericks update. So here's how I got things working again by installing ant with homebrew. If you don't already have homebrew, just install it with this command:

```bash
brew install wget
```

First run:

```bash
brew update
brew install ant
```

If you get this error:

```bash
Warning: No developer tools installed. You should install the Command Line Tools. Run xcode-select --install to install them.
```

Then just run this command:

```bash
xcode-select --install
```

And install the tool:

<img alt="Screenshot" src="./screenshot3.png" />

<img alt="Screenshot" src="./screenshot4.png" />

<img alt="Screenshot" src="./screenshot5.png" />

<img alt="Screenshot" src="./screenshot6.png" />

Then everything should work fine.
