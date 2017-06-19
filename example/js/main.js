// 在此放置代码!
var canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

context.font = "38pt Arial";
context.fillStyle = "cornflowerblue";
context.strokeStyle = "blue";
context.fillText("hello, world", canvas.width / 2 - 150, canvas.height / 2 + 15);//填充颜色
context.strokeText("hello, world", canvas.width / 2 - 150, canvas.height / 2 + 15);//边缘描绘