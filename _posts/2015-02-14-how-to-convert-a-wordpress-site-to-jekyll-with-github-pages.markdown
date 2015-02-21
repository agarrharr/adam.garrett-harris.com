---
layout: post
title: How to Convert a Wordpress Site to Jekyll with Github Pages
categories:
- jekyll
tags: [jekyll, wordpress, static sites, github pages]
type: post
published: false
comments: true
---

In this post I'm going to talk about how to convert a wordpress site over from wordpress to jekyll and host it on Github pages. I recently converted a site from Wordpress to Gihub Pages. It's not a fancy site. It's just normal pages and posts with contact form, so I didn't need to use any custom jekyll plugins, so Github pages can just generate the site for me automatically as soon as I make commits. The site does host a podcast though, but I'll leave that for another post.

I will however want to keep the site looking exactly the same, so I will convert the theme to a jekyll theme.

## What is Jekyll & Github Pages

I'll leave it up to you to research [Jekyll](http://jekyllrb.com/) and [Github Pages](https://pages.github.com/), but if you aren't familiar with them. Jekyll is a way to convert markdown posts and pages into a static html site and Github Pages is a way to host a Jekyll site. It also generates the site on their servers as soon as you commit.

## Export from Wordpress

First you'll need to export from Wordpress. Go to Tools -> Export. Choose to export "All content" and then rename the downloaded file to `wordpress.xml`.

Now you'll need to run the jekyll [importer](http://import.jekyllrb.com/).

First you'll need to install the jekyll importer by running: `gem install jekyll-import` and then you'll probably need to install hpricot: `gem install hpricot`.

Then run the command: `ruby -rubygems -e 'require "jekyll-import"; JekyllImport::Importers::WordpressDotCom.run({ "source" => "wordpress.xml" })'`

You might wonder why I'm using the WordpressDotCom version instead of the self-hosted Wordpress importer. It's because the Wordpress version requires acces to the database, whereas, with the Wordpress.com version, you can just export and run this locally on you computer without the database.

Then you'll end up with something like this in your current directory:

* _attachments
* _audio-itemss
* _event-itemss
* _nav_menu_items
* _nf_subs
* _optionsframeworks
* _pages
* _posts
* _slide-itemss
* assets
* wordpress.xml

Most of this you won't need and don't worry if you have different folders than I do. The important ones are `_pages` and `_posts`. You might also think that `assets` would be handy because it has your images in it, but I'll get to why you might not want to use those later.

## Setup your Github Repo

Now you have to decide if you want to setup this up as user, organization, or project pages. I would suggest using a user if the site is about yourself, an orginization page if it's about an organization, or a project for anything else. But if you don't want to set up an organization on Github, then it's perfectly fine to set it up as a project page. [This guide](https://help.github.com/articles/user-organization-and-project-pages/) explains the difference.

For my example, I'm setting it up as a project page under an organization.

https://help.github.com/articles/creating-project-pages-manually/

So go ahead and clone the repo to your computer and switch to the `gh-pages` branch. We won't even be working in the `master` branch at all.

{% highlight bash %}
git clone git@github.com:your-username/your-repo.git
git checkout gh-pages
{% endhighlight %}

## Setup Your Directory Structure

## Install Jekyll and the Github Pages Gem

## Podcasting

## 404 Page

Github Pages has a [great little feature](https://help.github.com/articles/custom-404-pages/) where if you have a 404.html or 404.md file, it will serve the page up if there is a 404 error.

## Custom Domain Name

You can use Github Pages as is, and the url will be `username.github.io/repo` or you can use a custom domain, and Github you can learn how to set that up [here](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/).

## Don't Forget About Email

If you set up a custom domain and you use email at that domain, then make sure you don't mess up your email. You'll need to set up an A record for mail.domain.com pointing to your IP address, and then change you mx record to point to mail.domain.com instead of domain.com.
