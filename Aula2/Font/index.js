window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")

    canvas.height = 600
    canvas.width = 600

    addGrid(25, "blue", "40px verdana")
}

function addGrid(delta, color, fontParams) {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")

    canvas.height = 600
    canvas.width = 600

    let quantity = canvas.width / delta
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

}