
window.onload = function () {
    let x = 0, timer, frames = 0
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000

    //timer = window.setInterval(drawIt, 16.67)
    window.requestAnimationFrame(drawIt)

    function drawIt() {
        context.beginPath()
        
        context.moveTo(canvas.width / 2, canvas.height / 2)
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height
        context.lineTo(x, y)
        let r = Math.random() * 255
        let g = Math.random() * 255
        let b = Math.random() * 255
        let a = Math.random()
        context.strokeStyle = `rgb(${r},${g},${b},${a})`
        context.stroke()

        window.requestAnimationFrame(drawIt)
    }
}