window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")

    canvas.height = 1000
    canvas.width = 1000

    context.font = "bold 75px arial"
    context.fillStyle = "grey"
    context.textAlign = "center"
    context.fillText("Toppen", canvas.width / 2, canvas.height / 2, 200)

    context.save()
    context.scale(1, -1)
    context.fillText("Toppen", canvas.width / 2, -canvas.height / 2, 200)
    context.restore()

    context.save()
    context.scale(-1, 1)
    context.fillText("Toppen", -canvas.width / 2, canvas.height / 2, 200)
    context.restore()

    context.save()
    context.scale(-1, -1)
    context.fillText("Toppen", -canvas.width / 2, -canvas.height / 2, 200)
    context.restore()

}

function radianos(graus) {
    return (graus * Math.PI) / 180
}