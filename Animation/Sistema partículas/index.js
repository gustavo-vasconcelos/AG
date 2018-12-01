let particles = []
let canvas, context, radius = 0, angle = 0, maxParticles = 2000, particlesPerCicle = 100

class Particle {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.vy = randomBetweenInterval(-2, 2)
        this.vx = randomBetweenInterval(-3, 3)
        this.a = 0.1
        this.radius = 8
        this.color = randomColor()
        this.active = true
    }
    update() {
        this.draw()
        this.move()
    }
    draw() {
        context.fillStyle = this.color
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        context.fill()
    }
    move() {
        if (this.active) {
            this.vy += this.a
            this.y += this.vy
            if (this.vx > 0) {
                this.vx += this.a
            } else {
                this.vx -= this.a
            }
            this.x += this.vx
        }
        if (this.y >= canvas.height + this.radius && this.active) {
            this.active = false
        }
        /*
        if (this.y <= 0 - this.radius || this.x >= this.width + this.radius || this.x <= 0 - this.radius) {
            this.active = false
        }
        */
    }
}

window.onload = function () {
    canvas = document.getElementById("myCanvas")
    context = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    radius = getRadius(canvas.width, canvas.height)

    for (let i = 0; i < 4000; i++) {
        //create particle if not exceeded max particles value
        let cx = (canvas.width / 2) + radius * Math.cos(angle)
        let cy = (canvas.height / 2) + radius * Math.sin(angle)
        particles.push(new Particle(cx, cy))
        angle += 2 * Math.PI / particles.length
    }
    drawIt()
}

function drawIt() {
    context.fillStyle = "rgba(0,0,0, 0.3)"
    context.fillRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < particlesPerCicle; i++) {
        //create particle if not exceeded max particles value
        while (particles.length <= maxParticles) {
            let cx = (canvas.width / 2) + radius * Math.cos(angle)
            let cy = (canvas.height / 2) + radius * Math.sin(angle)
            particles.push(new Particle(cx, cy))
            angle += 2 * Math.PI / particles.length
        }
    }

    // update particles
    particles.forEach(particle => {
        particle.update()
    })

    // kill particles
    for (let i = particles.length - 1; i >= 0; i--) {
        if (!particles[i].active) {
            particles.splice(i, 1)
        }
    }

    window.requestAnimationFrame(drawIt)
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    radius = getRadius(canvas.width, canvas.height)

})

function getRadius(maxWidth, maxHeight) {
    let radiusValue
    if (maxWidth > maxHeight) {
        radiusValue = maxWidth / 4.5
    } else {
        radiusValue = maxHeight / 4.5
    }
    return radiusValue
}

function randomColor() {
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`
}

function randomBetweenInterval(min, max) {
    return Math.random() * (max - min) + min
}