---
layout: post
title:  "Colour Shuffler"
date:   2016-12-12 14:00:00
label: Project
short-desc: Colour Shuffler.
img: colours.jpg
permalink: colour_shuffle
---

Colour shuffler

JS file content:
{% highlight javascript %}

function colourChanger(){
  var loc = document.getElementById('body');
  document.onkeydown = findAwesomeColors;

  function findAwesomeColors(e){
    if(e.keyCode === 32){
      var values = shuffle();
      colorRGB(values);
      colorHEX(values);
    };
  };

  function shuffle(){
    var colors = {
    first : Math.floor(Math.random()*255),
    second : Math.floor(Math.random()*255),
    third : Math.floor(Math.random()*255)
  };
    return(colors)
  }

  function colorRGB(values){
    var r = values.first.toString();
    var g = values.second.toString();
    var b = values.third.toString();
    loc.style.backgroundColor = ( "rgb(" + r + "," + g + "," + b + ")" );
    document.getElementById('rgb').innerHTML = ( "(" + r + "," + g + "," + b + ")" );
  }
  function colorHEX(values){
    var hex1 = values.first.toString(16);
    var hex2 = values.second.toString(16);
    var hex3 = values.third.toString(16);
    document.getElementById('hex').innerHTML = ("#" + hex1 + hex2 + hex3);
  }
}

{% endhighlight %}
