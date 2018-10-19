window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")

    canvas.height = 4000
    canvas.width = 2000

    const lineLength = 500
    const origin = { x: 900, y: 500 }

    for (let i = 0; i <= Math.PI * 2; i += Math.PI / 16) {
        context.beginPath()
        context.moveTo(origin.x, origin.y)
        context.lineTo(Math.cos(i) * lineLength + origin.x, Math.sin(i) * lineLength + origin.y)
        context.stroke()
    }
}

function radianos(graus) {
    return (graus * Math.PI) / 180
}