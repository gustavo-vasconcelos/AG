class Circle {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
        this.mass = 1
        this.v = {
            x: randomFromInterval(-2, 2),
            y: randomFromInterval(-2, 2)
        }
        this.color = randomColor()
        this.alpha = 0.2
    }
    update() {
        this.draw()
        //this.drawText()
        this.collisionEdges()
        this.move()
        this.ballColision()
        this.drawVector()
    }
    draw() {
        context.strokeStyle = this.color
        context.save()
        context.globalAlpha = this.alpha
        context.fillStyle = this.color
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        context.fill()
        context.restore()
        context.stroke()
        context.globalAlpha = 0.5
    }
    drawVector() {
        //draw vectors
        //x vector
        context.strokeStyle = "red"
        context.beginPath()
        context.moveTo(this.x, this.y)
        context.lineTo(this.x + this.v.x * this.radius, this.y)
        context.stroke()


        //y vector
        context.strokeStyle = "green"
        context.beginPath()
        context.moveTo(this.x, this.y)
        context.lineTo(this.x, this.y + this.v.y * this.radius)
        context.stroke()

        //v vector
        context.strokeStyle = "blue"
        context.beginPath()
        context.moveTo(this.x, this.y)
        context.lineTo(this.x + this.v.x * this.radius, this.y + this.v.y * this.radius)
        context.stroke()

    }
    drawText() {
        context.fillStyle = "black"
        context.font = "20px Arial"
        context.textAlign = "center"
        context.fillText(`x: ${this.x.toFixed(0)}`, this.x, this.y - 10)
        context.fillText(`y: ${this.y.toFixed(0)}`, this.x, this.y + 10)
    }
    move() {
        this.x += this.v.x
        this.y += this.v.y
    }
    collisionEdges() {
        //down
        if (this.y - this.radius <= 0) {
            this.v.y = -this.v.y
            this.y = this.radius
        }
        //up
        if (this.y + this.radius >= canvas.height) {
            this.v.y = -this.v.y
            this.y = canvas.height - this.radius
        }
        //esquerda
        if (this.x - this.radius <= 0) {
            this.v.x = -this.v.x
            this.x = this.radius
        }
        //direita
        if (this.x + this.radius >= canvas.width) {
            this.v.x = -this.v.x
            this.x = canvas.width - this.radius
        }
    }
    ballColision() {
        circles.forEach(circle => {
            if (getDistance(circle.x, circle.y, this.x, this.y) < circle.radius + this.radius && this !== circle) {
                resolveCollision(this, circle)
            }
        })
    }
}

let canvas, context, circles = [], count = 0

window.onload = function () {
    canvas = document.getElementById("myCanvas")
    context = canvas.getContext("2d")
    canvas.height = 800
    canvas.width = 800

    // generate circles
    for (let i = 0; i < 5; i++) {
        const radius = 100
        let x = randomFromInterval(radius, canvas.width - radius)
        let y = randomFromInterval(radius, canvas.height - radius)

        if (i > 0) {
            for (let j = 0; j < circles.length; j++) {
                if (getDistance(circles[j].x, circles[j].y, x, y) < circles[j].radius + radius) {
                    x = randomFromInterval(radius, canvas.width - radius)
                    y = randomFromInterval(radius, canvas.height - radius)
                    j = -1
                }
            }
        }
        circles.push(new Circle(x, y, radius))
    }

    timer = window.setInterval(animate, 16)

}

function animate() {
    context.fillStyle = "rgb(255,255,255)"
    context.fillRect(0, 0, canvas.width, canvas.height)

    circles.forEach(circle => {
        circle.update()
    })
}

function randomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
}

function randomFromInterval(min, max) {
    return Math.random() * (max - min) + min
}

function getDistance(x1, y1, x2, y2) {
    let distance = {
        x: x2 - x1,
        y: y2 - y1
    }
    return Math.sqrt(Math.pow(distance.x, 2) + Math.pow(distance.y, 2))
}

function getAngle(x1, y1, x2, y2) {
    let distance = {
        x: x2 - x1,
        y: y2 - y1
    }
    return Math.atan2(distance.y, distance.x)
}

function resolveCollision(particle, otherParticle) {
    collisionAngle = getAngle(particle.x, particle.y, otherParticle.x, otherParticle.y)
    // angles
    /*
    if (Math.abs(collisionAngle) < 10 * Math.PI / 180) {
        thetha1 = collisionAngle - Math.PI
    } else if (Math.abs(collisionAngle) < Math.PI + 10 * Math.PI / 180) {
        thetha1 = collisionAngle - Math.PI
    } else {
        thetha1 = collisionAngle + Math.PI / 2
    }
    
    thetha1 = collisionAngle - Math.PI
    thetha2 = collisionAngle

    // initial velocity
    u1 = Math.sqrt(particle.v.x * particle.v.x + particle.v.y * particle.v.y)
    u2 = Math.sqrt(otherParticle.v.x * otherParticle.v.x + otherParticle.v.y * otherParticle.v.y)

    // coefficient of restitution
    e = 0.5

    // final velocity
    v1 = (e * (u2 - u1) + u1 + u2) / 2
    v2 = (e * (u1 - u2) + u1 + u2) / 2

    // calculate x and y component of v1
    v1x = v1 * Math.cos(thetha1)
    v1y = v1 * Math.sin(thetha1)

    // calculate x and y component of v2
    v2x = v2 * Math.cos(thetha2)
    v2y = v2 * Math.sin(thetha2)

    // change final velocities
    */
    let v1x = (particle.v.x * (particle.radius - otherParticle.radius) + 2 * otherParticle.radius * otherParticle.v.x) / (particle.radius + otherParticle.radius);
    let v2x = (otherParticle.v.x * (otherParticle.radius - particle.radius) + 2 * particle.radius * particle.v.x) / (particle.radius + otherParticle.radius);

    let v1y = (particle.v.y * (particle.radius - otherParticle.radius) + 2 * otherParticle.radius * otherParticle.v.y) / (particle.radius + otherParticle.radius);
    let v2y = (otherParticle.v.y * (otherParticle.radius - particle.radius) + 2 * particle.radius * particle.v.y) / (particle.radius + otherParticle.radius);


    particle.v.x = v1x
    particle.v.y = v1y

    otherParticle.v.x = v2x
    otherParticle.v.y = v2y
}