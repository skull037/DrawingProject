var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');


function drawRectangle(color, xCoord, yCoord,xWidth,yWidth) {
  canvas.fillStyle = color;
  canvas.fillRect(xCoord, yCoord, xWidth, yWidth);
}
function drawTriangle(color,firstxCoord,firstyCoord,secondxCoord,secondyCoord,thirdxCoord,thirdyCoord){
  canvas.beginPath();
canvas.moveTo(firstxCoord,firstyCoord);
canvas.lineTo(secondxCoord,secondyCoord);
canvas.lineTo(thirdxCoord,thirdyCoord);
  canvas.fillStyle = color;
canvas.fill();
}
function drawCircle(color,x, y, radius, startAngle, endAngle){
  canvas.beginPath();
canvas.arc(x, y, radius, startAngle, endAngle);
canvas.stroke();
canvas.fillStyle = color;
canvas.fill();

}
//background
drawCircle("#fff", 650, 25, 50, 0,2*Math.PI);
drawCircle("#fff", 675, 25, 5, 0,2*Math.PI);
//city
drawRectangle("#233", 600,100,100,600);


drawRectangle("gray", 433, 300, 100, 700);
drawTriangle("gray", 533, 300,433,300,533,200);

drawTriangle("#555", 200, 300,200,400,300,400);
drawTriangle("#555", 200, 300,200,200,300,200);
drawRectangle("#555", 150, 200, 50, 700);
drawRectangle("#555", 200, 400, 100, 400);
//foreground
drawRectangle("green", 0,575,25000,100);
