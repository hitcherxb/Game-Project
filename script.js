const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let player = null


let game_image = new Image();
game_image.src = './images/classroom.jpeg'

const background = {
    x: 0,
    y: 0,
    w: canvas.width,
    h: canvas.height,
    draw: function () {
        ctx.drawImage(background_image, this.x, this.y, this.w, this.h);
    },
};

let buttons = document.querySelectorAll('button')
for (button of buttons) {
    button.onclick = function (e) {

        this.parentNode.parentNode.parentNode.parentNode.classList.add('hidden')
        this.parentNode.parentNode.parentNode.parentNode.nextElementSibling.classList.remove('hidden')
        player = this.dataset.imgurl
        if (player) {
            console.log('start game for', player)
            let img = new Image();
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
        console.log(this)
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}

let character = new Student(this.img, canvas.width/2, 75, 70, 70)
function animate() {
    window.requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    character.draw()

}

window.onkeydown = function (e) {
    if (e.key === 'ArrowLeft') {
        character.x -= 10
    }
    if (e.key === 'ArrowRight') {
        character.x += 10
    }
    console.log(this)
}

animate()