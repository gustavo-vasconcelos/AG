
window.onload = function () {
    let x = 0, timer, frames = 0, angulo = 0
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000

    //timer = window.setInterval(drawIt, 500)
    window.requestAnimationFrame(drawIt)

    function drawIt() {
        angulo += 36
        context.save()
        let r = Math.random() * 255
        let g = Math.random() * 255
        let b = Math.random() * 255
        let a = Math.random()
        context.fillStyle = `rgb(${r},${g},${b},${a})`
        context.translate(canvas.width / 2, canvas.height / 2)
        context.rotate(angulo * Math.PI / 180)
        context.fillRect(0, 0, 200, 50)
        context.restore()
        window.requestAnimationFrame(drawIt)

    }
}