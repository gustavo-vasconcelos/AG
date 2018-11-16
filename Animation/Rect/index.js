"use strict"
let vLoss
window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000

    let timer, angle, v = 2, radius = 100, vLoss = 1, radiusLoss = 1
    let a = { x: canvas.width / 2, y: canvas.height / 2 }
    let b = { x: Math.random() * canvas.width, y: Math.random() * canvas.height }
    angle = Math.atan2(b.y - a.y, b.x - b.y)

    let vx = v * Math.cos(angle)
    let vy = v * Math.sin(angle)

    timer = window.setInterval(drawIt, 0.001)
    //window.requestAnimationFrame(drawIt)

    function drawIt() {
        context.fillStyle = "rgba(255,255,255,0.001)"
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.strokeStyle = "green"
        
        let color = {
            r: Math.random() * 255,
            g: Math.random() * 255,
            b: Math.random() * 255,
        }
        context.strokeStyle = `rgb(${color.r},${color.g},${color.b})`

        context.beginPath()
        context.arc(a.x, a.y, radius, 0, Math.PI * 2)
        context.stroke()

        a.x += vx
        a.y += vy

        //up
        if (a.y - radius <= 0) {
            vy = -(vy * vLoss)
            radius *= radiusLoss;
        }

        //down
        if (a.y + radius >= canvas.height) {
            vy = -(vy * vLoss)
            radius *= radiusLoss
        }

        //right
        if (a.x + radius >= canvas.width) {
            vx = -(vx * vLoss)
            radius *= radiusLoss
        }

        //left
        if (a.x - radius <= 0) {
            vx = -(vx * vLoss)
            radius *= radiusLoss
        }
        //window.requestAnimationFrame(drawIt)

        //console.log("x: " + a.x + ". y: " + a.y)
        //console.log("vx: " + vx + ". vy:" + vy)
    }
}
