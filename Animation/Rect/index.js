"use strict"
let vLoss
window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000

    let timer, angle, v = 20, radius = 50
    vLoss = 2
    let a = { x: canvas.width / 2, y: canvas.height / 2 }
    let b = { x: Math.random() * canvas.width, y: Math.random() * canvas.height }
    //angle = Math.atan2(b.y - a.y, b.x - b.y);

    let teta = Math.random() * 2 * Math.PI;
    angle = teta
    let vx = v * Math.cos(angle)
    let vy = v * Math.sin(angle)

    timer = window.setInterval(drawIt, 10)
    //window.requestAnimationFrame(drawIt)

    function drawIt() {
        context.fillStyle = "rgba(255,255,255,0.001)"
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.strokeStyle = "red"
        

        context.beginPath()
        context.arc(a.x, a.y, radius, 0, Math.PI * 2)
        context.stroke()


        a.x += vx
        a.y += vy

        //up
        if (a.y - radius <= 0) {
            vy = -vy
        }

        //down
        if (a.y + radius >= canvas.height) {
            vy = -vy
        }

        //right
        if (a.x + radius >= canvas.width) {
            vx = -vx
        }

        //left
        if (a.x - radius <= 0) {
            vx = -vx
        }

        //console.log("x: " + a.x + ". y: " + a.y)
        console.log("vx: " + vx + ". vy:" + vy)
    }
}

function reduce(value) {
    if(value < 0) {
        return value + vLoss
    } else {
        return value - vLoss
    }
}