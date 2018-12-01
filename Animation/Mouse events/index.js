window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")
    canvas.height = 800
    canvas.width = 800


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
    */
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
    particle.v.x = v1x
    particle.v.y = v1y

    otherParticle.v.x = v2x
    otherParticle.v.y = v2y
}