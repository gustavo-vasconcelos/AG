window.onload = function () {
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")


    let lado = parseInt(prompt("Indique qual o comprimento do lado de cada quadrado (pixels):"))
    let numeroQuadrados = parseInt(prompt("Indique qual o número de quadrados por linha:"))
    let cor1 = prompt("Indique qual primeira cor (hexadecimal):")
    let cor2 = prompt("Indique qual segunda cor (hexadecimal):")

    canvas.height = lado * numeroQuadrados
    canvas.width = lado * numeroQuadrados
    canvas.style.border = "25px solid " + cor1
    context.fillStyle = cor1
    context.fillRect(0, 0, lado * numeroQuadrados, lado * numeroQuadrados)

    for (let i = 0; i < numeroQuadrados; i++) {
        for (let j = 0; j < numeroQuadrados; j++) {
            if (i % 2 === 0 && j % 2 === 0) {
                context.fillStyle = cor2
                context.fillRect(lado * i, lado * j, lado, lado)
            } else if (i % 2 !== 0 && j % 2 !== 0) {
                context.fillStyle = cor2
                context.fillRect(lado * j, lado * i, lado, lado)

            }
        }
    }
}