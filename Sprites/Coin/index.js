let canvas, context, frame = 0, coin = 1, coinWidth = 100, coinHeight = 100

window.onload = () => {
    canvas = document.getElementById("myCanvas")
    context = canvas.getContext("2d")
    canvas.height = coinHeight
    canvas.width = coinWidth
    window.setInterval(animate, 1000 / 15)
}

function animate() {
    context.fillStyle = "rgb(255,255,255)"
    context.fillRect(0, 0, canvas.width, canvas.height)
    let image = new Image()
    image.src = "coin-sprite-animation.png"
    context.drawImage(image, coin * coinWidth, 0, coinWidth, coinHeight, 0, 0, coinWidth, coinHeight)
    coin++
    coin = coin % 10
}