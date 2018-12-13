let canvas, context, angle = 0, spawn = false, mouseX, mouseY, particles = []

class Particle {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.radius = randomBetweenInterval(2, 20)
        this.a = 0.05
        this.vx = randomBetweenInterval(-2, 2)
        this.vy = randomBetweenInterval(0, 2)
        this.color = "rgb(200, 200, 255)"
        this.alpha = 1
        this.active = true
    }

    draw() {
        context.save()

        context.globalAlpha = this.alpha
        context.fillStyle = this.color

        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        context.fill()

        context.restore()
    }

    move() {
        this.x += this.vx
        this.vy += this.a
        this.y += this.vy
        if (this.alpha > 0.01) {
            this.alpha -= 0.008
        } else {
            this.alpha = 0
        }

        if (this.y >= canvas.height + this.radius) {
            this.active = false
        }
    }
}

window.onload = () => {
    canvas = document.getElementById("myCanvas")
    context = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000

    canvas.addEventListener("mousemove", checkMouse)
    canvas.addEventListener("mouseleave", () => spawn = false)


    Animate()
}

function checkMouse(myEvent) {
    spawn = true
    mouseX = myEvent.pageX - canvas.offsetLeft
    mouseY = myEvent.pageY - canvas.offsetTop
}


function Animate() {
    // clear
    context.fillStyle = "rgba(0, 0, 0, 0.2)"
    context.fillRect(0, 0, canvas.width, canvas.height)

    if (spawn) {
        particles.push(new Particle(mouseX, mouseY))
    }

    if (particles.length) {
        particles.forEach(particle => {
            particle.draw()
            particle.move()
        })

        for (let i = particles.length - 1; i >= 0; i--) {
            if (!particles[i].active) particles.splice(i, 1)
        }
    }

    console.log(particles)
    window.requestAnimationFrame(Animate)
}

function randomBetweenInterval(min, max) {
    return Math.random() * (max - min + 1) + min
}

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180
}