
window.onload = function () {
    let x = 0, leng = 400, angle = 0, amplitude = Math.PI / 4, frames = 0
    const canvas = document.getElementById("myCanvas")
    const ctx = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000

    let timeIntraFrame = 1000 / 60;
let circle = {
 x: 0, //position x
 y: 0, //position y
 radius: 0, //radius
 A: 200, //Amplitude
 T: 2000 //Period
};
let timer = null;
let frameCount = 0;
function Animate() {
 //erase with alpha to see the trail
 ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
 ctx.fillRect(0, 0, canvas.width, canvas.height);
 ctx.strokeStyle = "orange";
 ctx.beginPath();
 ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
 ctx.stroke();
 let t = frameCount * timeIntraFrame;
 //update according the law of motion
41 | 68
 circle.x = circle.A * Math.sin(2 * Math.PI / circle.T * t) +
canvas.width / 2;
 frameCount++;
}
circle.radius = 20;
circle.x = canvas.width / 2 ;
circle.y = canvas.height / 2;
timer = window.setInterval(Animate, timeIntraFrame);
}