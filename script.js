
const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 750;
let player = null
window.onload = function () {
    let audio = new Audio('audio/Heavens.mp3')

    audio.loop = true;
    audio.volume = 0.08;
    audio.play();
}


let buttons = document.querySelectorAll('button')
for (button of buttons) {
    button.onclick = function (e) {

        this.parentNode.parentNode.parentNode.parentNode.classList.add('hidden')
        this.parentNode.parentNode.parentNode.parentNode.nextElementSibling.classList.remove('hidden')
        player = this.dataset.imgurl
        if (player) {
            img.src = player
            character.img = img
            img.onload = function () {
                animate()
                startIntervals()
            }
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
function startIntervals() {
    setInterval(() => {
        let tv = new Distraction(Math.random() * canvas.width - 100, 10, 90, 90, "Images/TV.png")
        tv.loadDistraction()
        tvObstacles.push(tv)
        score += 1
    }, 4000)


    setInterval(() => {
        let beer = new Distraction(Math.random() * canvas.width - 100, 10, 60, 70, "Images/beer.png")
        beer.loadDistraction()
        beerObstacles.push(beer)
    }, 3500)

    setInterval(() => {
        let beach = new Distraction(Math.random() * canvas.width - 100, 10, 60, 70, "Images/vacation.png")
        beach.loadDistraction()
        beachObstacles.push(beach)

    }, 3000)
}

let tvObstacles = []
let beerObstacles = []
let beachObstacles = []

let score = 0


let img = new Image();
let character = new Student(img, canvas.width / 2, 590, 170, 170)

function detectCollision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y) {
        window.cancelAnimationFrame(gameInt)
        alert("you distracted af")
    }
}



function animate() {
    console.log("animate")
    gameInt = window.requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    character.draw()

    tvObstacles.forEach(tv => {
        detectCollision(character, tv)
        tv.drawDistraction()
    })
    beerObstacles.forEach(beer => {
        detectCollision(character, beer)
        beer.drawDistraction()
    })
    beachObstacles.forEach(beach => {
        detectCollision(character, beach)
        beach.drawDistraction()
    })
    ctx.fillText(score, 10, 10, 200, 100)

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


