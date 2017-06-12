---
title: How to Display Event Data With Jekyll
tags:
- jekyll
---

I recently added a list of upcoming events to a jekyll site, and wanted to document my method.

## Structure the Data

First, create a file called `_data/events.yml`, that looks something like this:


```bash
everyone:
  -
    date: 2015-05-29 18:30
    name: Something Fun
  -
    date: 2015-06-10
    name: Scrapbooking
  -
    date: 2015-06-14
    name: Whatever
coolKids:
  -
    date: 2015-05-30
    name: Game Night
    location:
    description: BYOG
    cost: Free
  -
    date: 2015-05-31
    end-date: 2015-06-01
    name: Skateboarding
    location:
    description:
    cost: Free
  -
    date: 2015-06-02
    name: Hang out
    location:
    description:
    cost: Free
```

There are 2 categories here, everyone, and coolKids, but you can name them whatever you want. Then, within each category, the events have different attributes (date, end-date, name, location, description, cost). You can put whatever you want here as well. It just depends on what info you need about the events and how you want to display it.

## Loop Through the Data

Then you can make a file called `_includes/events.hmtl` that looks like this to display them.


```html
<dl>
  {% for event in site.data.events[include.category] %}
    {% capture newMonth %}{{ event.date | date:"%B" }}{% endcapture %}
    {% if newMonth != oldMonth %}
      <dd>{{ newMonth }}</dd>
    {% endif %}
    <dt>
    <b>{{ event.date | date:"%-d" }}{% if event.end-date %}-{{ event.end-date | date:"%-d" }}{% endif %}</b>
    ({{ event.date | date:"%a" }}{% if event.end-date %}-{{ event.end-date | date:"%a" }}{% endif %})- {{ event.name }}
    {% if event.location %}- {{ event.location }}{% endif %}
    {% if event.cost %}- {{ event.cost }}{% endif %}
    {% if event.description %}- {{ event.description }}{% endif %}
    </dt>
    {% capture oldMonth %}{{ newMonth }}{% endcapture %}
  {% endfor %}
</dl>
```

## Display the Data

Then to use it, just call the include and pass in the category of events that you want displayed:

```bash
{% include events.html category="coolKids" %}
```

This will loop through the coolKids category and output html that looks like this:

```bash
<dl>
  <dd>May</dd>
  <dt>
    <b>30</b>(Sat)- Game Night- BYOG- Free
  </dt>
  <dt>
    <b>31-1</b>(Sun-Mon)- Skateboarding- Free
  </dt>
  <dd>June</dd>
  <dt>
    <b>2</b>(Tues)- Hang out- Free
  </dt>
</dl>
```

One of the nice things about this, is that it groups events together under the month. Also, it automatically figures out the days of the week, so that you don't accidentally get that wrong. And then you can reuse this include anywhere you want and with any category of event.

## Limitations

There are some limitations though. The events have to be in order for this to work properly. The include simply loops through the events in order. Another limitation is that you can only show events from a single category, although I'm sure you could modify it to work with multiple categories.

And finally, it does not automaticaly remove old events from the website. You will have to go in and manually remove them from the data after the event has expired.
