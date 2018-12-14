let canvas, context, frame = 0, man = 6

let person = {
    x: 0,
    y: 0,
    vx: 0,
    v0: 10
}

let initialFrame = {
    x: 0,
    y: 301
}

let frameSize = {
    x: 104,
    y: 151
}

let keyPressed = {
    right: false,
    left: false
}

let lastKeyPressed = "right"
let image = new Image()
window.onload = () => {
    canvas = document.getElementById("myCanvas")
    context = canvas.getContext("2d")
    canvas.height = frameSize.y
    canvas.width = 500


    image.addEventListener('load', function() {
        window.setInterval(Animate, 1000 / 10)
        window.addEventListener("keydown", keyDown)
        window.addEventListener("keyup", keyUp)
    })
    image.src = "gb_walk.png"
}

function Animate() {
    context.fillStyle = "rgb(255,255,255)"
    context.fillRect(0, 0, canvas.width, canvas.height)

    if (!keyPressed.right && !keyPressed.left) {
        frame = 0
        person.vx = 0
        if(lastKeyPressed === "right") {
            context.drawImage(image, 0, frameSize.y * 2, frameSize.x, frameSize.y, person.x, 0, frameSize.x, frameSize.y)
        }
        if(lastKeyPressed === "left") {
            context.drawImage(image, frameSize.x, frameSize.y * 2, frameSize.x, frameSize.y, person.x, 0, frameSize.x, frameSize.y)
        }
    }

    if (keyPressed.right) {
        person.vx = person.v0
        context.drawImage(image, frame * frameSize.x, 0, frameSize.x, frameSize.y, person.x, 0, frameSize.x, frameSize.y)
        frame++
        frame = frame % man
        lastKeyPressed = "right"
    }

    if (keyPressed.left) {
        person.vx = -person.v0
        context.drawImage(image, frame * frameSize.x, frameSize.y, frameSize.x, frameSize.y, person.x, 0, frameSize.x, frameSize.y)
        frame++
        frame = frame % man
        lastKeyPressed = "left"
    }

    person.x += person.vx

}

function keyDown(e) {
    switch (e.keyCode) {
        case 39:
            keyPressed.right = true
            keyPressed.left = false
            break
        case 37:
            keyPressed.right = false
            keyPressed.left = true
            break
    }
}

function keyUp(e) {
    switch (e.keyCode) {
        case 39:
            keyPressed.right = false
            keyPressed.left = false
            break
        case 37:
            keyPressed.left = false
            keyPressed.right = false
            break
    }
}