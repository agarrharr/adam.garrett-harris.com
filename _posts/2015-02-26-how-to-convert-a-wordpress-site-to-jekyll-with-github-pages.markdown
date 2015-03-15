---
layout: post
title: How to Convert a Wordpress Site to Jekyll with Github Pages
categories:
- jekyll
tags: [jekyll, wordpress, static sites, github pages]
type: post
published: true
comments: true
---

I recently converted a site from Wordpress to Gihub Pages. It's not a fancy site. It's just normal pages and posts with contact form, so I didn't need to use any custom jekyll plugins, so Github pages can just generate the site for me automatically as soon as I make commits. The site does host a podcast though, and it was pretty simple to have Jekyll generate that rss feed for me.

I did want to keep the site looking exactly the same, so that no one would see any difference when I switch it over, so I converted the wordpress theme to a jekyll theme.

## What is Jekyll & Github Pages

I'll leave it up to you to research [Jekyll](http://jekyllrb.com/) and [Github Pages](https://pages.github.com/), but if you aren't familiar with them. Jekyll is a way to convert markdown posts and pages into a static html site and Github Pages is a way to host a Jekyll site. It also generates the site on their servers as soon as you commit.

## Export from Wordpress

First you'll need to export from Wordpress. Go to Tools -> Export. Choose to export "All content" and then rename the downloaded file to `wordpress.xml`.

Now you'll need to run the jekyll [importer](http://import.jekyllrb.com/).

First you'll need to install the jekyll importer by running: `gem install jekyll-import` and then you'll probably need to install hpricot: `gem install hpricot`.

Then run the command: `ruby -rubygems -e 'require "jekyll-import"; JekyllImport::Importers::WordpressDotCom.run({ "source" => "wordpress.xml" })'`

You might wonder why I'm using the WordpressDotCom version instead of the self-hosted Wordpress importer. It's because the Wordpress version requires access to the database, whereas, with the Wordpress.com version, you can just export and run this locally on your computer without the database.

Then you'll end up with something like this:

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

For my example, I'm setting it up as a project page.

You can have github setup Github Pages for you automatically by going into the repository settings and clicking "Automatic page generator", but I would just do it [manually](https://help.github.com/articles/creating-project-pages-manually/).

So go ahead and clone the repo to your computer and switch to the `gh-pages` branch. We won't even be working in the `master` branch at all.

{% highlight bash %}
git clone git@github.com:your-username/your-repo.git
git checkout gh-pages
{% endhighlight %}

Create an index.html to get started and as soon as you commit, Github will create your site at `userame.github.io/project-name`.

Congratulations! You're using Jekyll and Github Pages. Static html sites are actually valid Jekyll sites. Next we'll learn how to run the site locally, use Jekyll templates, and import your posts from Wordpress.

## Install Jekyll and the Github Pages Gem

In order to test locally [in a way that's consistent with Github Pages](https://help.github.com/articles/using-jekyll-with-pages/) you'll want to install the Github Pages gem. First you'll need to have ruby, and then install bundler if you don't already have it.

{% highlight bash %}
gem install bundler
{% endhighlight %}

Then create a file called `Gemfile` with the following text in it `gem 'githubpages'`. Then run:

{% highlight bash %}
gem install github-pages
{% endhighlight %}

From now on, all you need to do to test your site locally is run:

{% highlight bash %}
bundle exec jekyll serve
{% endhighlight %}

Another reason it's good to run you site locally is so that you can spot build errors before pushing to Github. You can see the errors in the the terminal where your ran this command. It updates everytime you save a file.

## Setup Your Directory Structure

To use jekyll, you could just use static html, but Jekyll makes it super easy to use layouts and apply them on every page. First you'll need to create an `_layouts` directory, and inside of it create a `default.html`. Inside of this file, put your html. But replace the main content with `{% raw %}{{ content}}{% endraw %}`. This will tell Jekyll to replace that with your content for each page.

Then in index.html put this at the top of the file:

{% highlight html %}
---
layout: default
---
{% endhighlight %}

You'll also need a file called `_config.yml` and all you need in there right now is this:

{% highlight html %}
baseurl: http://username.github.io/project-name/
{% endhighlight %}

Then after that, you can put the main content of the page, The part that will replace the `{% raw %}{{ content}}{% endraw %}` part in the layout we just made.

Now you can bring in any css or javascript that your site will need. I Chose to put mine in a folder called assets.

## Import Wordpress Posts

To import your posts from Wordpress, all you need to do is move the files from the `_posts` directory of your wordpress export and move them into the `_posts` directory of your github Pages repo. You might need to remove some of the unecessary stuff from the yaml front-matter though. You can learn more about the front-matter and how it's used in jekyll [here](http://jekyllrb.com/docs/frontmatter/).

## Import Wordpress Pages

Then to import your pages from Wordpress, you'll need to move each page into the the [correct location](http://jekyllrb.com/docs/pages/) of where you want it in your site. For example if you have an about page, and you want the url to be `site.com/about/` then move the about page's html file to `about/index.html`.

## Clean Things up

At this point, things should be looking pretty good, but you may need to clean a few things up. Make sure all your images are in your new site, and remove any old references to your old url.

You can also use `{% raw %}{{ site.baseurl }}{% endraw%}` anywhere you need the base url, such as at the beginning of the paths for css, javascript, images, or links.

## List your posts on the homepage

If you want your homepage to actually list out your most recent posts then put something like this there instead:

{% highlight html %}
{% raw %}
{% for post in site.posts %}
	<article class="post">
		<header class="post-header">
			<span class="post-meta">
				<time datetime="{{post.date | date_to_xmlschema}}">
					{{post.date | date_to_long_string}}
				</time>
			</span>
			<h2 class="post-title">
				<a href="{{site.url}}{{post.url}}">{{post.title}}</a>
			</h2>
		</header>
		<section class="post-excerpt">
			<p>{{post.excerpt}}&hellip;</p>
		</section>
		<footer class="tags">
			<span class="post-meta">
				{% for category in post.categories %}
					{% if forloop.index > 1 %}, {% endif%}
					{{category}}
				{% endfor %}
			</span>
		</footer>
	</article>
{% endfor %}
{% endraw %}
{% endhighlight %}

## Pagination

And if you want some pagination at the end (a list of pages) then you can do something like this:

{% highlight html %}
{% raw %}
{% if paginator.total_pages > 1 %}
	<div class="text-center pageSelector">
		{% if paginator.previous_page %}
			<a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo; Prev</a>
		{% else %}
			<span>&laquo; Prev</span>
		{% endif %}

		{% for page in (1..paginator.total_pages) %}
			{% if page == paginator.page %}
				<em>{{ page }}</em>
			{% elsif page == 1 %}
				<a href="{{ '/' | prepend: site.baseurl | replace: '//', '/' }}">{{ page }}</a>
			{% else %}
				<a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
			{% endif %}
		{% endfor %}

		{% if paginator.next_page %}
			<a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Next &raquo;</a>
		{% else %}
			<span>Next &raquo;</span>
		{% endif %}
	</div>
{% endif %}
{% endraw %}
{% endhighlight %}

## RSS Feed and Podcasting

If you need to do something like create an rss feed for your blog or podcast, then just create a file called `feed.rss`, `feed.xml`, or whatever you want it to be and start the top of the file with:

{% highlight html %}
---
---
{% endhighlight %}

This is just empty front-matter, but it will tell Jekyll to process this page. Then you can put whatever code you need to generate your feed. Here is an [example blog rss feed](https://gist.github.com/aharris88/684eeffa6e9eb8e61086), and here is one for an [itunes podcast feed](https://gist.github.com/aharris88/9aaa60ee99e5af8b689d).

## 404 Page

Github Pages has a [great little feature](https://help.github.com/articles/custom-404-pages/) where if you have a 404.html or 404.md file, it will serve the page up if there is a 404 error.

## Custom Domain Name

You can use Github Pages as is, and the url will be `username.github.io/repo` or you can use a custom domain, and Github you can learn how to set that up [here](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/).

## Don't Forget About Email

If you set up a custom domain and you use email at that domain, then make sure you don't mess up your email. You'll need to set up an A record for mail.domain.com pointing to your IP address, and then change you mx record to point to mail.domain.com instead of domain.com.

## What about other Services

You might be wondering how you put a contact form on the page, or comments, or have event signups, or a calendar, or a newsletter, etc. So I put together [a list of services for static websites](https://github.com/aharris88/services-for-static-websites) on Github. I'll try to keep it up to date as I hear of new services.

## Learn More

Don't forget to check out the excellent documentation on [Jekyll's site](http://jekyllrb.com/), and on [Github Page's site](https://pages.github.com/). Let me know if you any questions or suggestions.
