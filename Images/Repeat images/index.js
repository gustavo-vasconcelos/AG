const canvas = document.getElementById("myCanvas")
const context = canvas.getContext("2d")
canvas.height = 640
canvas.width = 400

let repeatX = parseInt(prompt("Repetir quantas vezes? (x)"))
let repeatY = parseInt(prompt("Repetir quantas vezes? (y)"))

let minions = document.getElementById("minionsImage")
let count = 1
for (let x = 0; x < canvas.width; x += canvas.width / repeatX) {
    for (let y = 0; y < canvas.height; y += canvas.height / repeatY) {
        let img = { x, y }
        console.log("Imagem " + count, img)
        context.drawImage(minions, x, y, canvas.width / repeatX, canvas.height / repeatY)
        count++
    }
}

canvas.addEventListener("mousemove", (e) => {
    let mouseX = e.pageX - canvas.offsetLeft
    let mouseY = e.pageY - canvas.offsetTop
    let imageData = context.getImageData(mouseX, mouseY, 2, 2)

    console.log(imageData)
})

