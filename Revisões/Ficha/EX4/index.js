let canvas, context, angle = 50, closingMouth = true, openingMouth = false

window.onload = () => {
    canvas = document.getElementById("myCanvas")
    context = canvas.getContext("2d")
    canvas.height = 800
    canvas.width = 1000

    Animate()
}

function Animate() {
    // clear
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
    addGrid(100, "black", 0.2)

    context.fillStyle = "black"

    let radius = 100
    context.fillStyle = "yellow"
    context.beginPath()
    context.arc(canvas.width / 2, canvas.height / 2, radius, degreesToRadians(angle), degreesToRadians(360 - angle))
    context.lineTo(canvas.width / 2, canvas.height / 2)
    context.closePath()

    context.fill()
    context.moveTo(canvas.width / 2, canvas.height / 2)
    context.stroke()


    // olho
    context.beginPath()
    context.arc(canvas.width / 2, canvas.height / 2 - 50, 10, 0, 2 * Math.PI)
    context.fillStyle = "black"
    context.fill()

    if(closingMouth) {
        angle -= 1
    }

    if(openingMouth) {
        angle += 1
    }

    if(angle <= 0) {
        closingMouth = false
        openingMouth = true
    }

    if(angle >= 50) {
        openingMouth = false
        closingMouth = true
    }


    window.requestAnimationFrame(Animate)
}

function addGrid(delta, color, alpha) {
    let quantity = canvas.width > canvas.height ? canvas.width / delta : canvas.height / delta
    context.save()
    context.globalAlpha = alpha
    context.beginPath()
    for (let i = 0; i < quantity * delta; i += delta) {
        context.strokeStyle = color
        context.moveTo(i, 0)
        context.lineTo(i, canvas.height)

        context.moveTo(0, i)
        context.lineTo(canvas.width, i)

        context.strokeText(i, canvas.width - delta, i, 50)
        context.strokeText(i, i, canvas.height, 50)
    }
    context.stroke()
    context.restore()
}

function randomBetweenInterval(min, max) {
    return Math.random() * (max - min + 1) + min
}

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180
}