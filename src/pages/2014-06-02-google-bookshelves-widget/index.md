---
title: "Google Bookshelves Widget"
path: "/google-bookshelves-widget/"
date: 2014-06-02
tags:
- Portfolio
comments: true
---

I have previously made a [Google Bookshelves Wordpress plugin]({{site_url}}/another-free-wordpress-plugin/), but since I'm not using Wordpress anymore, I thought I would build basically the same thing in JavaScript. The [code of the old one](https://github.com/aharris88/google-bookshelves) is horrible and it basically just builds out the html inside the php. It doesn't use ajax, and it can only show up to 40 books.

So, this time it uses ajax and it loads your entire bookshelf (or up to the limit you specify) using multiple requests to Google if necessary. And it also uses Handlebars for the layouts, making it easy to create your own layout beyond the 3 that I provide by default (grid, column, and description).

[Check it out on GitHub](https://github.com/aharris88/google-bookshelves-widget)
