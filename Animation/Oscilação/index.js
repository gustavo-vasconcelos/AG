
window.onload = function () {
    let x = 0, timer, leng = 400, angle = 0, amplitude = Math.PI / 4, frames = 0
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000

    timer = window.setInterval(drawIt, 1000 / 60)
    //window.requestAnimationFrame(drawIt)
    context.translate(canvas.width / 2, 50)

    function drawIt() {
        frames++
        context.fillStyle = "rgba(255,255,255, 0.2)"
        context.fillRect(-canvas.width / 2, -50, canvas.width, canvas.height)

        context.fillStyle = "#888"
        context.beginPath()
        context.arc(0, 0, 25, 0, 2 * Math.PI)
        context.fill()

        context.fillStyle = "black"
        context.beginPath()
        context.arc(0, 0, 20, 0, 2 * Math.PI)
        context.fill()

        context.save()
        context.rotate(angle)
        context.fillRect(-10, 0, 20, leng)

        context.fillStyle = "#555"
        context.beginPath()
        context.arc(0, leng, 50, 0, 2 * Math.PI)
        context.fill()

        context.restore()

        let t = frames * 1000 / 60
        angle = amplitude * Math.sin(((2 * Math.PI) / 4000) * t)
        if(frames % 60 === 0) {
            console.log("Frames: " + frames + ". " + t / 1000 + "s")
        }
    }
}