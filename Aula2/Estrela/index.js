window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")

    let size = parseInt(prompt("Insira a largura/altura do canvas:"))
    let color1 = prompt("Insira a primeira cor da estrela (nome, hexadecimal, rgb, rgba, hsl ou hsla):")
    let color2 = prompt("Insira a segunda cor da estrela (nome, hexadecimal, rgb, rgba, hsl ou hsla):")
    let radius = size / 2
    let x = size / 2
    let y = size / 2

    canvas.height = size
    canvas.width = size

    /*
    let x = parseInt(prompt("Coordenada x centro da estrela:"))
    let y = parseInt(prompt("Coordenada y centro da estrela:"))
    let radius = parseInt(prompt("Diâmetro da estrela:")) / 2
    */
    let tips = 0
    do {
        tips = parseInt(prompt("Número de pontas da estrela (apenas número ímpar):"))
    } while (tips % 2 === 0)
    let inOut = 0

    context.beginPath()
    context.lineJoin = 'round'
    for (let i = 0; i <= 2 * Math.PI; i += 2 * Math.PI / (tips * 2)) {
        if (inOut % 2 === 0) {
            context.lineTo(x + radius / 2 * Math.cos(i), y + radius / 2 * Math.sin(i))
        } else {
            context.lineTo(x + radius * Math.cos(i), y + radius * Math.sin(i))
        }
        inOut++
    }

    context.shadowColor = 'black'
    context.shadowBlur = 20;
    let grad = context.createRadialGradient(x, y, radius / 13, x, y, radius)
    
    grad.addColorStop(0, color1);
    grad.addColorStop(1, color2);
    context.fillStyle = grad

    context.fill()

}

function addGrid(delta, color) {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")

    canvas.height = 600
    canvas.width = 600

    let quantity = canvas.width / delta
    context.beginPath()

    for (let i = 0; i < quantity * delta; i += delta) {
        context.strokeStyle = color
        context.moveTo(i, 0)
        context.lineTo(i, canvas.height)

        context.moveTo(0, i)
        context.lineTo(canvas.width, i)

        context.strokeText(i, canvas.width - delta, i, 50)
        context.strokeText(i, i, canvas.height, 50)
    }
    context.stroke()

}