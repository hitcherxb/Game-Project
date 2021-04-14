const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let player = null




let buttons = document.querySelectorAll('button')
for (button of buttons) {
    button.onclick = function (e) {

        this.parentNode.parentNode.parentNode.parentNode.classList.add('hidden')
        this.parentNode.parentNode.parentNode.parentNode.nextElementSibling.classList.remove('hidden')
        player = this.dataset.imgurl
        if (player) {
            console.log('start game for', player)

            img.src = player
            character.img = img
            img.onload = animate

        }
    }
}

class Student {
    constructor(img, x, y, w, h) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw = () => {
        // console.log(this)
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}
class Distraction {
    constructor(x, y, w, h, src) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.src = src;
        this.distractionImg = new Image()
    }
    loadDistraction = () => {
        this.distractionImg.src = this.src
        this.distractionImg.onload = this.drawDistraction
    }
    drawDistraction = () => {
        ctx.drawImage(this.distractionImg, this.x, this.y, this.w, this.h)
        this.y++
    }

}

setInterval(() => {
    let tv = new Distraction(Math.random() * canvas.width - 100, 10, 100, 100, "/Images/TV.png")
    tv.loadDistraction()
    obstacles.push(tv)
}, 1000)
let obstacles = []


let img = new Image();

let character = new Student(img, canvas.width / 2, 1000, 200, 200)


function animate() {
    window.requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    character.draw()

    obstacles.forEach(tv => {
        tv.drawDistraction()

    })

}

window.onkeydown = function (e) {
    if (e.key === 'ArrowLeft') {
        character.x -= 50
    }
    if (e.key === 'ArrowRight') {
        character.x += 50
    }
    console.log(this)
}


animate()

