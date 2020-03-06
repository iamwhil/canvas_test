
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// rectangle test
c.fillStyle = "rgba(255, 0, 0, 0.3)";
c.fillRect(100, 100, 200, 200);
c.fillRect(300, 600, 100, 100);

// line test

c.beginPath();
c.moveTo(50, 300);
c.lineTo(500, 100);
c.lineTo(500, 200); 
c.lineTo(75, 300);
c.strokeStyle = "#6a3"
c.stroke();

// arc 
//c.beginPath();
c.arc(300, 400, 50, -Math.PI * 0.5, Math.PI * 2, true);
c.strokeStyle = 'blue';
c.stroke();

// looping
// var j = 10;
// for(var i = 0; i < 10; i++){
//   c.beginPath();
//   c.arc( (window.innerWidth / j) * i, (window.innerHeight / j) * i, 50, -Math.PI * 0.5, Math.PI * 2, true);
//   c.strokeStyle = `rgba(${255*(i/j)}, ${255*(i/j)}, ${100*(i/j)}, ${1 * (i/j)})`;
//   c.stroke();
// }

var j = 10;
for(var i = 0; i < 1000; i++){
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  var r = Math.random() * 255;
  var g = Math.random() * 255;
  var b = Math.random() * 255;
  var a = Math.random() * 1.0;
  c.arc(x, y, 10, 0, Math.PI * 2, true);
  c.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
  c.stroke();
}
// var c = document.getElementById("testCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(100, 50, 50, 0, 2*Math.PI);
// ctx.stroke();