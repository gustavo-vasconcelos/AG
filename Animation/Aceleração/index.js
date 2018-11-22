window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000


    class Circle {
        constructor(radius, x, y, a, v, angle, k, friction, initialIndex) {
            this.radius = radius
            this.x = x
            this.y = y
            this.a = a
            this.v = v
            this.angle = angle
            this.vx = this.v * Math.cos(this.angle)
            this.vy = this.v * Math.sin(this.angle)
            this.color = randomColor()
            this.py = this.y
            this.k = k
            this.friction = friction
            this.initialIndex = initialIndex
        }
        draw() {
            context.fillStyle = this.color
            context.beginPath()
            context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
            context.fill()
        }
        move() {
            this.py = this.y
            this.vy += this.a
            this.x += this.vx
            this.y += this.vy

        }
        clip() {
            //down
            if (this.y + this.radius >= canvas.height) {
                this.vy *= this.k
                this.vy = -this.vy
                this.y = canvas.height - this.radius
                this.vx *= 1 - this.friction
            }
            //direita
            if (this.x + this.radius >= canvas.width) {
                this.vx *= this.k
                this.vx = -this.vx
                this.x = canvas.width - this.radius
                this.vy *= 1 - this.friction
            }
            //esquerda
            if (this.x - this.radius <= 0) {
                this.vx *= this.k
                this.vx = -this.vx
                this.x = this.radius
                this.vy *= 1 - this.friction
            }
        }
        stop(index) {
            if (this.y === this.py) {
                if (circles.length >= 2) {
                    circles.splice(index, 1)
                } else {
                    context.fillStyle = "black"
                    context.fillText(`Winner: ball ${this.initialIndex}`, canvas.width / 2, 175)
                    timer = window.clearInterval(timer)
                }
            }
        }
    }


    let circles = []

    for (let i = 0; i < 200; i++) {
        circles.push(
            new Circle(
                Math.floor(Math.random() * 100) + 1,
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                0.9,
                Math.random() * 10,
                Math.random() * (Math.PI / 2),
                0.7,
                0.03,
                i
            )
        )
    }

    timer = window.setInterval(drawIt, 16)

    function drawIt() {
        context.fillStyle = "rgb(255,255,255)"
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.fillStyle = "black"
        context.font = "60px Arial"
        context.textAlign = "center"
        context.fillText(`Balls left: ${circles.length}`, canvas.width / 2, 100)

        circles.forEach((circle, index) => {
            circle.draw()
            circle.move()
            circle.clip()
            circle.stop(index)
        })
    }
}

function randomColor() {
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`
}