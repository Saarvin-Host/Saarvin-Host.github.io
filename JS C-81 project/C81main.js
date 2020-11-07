canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(200, 250, 80, 0, 2*Math.PI);
ctx.stroke();

color = "black";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(400, 250, 80, 0, 2*Math.PI);
ctx.stroke();

color = "red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(600, 250, 80, 0, 2*Math.PI);
ctx.stroke();

color = "yellow";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(300, 330, 80, 0, 2*Math.PI);
ctx.stroke();

color = "green";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(500, 330, 80, 0, 2*Math.PI);
ctx.stroke();
