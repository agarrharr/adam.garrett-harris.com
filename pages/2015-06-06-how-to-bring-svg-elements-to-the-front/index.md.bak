---
title: How to Bring svg Elements to the Front
tags:
- d3js
---

![svg circles](./svgCircles.png)

Often, with svg visualizations, I need to bring an element to the front. For example, if two elements overlap, then when I hover on one, I need to make sure it comes to the front so that it's visible. With svg, it uses [painter's algorithm](http://en.wikipedia.org/wiki/Painter's_algorithm) to determine which element is in front instead of using z-index. This means, that whichever elements come later in the dom, are on top of the others (as if they were painted later). So that means that all you need to do to bring an element to the front is to reorder the element in the dom to make it the last sibling node. So all you need to do is this:

```js
node.parentElement.appendChild(node);
```

Here is a [full example](http://bl.ocks.org/aharris88/cf29caf142c9592af424). It uses d3js, although you don't really need it. The core code (shown above) is vanilla JavaScript.

```html
<html>
  <head>
    <script src="http://d3js.org/d3.v3.min.js"></script>
  </head>
  <body>
    <svg height="200px" width="200px">
      <circle cx="100" cy="100" r="50" style="fill: #0091EA"></circle>
      <circle cx="150" cy="100" r="50" style="fill: #00C853"></circle>
    </svg>
    <script>
      d3.selectAll('circle').on('mouseenter', function() {
        this.parentElement.appendChild(this);
      });
    </script>
  </body>
</html>
```

Also, here is [another example](http://bl.ocks.org/aharris88/bd59ffb45f0635667749) that adds a bit of animation after it reorders the dom.

```html
<html>
  <head>
    <script src="http://d3js.org/d3.v3.min.js"></script>
  </head>
  <body>
    <svg height="500px" width="500px">
      <circle cx="100" cy="100" r="50" style="fill: #0091EA"></circle>
      <circle cx="150" cy="100" r="50" style="fill: #00C853"></circle>
    </svg>
    <script>
      d3.selectAll('circle').on('mouseenter', function() {
        if (this !== d3.select('circle:last-child').node()) {
          this.parentElement.appendChild(this);
          d3.select(this)
            .transition()
            .duration(200)
            .attr('r', 55)
            .transition()
            .ease('elastic')
            .attr('r', 50);
        }
      });
    </script>
  </body>
</html>
```
