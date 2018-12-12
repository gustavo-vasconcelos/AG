let canvas, context

window.onload = () => {
    canvas = document.getElementById("myCanvas")
    context = canvas.getContext("2d")
    canvas.height = 800
    canvas.width = 1000
    addGrid(100, "black", 0.2)
    context.font = "100px Exo"

    // exercício 1
    context.shadowColor = 'rgb(255,128,0)'
    context.textAlign = "center"
    context.fillStyle = "blue"
    context.fillText("Exercício 1", canvas.width / 2, 100)
    context.save()
    context.scale(1, -1)
    context.filter = "blur(4px)"
    context.fillText("Exercício 1", canvas.width / 2, -100 - 20)
    context.restore()

    // exercício 2
    context.save()
    context.lineWidth = 2
    let gradient = context.createLinearGradient(350, 0, 650, 0)
    gradient.addColorStop(1 / 7 * 1, "red")
    gradient.addColorStop(1 / 7 * 2, "yellow")
    gradient.addColorStop(1 / 7 * 3, "lime")
    gradient.addColorStop(1 / 7 * 4, "aqua")
    gradient.addColorStop(1 / 7 * 5, "blue")
    gradient.addColorStop(1 / 7 * 6, "fuchsia")
    gradient.addColorStop(1 / 7 * 7, "red")
    context.fillStyle = gradient
    context.fillText("Heart", canvas.width / 2, 350)
    context.strokeText("Heart", canvas.width / 2, 350)
    context.lineWidth = 1
    context.shadowColor = "black"
    for (let i = 0; i <= 4; i++) {
        context.shadowOffsetX = randomBetweenInterval(-10, 10)
        context.shadowOffsetY = randomBetweenInterval(-10, 10)
        context.strokeText("Heart", canvas.width / 2, 350)
    }
    context.restore()

    // exercício 3
    context.lineWidth = 3
    context.translate(canvas.width / 2 - 190, canvas.height / 2 - 100)
    context.beginPath()
    // cabeça
    context.arc(190, 195, 75, 0, 2 * Math.PI)
    context.fillStyle = "#A05A2C"
    context.fill()

    // olho direito
    context.beginPath()
    context.arc(215, 175, 20, 0, 2 * Math.PI)
    context.fillStyle = "white"
    context.fill()

    context.beginPath()
    context.arc(215, 175, 20, 0, 2 * Math.PI)
    context.fillStyle = "white"
    context.stroke()

    context.beginPath()
    context.arc(215, 175, 6, 0, 2 * Math.PI)
    context.fillStyle = "black"
    context.fill()

    // olho esquerdo
    context.beginPath()
    context.arc(165, 175, 20, 0, 2 * Math.PI)
    context.fillStyle = "white"
    context.fill()

    context.beginPath()
    context.arc(165, 175, 20, 0, 2 * Math.PI)
    context.fillStyle = "white"
    context.stroke()

    context.beginPath()
    context.arc(165, 175, 6, 0, 2 * Math.PI)
    context.fillStyle = "black"
    context.fill()

    // orelha esquerda
    context.beginPath()
    context.bezierCurveTo(123, 215, 165, 75, 87, 195)
    context.moveTo(123, 215)
    context.bezierCurveTo(123, 215, 75, 215, 87, 195)
    context.fillStyle = "#522F17"
    context.fill()

    context.beginPath()
    context.bezierCurveTo(123, 215, 165, 75, 87, 195)
    context.moveTo(123, 215)
    context.bezierCurveTo(123, 215, 75, 215, 87, 195)
    context.stroke()

    // orelha direita
    context.beginPath()
    context.bezierCurveTo(293, 205, 223, 75, 253, 215)
    context.moveTo(293, 205)
    context.bezierCurveTo(293, 205, 293, 215, 253, 215)
    context.fill()

    context.beginPath()
    context.bezierCurveTo(293, 205, 223, 75, 253, 215)
    context.moveTo(293, 205)
    context.bezierCurveTo(293, 205, 293, 215, 253, 215)
    context.stroke()

    // boca
    context.beginPath()
    context.arc(190, 225, 25, 0, Math.PI)
    context.stroke()


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