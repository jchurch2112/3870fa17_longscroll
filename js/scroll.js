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
  //if (y < 320) {ball.style.left = y + "px";}
  //ball bounce on "ANIMATION" --end
  //if(y > 1360) {ball.style.left = 11 + "px";}
    //else{ball.style.right = y + "-px";}
  if (y > 40) {ball.style.webkitTransform = 'top:0px; bottom:30px;'}
  else{ball.style.webkitTransform = '39px';}


  //if (y > 1180){p1_2.style.webkitTransform = 'rotate(-45deg)';}
    //else {p1_2.style.webkitTransform = 'rotate(0deg)'}


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


};
