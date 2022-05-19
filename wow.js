var canvas = document.getElementById("plzwork");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var incrementor = 5;

var name = prompt("what is your name?");
var answer = "Welcome " + name;

function Square() {
  ctx.fillStyle = "#FDE2B1";
  ctx.fillRect(x, 10, 100, 100);

  ctx.fillStyle = "#F8B2A1";
  ctx.fillRect(0, y, 100, 100);

  ctx.fillStyle = "#C4889F";
  ctx.fillRect(x, y, 100, 100);

  ctx.fillStyle = "#42373D";
  ctx.fillRect(300, y, 100, 100);

  ctx.fillStyle = "#C6C4E9";
  ctx.fillRect(700, y, 100, 100);

  ctx.fillStyle = "#F9F28A";
  ctx.fillRect(550, y, 100, 100);

  ctx.fillStyle = "#9A7EA6";
  ctx.fillRect(x, 300, 100, 100);

  ctx.fillStyle = "#E1A3AA";
  ctx.fillRect(x, 500, 100, 100);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "50px Arial";
  ctx.fillStyle = "pink";
  ctx.fillText("hello!", 500, y);
  ctx.fillText("hello!", 750, y);
  ctx.fillText("hello!", 250, y);
  ctx.fillText("hello!", 0, y);

  ctx.font = "80px Arial";
  ctx.fillStyle = "red";
  let answer = "Welcome " + name + "!";
  ctx.fillText(answer, 230, 300);

  Square();
  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;
}

setInterval(drawBoxxy, 10);
