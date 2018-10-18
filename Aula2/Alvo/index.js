window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")

    canvas.height = 1000
    canvas.width = 1000

    context.lineWidth = 50
    
    context.strokeStyle = "black"
    context.strokeRect(0, 0, 1000, 1000)
    context.strokeRect(200, 200, 600, 600)
    context.strokeRect(400, 400, 200, 200)
    
    context.strokeStyle = "red"
    context.strokeRect(100, 100, 800, 800)
    context.strokeRect(300, 300, 400, 400)
    context.strokeRect(500, 500, 1, 1)
}