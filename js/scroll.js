var canvas = document.getElementById("canvas");
var ball = document.getElementById("ball");
function myFunction() {
var y = document.getElementById("pin").loop;}

window.onscroll = function(){

  var y = window.pageYOffset;

  console.log(y);



  ball.style.top = 12 + y * 1.0 + "px";
   ball.innerHTML = y + "px" + y * 0.97 + 12 + "px";
   //ball bounce on "ANIMATION"
  
  //if (y < 320) {ball.style.left = y + "px";}
  if (y > 40) {ball.style.top = "24px";}
   if (y >100){ball.style.top = 12 + y * 1.0 + "px";}
   if (y > 133) {ball.style.top = "120px";}
   if (y >185){ball.style.top = 12 + y * 1.0 + "px";}
   if (y >213){ball.style.top = "200px";}
   if (y >305){ball.style.top = 12 + y * 1.0 + "px";}
   
   if (y > 0){ball.style.left = "30px";}
   if (y > 80) {ball.style.left = "110px";}
   if (y > 160) {ball.style.left = "190px";}
   if (y > 300) {ball.style.left = "305px";}

  //ball bounce on "ANIMATION" --end
  if(y > 1360) {ball.style.left =  "1px";}

 //if (y > 1700)  {ball.style.left = "320px";}
  //if (y > 1960) {ball.style.left = "1px";}
  //if (y > 2160)  {ball.style.left = "320px";}
  //if(y > 2340) {ball.style.left = "1px";}
  //if (y > 2560)  {ball.style.left = "320px";}


  //for ball rolling off of rotating "animations" & pinball
  if (y > 1240) {ball.style.left = "250px";}
  if (y > 1280) {ball.style.left = "200px";}
  if (y > 1320) {ball.style.left = "150px";}
  if (y > 1360) {ball.style.left = "100px";}
  if (y > 1400) {ball.style.left = "90px";}
  if (y > 1500) {ball.style.left = "150px";}
  if (y > 1585) {ball.style.left = "180px";}
  if (y > 1600) {ball.style.left = "200px";}
  if (y > 1640) {ball.style.left = "250px";}
  if (y > 1740) {ball.style.left = "200px";}
  if (y > 1780) {ball.style.left = "150px";}
  if (y > 1880) {ball.style.left = "100px";}
  if (y > 1940) {ball.style.left = "150px";}
  if (y > 1980) {ball.style.left = "200px";}
  if (y > 2040) {ball.style.left = "250px";}
  if (y > 2120) {ball.style.left = "200px";}
  if (y > 2160) {ball.style.left = "180px";}
  if (y > 2220) {ball.style.left = "150px";}
  if (y > 2280) {ball.style.left = "120px";}
  if (y > 3359) {ball.style.left = "170px";}
  if (y > 2300) {ball.style.left = "100px";}
  if (y > 2441) {ball.style.left = "150px";}
  if (y > 2472) {ball.style.left = "200px";}
  if (y > 2561) {ball.style.left = "250px";}

  if (y > 990){p1_2.style.webkitTransform = 'rotate(-45deg)';}
    else {p1_2.style.webkitTransform = 'rotate(0deg)';}
  //end of rotate animations and pinball
  //this is the part that goes in the tube
  if (y > 2610) {ball.style.left = "200px";}
  if (y > 2674) {ball.style.left = "150px";}
  if (y > 2722) {ball.style.left = "100px";}
  if (y > 2802) {ball.style.left = "80px";}
            //words with tube
               if (y > 2700) {p2.style.top = 780 + y / 1.3 + "px";} else {p2.style.top = "2820px";}
            //end of words with tube
  //end of ball in tube
  //tube moves down
  //if (y > 3100) {tube.style.bottom = y * 1.1 + "3100px";}
  if (y > 2700) {tube.style.top = 550 + y / 1.3 + "px";} else { tube.style.top = "2600px";}
  //if (y > 4900) {tube.style.top = 500 + y / 1.5 + "px";}
  //if (y > 3110) {tube.style.top = 12 + y * 1.1 + "px";}
   //else {tube.style.top = 

  //end of tube movement
  //ball in tube
  if (y > 2752) {ball.style.left = "150px";}
  if (y > 4452) {ball.style.left = "100px";}

  //end ball in tube


//animation for ANIMATION header
  if (y > 35) {header.style.top = 12 + y * 1.0 + "px";}
  if (y > 30) {header2.style.top = 12 + y * 1.0 + "px";}
  // {header.style.top = 12 + y * 1.0 + "px";}
  //header.innerHTML =  y + "px" + y * 0.97 + 12 + "px";
if (y > 305) {header.style.top = 12 + y * 0.8 + "px";}
if (y > 304) {header2.style.top = -12 + y * 1.1 + "px";}
//if (y > 400) {header2.style.top = -12 + y * 1.6 + "px";}

if (y > 1000) {header2.style.top = -12 + y * 1.0 + "px";}
  //get rid of color (below) when animation is corrected//
  if (y > 1000) {header2.style.color = "skyblue";}
  else {header2.style.color = "black";}

  //for bumper spring transitions
if (y > 1481) {bumper1.style.webkitTransform = 'scale(1.5,1.5)';}
  else {bumper1.style.webkitTransform = 'scale(1,1)';}
  if (y > 1545){bumper1.style.webkitTransform = 'scale(1,1)';}

if (y > 1713) {bumper2.style.webkitTransform = 'scale(1.5,1.5)';}
  else {bumper2.style.webkitTransform = 'scale(1,1)';}
  if (y > 1769){bumper2.style.webkitTransform = 'scale(1,1)';}

  if (y > 1913) {bumper3.style.webkitTransform = 'scale(1.5,1.5)';}
    else {bumper3.style.webkitTransform = 'scale(1,1)';}
    if (y > 1953){bumper3.style.webkitTransform = 'scale(1,1)';}

    if (y > 2114) {bumper4.style.webkitTransform = 'scale(1.5,1.5)';}
      else {bumper4.style.webkitTransform = 'scale(1,1)';}
      if (y > 2138){bumper4.style.webkitTransform = 'scale(1,1)';}

      if (y > 2338) {bumper5.style.webkitTransform = 'scale(1.5,1.5)';}
        else {bumper5.style.webkitTransform = 'scale(1,1)';}
        if (y > 2450){bumper5.style.webkitTransform = 'scale(1,1)';}

        if (y > 2586) {bumper6.style.webkitTransform = 'scale(2,2)';}
          else {bumper6.style.webkitTransform = 'scale(1,1)';}
          if (y > 2674){bumper6.style.webkitTransform = 'scale(1,1)';}
//end of bumper spring transitions

//bumper sfx
if (y > 1470) {pin1.play();}
if (y > 1710) {pin1.pause();}

if (y > 1710) {pin2.play();}
if (y > 1916) {pin2.pause();}

if (y > 1916) {pin3.play();}
if (y > 2108) {pin3.pause();}

if (y > 2108) {pin4.play();}
if (y > 2329) {pin4.pause();}

if (y > 2329) {pin5.play();}
if (y > 2594) {pin5.pause();}

if (y > 2594) {pin1.play();}
if (y > 2816) {pin1.pause();}

 
         

//end bumper sfx
//paper tearing
if (y > 5980) {lp.style.webkitTransform = 'translateX(-30px)';} else {lp.style.webkitTransform = 'translate(0px)';}
if (y > 5980) {rp.style.webkitTransform = 'translateX(25px)';} else {rp.style.webkitTransform = 'translate(0px)';}
if (y > 6000) {lp.style.webkitTransform = 'translateX(-50px)';} else {lp.style.webkitTransform = 'translate(0px)';}
if (y > 6000) {rp.style.webkitTransform = 'translateX(45px)';} else {lp.style.webkitTransform = 'translate(0px)';}
//end of paper tearing

//for 3 pages appearing
if (y > 6000) {page1.style.webkitTransform = 'translateX(-30px)';}
if (y > 6000) {page1.style.opacity = '100';}
if (y > 6000) {page2.style.webkitTransform = 'translateX(-30px)';}
if (y > 6000) {page2.style.opacity = '100';}
if (y > 6000) {page3.style.webkitTransform = 'translateX(-30px)';}
if (y > 6000) {page3.style.opacity = '100';}

if (y > 6000) {p3.style.webkitTransform = 'translateY(-20px)';}
if(y > 6000) {p3.style.color = 'black';}
if(y > 6000) {p3.style.opacity = '100';}


//end of 3 pages appearing

//going down the slide
if (y > 6700){ball.style.left = '150px';} 
if (y > 6740){ball.style.left = '200px';}
if (y > 6840){ball.style.left = '250px';}
if (y > 6940){ball.style.left = '300px';}

//end of going down the slide

//dollar sign away
if (y > 6999){dollar.style.webkitTransform = 'rotate(120deg)';} else {dollar.style.webkitTransform = 'rotate(0deg)';}
if (y > 6999) {dollar.style.opacity = '0';} else {dollar.style.opacity = '100';}
if (y > 6999){dollar.style.webkitTransform = 'translateX(150px)';}
 

//end of dollar sign away
//cpu turns on
if (y > 7300){p5.style.opacity = '100';} else {p5.style.opacity = '0';}
//end of cpu turns on

//text from bumpers
   if (y > 1454) {b1.style.webkitTransform = 'translateY(100px)';}
   if (y > 1727) {b2.style.webkitTransform = 'translateY(100px)';}
   if (y > 1909) {b3.style.webkitTransform = 'translateY(100px)';}
   if (y > 2090) {b4.style.webkitTransform = 'translateY(100px)';}
   if (y > 2300) {b5.style.webkitTransform = 'translateY(100px)';}
   
   //this half is for opacity
   if (y > 1454) {b1.style.opacity = '100';}
   if (y > 1727) {b2.style.opacity = '100';}
   if (y > 1909) {b3.style.opacity = '100';}
   if (y > 2090) {b4.style.opacity = '100';}
   if (y > 2300) {b5.style.opacity = '100';}
//end of text from bumpers





};
