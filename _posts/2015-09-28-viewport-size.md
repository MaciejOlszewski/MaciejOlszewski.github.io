---
layout: post
title:  "Viewport size"
date:   2015-08-23 20:00:00
label: Project
short-desc: Simple viewport size presentation page
img: viewport-size.jpg
permalink: ViewportSize
---
Extremely simple viewport size presentation script that outputs your viewport size to screen.

{% highlight javascript %}
function dim(){
  var h = window.innerHeight;
  var w = window.innerWidth;
  document.getElementById('h').innerHTML = h;
  document.getElementById('w').innerHTML = w;
}
{% endhighlight %}
