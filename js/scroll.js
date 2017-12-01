var canvas = document.getElementById("canvas");
var ball = document.getElementById("ball");

window.onscroll = function(){

  var y = window.pageYOffset;

  console.log(y);



  ball.style.top = 12 + y * 1.0 + "px";
   ball.innerHTML = y + "px" + y * 0.97 + 12 + "px";
   //ball bounce on "ANIMATION"
  //if (y > 40) {ball.style.top = 12 + "px";}
  //if (y > 80) {ball. style.top = 12 + y + 1.1 + "px";}
  //if (y > 120) {ball.style.top = 12 + "px";}
  //if (y > 160) {ball. style.top = 12 + y * 1.0 + "px";}
  if (y < 320) {ball.style.left = y + "px";}
  if (y > 40) {ball.style.top = "24px";}
   if (y >100){ball.style.top = 12 + y * 1.0 + "px";}

  //ball bounce on "ANIMATION" --end
  if(y > 1360) {ball.style.left =  "1px";}

 if (y > 1700)  {ball.style.left = "320px";}
  if (y > 1960) {ball.style.left = "1px";}
  if (y > 2160)  {ball.style.left = "320px";}
  if(y > 2340) {ball.style.left = "1px";}
  if (y > 2560)  {ball.style.left = "320px";}
  //if (y > 695) {ball.style.top = 15 + y * 1.5 + "px";}
    //else{ball.style.right = y + "-px";}
  //if (y > 40) {ball.style.webkitTransform = 'top:0px; bottom:30px;'}
  //else{ball.style.webkitTransform = '39px';}

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
  //end of ball in tube
  //tube moves down
  if (y > 2805) {tube.style.top = 12 + y + px;}
  //end of tube movement


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







};
