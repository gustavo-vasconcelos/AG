window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")

    canvas.height = 2000
    canvas.width = 2000
    addGrid(2000, 2000, 10, "black")

    let gradient = context.createRadialGradient(80, 80, 20, 120, 120, 110)

    gradient.addColorStop(0, "yellow")
    gradient.addColorStop(1, "red")
    context.fillStyle = gradient
    context.beginPath()
    context.arc(120, 120, 110, 0, 2 * Math.PI)
    context.fill()


    context.beginPath()
    context.moveTo(550, 350)
    context.lineTo(500, 500)
    context.lineTo(535, 500)
    context.lineTo(535, 700)
    context.lineTo(500, 800)
    context.lineTo(550, 750)
    context.lineTo(600, 800)
    context.lineTo(565, 700)
    context.lineTo(565, 500)
    context.lineTo(600, 500)


    let grad = context.createLinearGradient(550, 350, 550, 800)
    grad.addColorStop(0, 'red')
    grad.addColorStop(0.2, 'orange')
    grad.addColorStop(0.3, 'yellow')
    grad.addColorStop(0.6, 'green')
    grad.addColorStop(1, 'blue')
    context.fillStyle = grad
    context.shadowColor = 'rgb(0,0,255)';
    context.shadowBlur = 15;
    context.shadowOffsetX=10;
    context.shadowOffsetY=10;
    
    context.fill()

    context.shadowBlur = 0;
    context.shadowOffsetX=0;
    context.shadowOffsetY=0;

    context.fillStyle = 'yellow'
    context.fillRect(200, 1000, 200, 200)
    context.fillStyle = 'red'
    context.fillRect(200, 1200, 200, 200)
    context.fillStyle = 'blue'
    context.fillRect(400, 1200, 200, 200)
    context.fillStyle = 'green'
    context.fillRect(400, 1000, 200, 200)

    for (let i = 0; i < 7; i++) {
        context.beginPath()
        context.arc(400, 1200, 180 - (i * 25), 0, 2 * Math.PI)
        context.fillStyle = 'rgba(255, 255, 255, 0.2)'
        context.fill()
    }

    context.font = "bold 200px arial"
    context.fillStyle = "grey"
    context.shadowColor = 'grey';
    context.shadowOffsetX=10;
    context.shadowOffsetY=10;
    context.fillText("Toppen", 200, 1600, 1500);

    context.fillStyle = "grey"
    context.shadowColor = 'white';
    context.shadowOffsetX=5;
    context.shadowOffsetY=5;
    context.fillText("Toppen", 200, 1600, 1500);



}

function addGrid(canvasHeight, canvasWidth, delta, color) {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")

    let quantity = canvasWidth / delta
    context.beginPath()

    for (let i = 0; i < quantity * delta; i += delta) {
        context.strokeStyle = color
        context.moveTo(i, 0)
        context.lineTo(i, canvasHeight)

        context.moveTo(0, i)
        context.lineTo(canvasWidth, i)

        context.strokeText(i, canvasWidth - delta, i, 50)
        context.strokeText(i, i, canvasHeight, 50)
    }
    context.stroke()

}