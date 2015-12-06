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


HTML part:

{% highlight html %}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Viewport Size</title>
  <link rel="stylesheet" href="style.css">
</head>
<body onresize="dim()" onload="dim()">
  <div class="center">
    <span id="w"></span><span id="h"></span>
  </div>
  <script src="js.js"></script>
</body>
</html>
{% endhighlight %}

JS part:

{% highlight javascript %}
function dim(){
  var h = window.innerHeight;
  var w = window.innerWidth;
  document.getElementById('h').innerHTML = h;
  document.getElementById('w').innerHTML = w;
}
{% endhighlight %}

CSS part:

{% highlight css %}
@import url(http://fonts.googleapis.com/css?family=Merriweather:900);
* {
  font-family: 'Merriweather', Helvetica, Arial, sans-serif;
  font-size: 5vw;
  font-weight: bold;
    margin: 0;
}
div.center {
  background-color: #ddd;
  height: 100vh;
  width: 100vw;
  text-align: center;
  vertical-align: middle;
  line-height: 100vh;
}
div.center span:first-child:after {
  content: " x "
}
div.center span:last-child:after {
  content: " px"
}
{% endhighlight %}
