let canvas, context, channels = { r: true, g: true, b: true }

window.onload = () => {
    canvas = document.getElementById("myCanvas")
    context = canvas.getContext("2d")
    canvas.height = 810
    canvas.width = 885

    let image = new Image()
    image.src = "images/rgb.png"
    image.addEventListener("load", () => {
        context.drawImage(image, 0, 0)
    })

    // red
    document.getElementById("r").addEventListener("change", (e) => {
        if (e.target.checked) {
            channels.r = true
        } else {
            channels.r = false
        }
        showCanvasChannel()
    })

    // green
    document.getElementById("g").addEventListener("change", (e) => {
        if (e.target.checked) {
            channels.g = true
        } else {
            channels.g = false
        }
        showCanvasChannel()
    })

    // blue
    document.getElementById("b").addEventListener("change", (e) => {
        if (e.target.checked) {
            channels.b = true
        } else {
            channels.b = false
        }
        showCanvasChannel()
    })
}

function showCanvasChannel() {
    let image = new Image()
    image.src = "images/rgb.png"
    context.drawImage(image, 0, 0)
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height)
    let nPixels = imageData.width * imageData.height
    let channelValue = 0
    let copyImageData = imageData
    for (let pixel = 0; pixel < nPixels; pixel++) {
       
        switch (true) {
            case channels.r:
                channelValue = imageData.data[pixel * 4]
                imageData.data[pixel * 4 + 1] = channelValue
                imageData.data[pixel * 4 + 2] = channelValue
            case channels.g:
                channelValue = imageData.data[pixel * 4 + 1]
                imageData.data[pixel * 4] = channelValue
                imageData.data[pixel * 4 + 2] = channelValue
            case channels.b:
                channelValue = imageData.data[pixel * 4 + 2]
                imageData.data[pixel * 4] = channelValue
                imageData.data[pixel * 4 + 1] = channelValue

        }
        
    }
    context.putImageData(copyImageData, 0, 0)
}