let rainDrops = []

window.onload = function () {


    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")
    canvas.height = 1000
    canvas.width = 1000


    class Raindrop {
        constructor(x, y, length, v) {
            this.x = x
            this.y = y
            this.length = length
            this.v0 = v
            this.v = v
            this.a = 0.3
            this.color = randomBlue()
        }
        update() {
            this.draw()
            this.move()
            this.clip()
        }
        draw() {
            context.strokeStyle = this.color
            context.beginPath()
            context.moveTo(this.x, this.y)
            context.lineTo(this.x, this.y + this.length)
            context.stroke()
        }
        move() {
            this.v += this.a
            this.y += this.v
        }
        clip() {
            //direita
            if (this.y >= canvas.height + this.length) {
                this.y = -this.length
                this.v = this.v0
                this.x = Math.random() * canvas.width
            }
        }
    }



    for (let i = 0; i < 1000; i++) {
        let length = randomBetweenInterval(10, 15)
        rainDrops.push(new Raindrop(Math.random() * canvas.width, Math.random() * canvas.height, length, Math.random() * 5))
    }

    timer = window.setInterval(drawIt, 16)

    function drawIt() {
        context.fillStyle = "rgb(0,255,255)"
        context.fillRect(0, 0, canvas.width, canvas.height)


        rainDrops.forEach(rainDrop => rainDrop.update())
    }
}

function randomColor() {
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`
}

function randomBlue() {
    return `rgba(0, 0, ${Math.random() * 255}, ${Math.random()})`
}

function randomBetweenInterval(min, max) {
    return Math.random() * min + max - min
}