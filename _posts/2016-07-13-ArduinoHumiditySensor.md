---
layout: post
title:  "ArduinoHumiditySensor"
date:   2016-07-13 10:00:00
label: Project
short-desc: Arduino plant humidity sensor with 3 LED's
img: water_droplet.png
permalink: ArduinoHumiditySensorv1
---


{% highlight c++ %}

//Humidity Sensor v.0.1

//Analog input pin
int wilgotnosc = A0;
//LED's output pins
int red_led = 13;
int green_led = 12;
int blue_led = 11;

//Variables
int wilgotnosc_wartosc;

void setup() {
//Serial monitor
Serial.begin(9600);
//Pins mode setup
pinMode (red_led, OUTPUT);
pinMode (green_led, OUTPUT);
pinMode (blue_led, OUTPUT);
digitalWrite (red_led, LOW);
digitalWrite (green_led, LOW);
digitalWrite (blue_led, LOW);
}
void loop(){
//Read humidity
wilgotnosc_wartosc=analogRead(wilgotnosc);
Serial.print("wartosc odczytu czujnika wilgotnosci: ");
Serial.println(wilgotnosc_wartosc);
//785 value neeed to be calibrated "by hand"
  if (wilgotnosc_wartosc < 785) {
   digitalWrite(red_led, HIGH);
   digitalWrite(green_led, LOW);
   digitalWrite(blue_led, LOW);
  }
//830 value neeed to be calibrated "by hand"
  else if (wilgotnosc_wartosc < 830){
  digitalWrite(green_led, HIGH);
  digitalWrite(red_led, LOW);
  digitalWrite(blue_led, LOW);
  }
//830 value neeed to be calibrated "by hand"
  else if (wilgotnosc_wartosc >= 830){
  digitalWrite(blue_led, HIGH);
  digitalWrite(red_led, LOW);
  digitalWrite(green_led, LOW);
  }
  delay(500);
}

{% endhighlight %}
