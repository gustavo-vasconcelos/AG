
window.onload = function () {
    let x = 0, timer, frames = 0
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000

    //timer = window.setInterval(drawIt, 16.67)
    window.requestAnimationFrame(drawIt)

    function drawIt() {
        context.fillStyle = "rgba(255,255,255,0.02)"
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.strokeStyle = "red"
        context.strokeRect(x, 50, 50, 50)
        x += 10
        /*if (frames < 10) {
            window.requestAnimationFrame(drawIt)
            frames++
            console.log(frames)
        }*/

        
        if(x + 50 <= canvas.width ) {
            window.requestAnimationFrame(drawIt)
            frames++
            console.log(frames)
        }


    }
}