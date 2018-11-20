window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000

    let angle = -Math.PI * 85 / 180

    let circle = {
        radius: 50,
        x: 50,
        y: 1000 - 50,
        a: 0.9,
        v: 30,
        vx: 0,
        vy: 0
    }

    circle.vx = circle.v * Math.cos(angle);
    circle.vy = circle.v * Math.sin(angle);
    //window.requestAnimationFrame(drawIt)

    timer = window.setInterval(drawIt, 16)

    function drawIt() {
        context.fillStyle = "rgba(255,255,255, 0.009)"
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.strokeStyle = "green"
        context.beginPath()
        context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI)
        context.stroke()

        circle.vy += circle.a
        circle.x += circle.vx
        circle.y += circle.vy

        if(circle.y + circle.radius >= canvas.height) {
            circle.vy = -circle.vy
            circle.y = canvas.height - circle.radius
        }

        if(circle.x + circle.radius >= canvas.width) {
            circle.vx = -circle.vx
        }

        if(circle.x - circle.radius <= 0) {
            circle.vx = -circle.vx
        }

        if(circle.y - circle.radius <= 0) {
            circle.vy = -circle.vy
        }

        console.log(`vx: ${circle.vx}, vy: ${circle.vy}`)

        //window.requestAnimationFrame(drawIt)
        //console.log("x: " + a.x + ". y: " + a.y)
        //console.log("vx: " + vx + ". vy:" + vy)
    }
}
