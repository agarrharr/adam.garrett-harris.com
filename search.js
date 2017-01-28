---
layout:
---

var docs = [
  {% for post in site.posts %}
    {% include post.json %},
  {% endfor %}
];
// init lunr
var idx = lunr(function () {
  this.field('title', 10);
  this.field('content');
});
// add each document to be index
for(var index in docs) {
  idx.add(docs[index]);
}

$(function() {
  $("#search button").click(function() {
    search();
  });
  $("#search input").keypress(function(e) {
    if(e.which == 13) {
      e.preventDefault();
      search();
    }
  });
});

function search() {
  var result = idx.search($("#search input").val());
  putResultsOnPage(getFullResults(result));
  // if(result && result.length > 0) {
  // } else {
  // }
}

function putResultsOnPage(results) {
  var html = '';

  $('#searchResults').text('');
  for(var i = 0; i < results.length; i += 1) {
    html += '<div><a href="' + results[i].id + '">' + results[i].title + '</a></div>';
  }
  if (html === '') {
    html = '<div>No results found.</div>';
  }
  $('#searchResults').append(html);
}

function getFullResults(shortResults) {
  var fullResults = [];
  for(var i = 0; i < docs.length; i += 1) {
    for(var j = 0; j < shortResults.length; j += 1) {
      if (docs[i].id === shortResults[j].ref) {
        fullResults.push(docs[i]);
      }
    }
  }
  return fullResults;
}
