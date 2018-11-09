
window.onload = function () {
    let x = 0, timer, frames = 0
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000

    //timer = window.setInterval(drawIt, 500)
    window.requestAnimationFrame(drawIt)

    function drawIt() {
        let r = Math.random() * 255
        let g = Math.random() * 255
        let b = Math.random() * 255
        let a = Math.random()
        context.fillStyle = `rgb(${r},${g},${b},${a})`
        context.fillRect(100, 0, 200, 50)
        context.translate(200, 50)
        context.rotate(36 * Math.PI / 180)

        window.requestAnimationFrame(drawIt)

    }
}