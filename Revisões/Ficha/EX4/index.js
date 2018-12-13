let canvas, context, angle = 0

window.onload = () => {
    canvas = document.getElementById("myCanvas")
    context = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000
    context.translate(canvas.width / 2, canvas.height / 2)

    Animate()
}

function Animate() {
    // clear
    context.fillStyle = "rgba(255, 255, 255, 0.2)"
    context.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)

    // protão
    context.fillStyle = "teal"
    context.beginPath()
    context.arc(0, 0, 20, 0, 2 * Math.PI)
    context.fill()
    for (let i = 0; i < 2 * Math.PI; i += 2 * Math.PI / 6) {
        context.save()
        context.rotate(i)

        context.beginPath()
        context.ellipse(0, 0, 200, 100, 0, 0, 2 * Math.PI)
        context.stroke()


        let cX = 200 * Math.cos(angle)
        let cY = 100 * Math.sin(angle)
        context.beginPath()
        context.arc(cX, cY, 6, 0, 2 * Math.PI)
        context.fill()
        context.restore()
    }
    angle += 2 * Math.PI / 400
    window.requestAnimationFrame(Animate)

}

function randomBetweenInterval(min, max) {
    return Math.random() * (max - min + 1) + min
}

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180
}