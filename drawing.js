var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');


function drawRectangle(color, xCoord, yCoord,xWidth,yWidth) {
  canvas.fillStyle = color;
  canvas.fillRect(xCoord, yCoord, xWidth, yWidth);
    canvas.stroke();
}
function drawTriangle(color,firstxCoord,firstyCoord,secondxCoord,secondyCoord,thirdxCoord,thirdyCoord){
  canvas.beginPath();
canvas.moveTo(firstxCoord,firstyCoord);
canvas.lineTo(secondxCoord,secondyCoord);
canvas.lineTo(thirdxCoord,thirdyCoord);
  canvas.fillStyle = color;
canvas.fill();
canvas.stroke();
}
function drawCircle(color,x, y, radius, startAngle, endAngle){
  canvas.beginPath();
canvas.arc(x, y, radius, startAngle, endAngle);
canvas.stroke();
canvas.fillStyle = color;
canvas.fill();

}
//21
//background
drawCircle("#fff", 650, 25, 50, 0,2*Math.PI);
drawCircle("#eee", 675, 25, 5, 0,2*Math.PI);

//background hills
drawCircle("#090", 1300, 600, 300, 0,2*Math.PI);
drawCircle("#090", 1000, 600, 250, 0,2*Math.PI);
drawCircle("#090", 1300, 600, 150, 0,2*Math.PI);

drawCircle("#090", 100, 600, 250, 0,2*Math.PI);
drawCircle("#090", 0, 600, 150, 0,2*Math.PI);
drawCircle("#090", 100, 600, 50, 0,2*Math.PI);
//city
drawRectangle("#233", 600,100,100,600);

drawRectangle("gray", 433, 300, 100, 700);
drawTriangle("gray", 533, 300,433,300,533,200);

drawTriangle("#555", 200, 300,200,400,300,400);
drawTriangle("#555", 200, 300,200,200,300,200);
drawTriangle("#555", 150, 200,300,100,300,200);
drawRectangle("#555", 150, 200, 50, 700);
drawRectangle("#555", 200, 400, 100, 400);

drawTriangle("#aaa", 800, 600,900,500,1000,600);
drawTriangle("gray", 800, 600,1000,500,1000,600);
drawTriangle("gray", 800, 600,800,500,1000,600);

drawRectangle("#gray", 1100,300,100,600);

//foreground
drawRectangle("green", 0,575,25000,100);
