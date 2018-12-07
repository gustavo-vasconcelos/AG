let canvas, context, frame = 0

window.onload = () => {
    canvas = document.getElementById("myCanvas")
    context = canvas.getContext("2d")
    canvas.height = 810
    canvas.width = 885
    window.setInterval(animate, 1000 / 15)
}

function animate() {
    context.fillStyle = "rgb(255,255,255)"
    context.fillRect(0, 0, canvas.width, canvas.height)
    let coinWidth = 100
    let image = new Image()
    image.src = "coin-sprite-animation.png"
    context.drawImage(image, coinWidth * frame, 0, coinWidth, 200, 0, 0, coinWidth, 100)
    frame++
    frame = frame % 60;
}