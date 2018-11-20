window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000

    let angle = 0, radius = 300, l = 20, timer, year = 0, day = 1

    //window.requestAnimationFrame(drawIt)

    timer = window.setInterval(drawIt, 16)

    function drawIt() {
        context.fillStyle = "rgb(255,255,255)"
        context.fillRect(0, 0, canvas.width, canvas.height)

        
        context.fillStyle = "black"
        context.font = "60px Georgia";
        context.textAlign = "center"
        context.fillText(`Year: ${year}. Day: ${day}`, canvas.width / 2, 100);

        //draw sun
        context.fillStyle = "rgb(255,210,0)"
        context.beginPath()
        context.arc(canvas.width / 2, canvas.height / 2, radius / 4, 0, 2 * Math.PI)
        context.shadowColor = 'rgb(255,210,0)'
        context.shadowBlur = 150
        context.fill()

        context.shadowColor = 'transparent'
        context.shadowBlur = 0

        //draw circle
        context.beginPath()
        context.ellipse(canvas.width / 2, canvas.height / 2, radius, radius / 2, 0, 0, 2 * Math.PI)
        context.stroke()

        let cx = (canvas.width / 2) + radius * Math.cos(angle)
        let cy = (canvas.height / 2) + radius / 2 * Math.sin(angle)
        context.fillStyle = "blue"
        context.beginPath()
        context.arc(cx, cy, l, 0, 2 * Math.PI)
        context.fill()



        angle += (2 * Math.PI) / 365
        day++

        if(day === 365) {
            day = 0
            year++
        }


        //window.requestAnimationFrame(drawIt)
        //console.log("x: " + a.x + ". y: " + a.y)
        //console.log("vx: " + vx + ". vy:" + vy)
    }
}
