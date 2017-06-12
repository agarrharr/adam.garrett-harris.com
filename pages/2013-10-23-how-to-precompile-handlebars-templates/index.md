---
title: How to Precompile Handlebars Templates
date: 2013-10-23
tags:
- Tutorial
---

First you need to install handlebars with node by running this command. If you don't have node, <a href="http://nodejs.org/" target="_blank"> go ahead and install it first</a>. It's really quick and painless.

```bash
npm -g install handlebars
```

Then put all of your handlebars templates inside `js/templates` with the extension handlebars. So for example a file named `booksList.handlebars` would be the `booksList` template. Inside these files you don't need the script tag that you would normally need if you included the template inside your html page. So instead of this:

```html
<script id="booksList" type="text/x-handlebars-template">
  <ul>
    {{#each books}}
      <li>{{title}}</li>
    {{/each}}
  </ul>
</script>
```

It would just look like this:

```html
<ul>
  {{#each books}}
    <li>{{title}}</li>
  {{/each}}
</ul>
```

Then with all of your templates in that folder, open up the command prompt, navigate to the folder right above the js folder. The reason you don't want to navigate into the js folder is because you're going to run the handlebars command, and if you're in the js folder, it will think you meant to run the javascript file. Then run the handlebars command which will take all of those templates and combine them into one file named `templates.js`. The `-m` option means that it will minify the file.

```bash
handlebars -m js/templates/ js/templates/templates.js
```

Then in your html, all you have to include is that one file plus handlebars (and you only need the runtime version):

```html
<script src="js/handlebars.runtime.js"></script>
<script src="js/templates/templates.js"></script>
```

And when you need to use a template in your javascript, it works the same way as before except that instead of having to compile your template like this:

```js
var source   = $("#booksList").html();
var template = Handlebars.compile(source);
```

You can now just use it like this:

```js
var template = Handlebars.templates['booksList'];
```
