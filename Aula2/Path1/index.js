window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")

    canvas.height = 4000
    canvas.width = 2000

    //1
    context.fillStyle = "blue"
    context.fillRect(100, 100, 400, 200)

    context.strokeStyle = "lightgreen"
    context.strokeRect(200, 200, 400, 200)
    context.lineWidth = 5

    //2
    context.beginPath()
    context.moveTo(100, 600)
    context.lineTo(300, 600)
    context.lineTo(100, 800)
    context.lineTo(100, 600)
    context.fill()

    context.beginPath()
    context.moveTo(400, 650)
    context.lineTo(400, 850)
    context.lineTo(200, 850)
    context.lineTo(400, 650)
    context.stroke()


    //3
    context.beginPath()
    context.moveTo(100, 1000)
    context.lineTo(100, 1100)
    context.lineTo(200, 1000)
    context.lineTo(200, 1100)
    context.lineTo(300, 1000)
    context.lineTo(300, 1100)
    context.fill()

    //4
    context.beginPath()
    context.moveTo(100, 1300)
    context.lineTo(200, 1250)
    context.stroke()


    //5
    context.beginPath()
    context.arc(200, 1500, 100, 0, Math.PI * 2)
    context.fill()

    context.beginPath()
    context.arc(500, 1500, 100, 0, Math.PI)
    context.fill()

    context.beginPath()
    context.arc(800, 1500, 100, 0, Math.PI, true)
    context.fill()

    context.beginPath()
    context.arc(1100, 1500, 100, -Math.PI / 6, (4 * Math.PI) / 6, true)
    context.fill()

    context.beginPath()
    context.arc(1300, 1500, 100, -Math.PI / 6, (4 * Math.PI) / 6)
    context.fill()

    //6
    context.beginPath()
    context.arc(200, 2000, 100, 0, radianos(360))
    context.stroke()

    context.beginPath()
    context.arc(425, 2000, 100, 0, radianos(360))
    context.stroke()

    context.beginPath()
    context.arc(650, 2000, 100, 0, radianos(360))
    context.stroke()

    context.beginPath()
    context.arc(850, 2000, 100, 0, radianos(360))
    context.stroke()
}

function radianos(graus) {
    return (graus * Math.PI) / 180
}