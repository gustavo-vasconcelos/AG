window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")

    canvas.height = 2000
    canvas.width = 2000

    //france
    context.fillStyle = "blue"
    context.fillRect(0, 0, 100, 250)

    context.fillStyle = "white"  
    context.fillRect(100, 0, 100, 250)

    context.fillStyle = "red"  
    context.fillRect(200, 0, 100, 250)

    //belgium
    context.fillStyle = "black"
    context.fillRect(0, 300, 100, 250)

    context.fillStyle = "yellow"  
    context.fillRect(100, 300, 100, 250)

    context.fillStyle = "red"  
    context.fillRect(200, 300, 100, 250)

    //belgium
    context.fillStyle = "black"
    context.fillRect(0, 300, 100, 250)

    context.fillStyle = "yellow"  
    context.fillRect(100, 300, 100, 250)

    context.fillStyle = "red"  
    context.fillRect(200, 300, 100, 250)

    //norway
    context.fillStyle = "red"
    context.fillRect(0, 600, 300, 250)

    context.fillStyle = "white"
    context.fillRect(0, 700, 300, 50)

    context.fillStyle = "white"
    context.fillRect(100, 600, 50, 300)

    context.fillStyle = "blue"
    context.fillRect(0, 715, 300, 20)

    context.fillStyle = "blue"
    context.fillRect(115, 600, 20, 250)
}