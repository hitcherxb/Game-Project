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
        // console.log(e, this, this.id, this.parentNode.parentNode, this.parentNode.parentNode.nextElementSibling)

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

class Char {
    constructor(img) {
        this.img = img;
    }
    draw = () => {
        console.log(this)
        ctx.drawImage(this.img, 100, 100, 100, 100)
    }
}

let character = new Char()
function animate() {
    window.requestAnimationFrame(animate)
    character.draw()

}

// document.querySelector('#startGame').onclick = function () {
//     this.parentNode.parentNode.classList.add('hidden')
//     this.parentNode.parentNode.nextElementSibling.classList.remove('hidden')
// }



// document.querySelector('#vsimg button').onclick = function () {
//     document.querySelector('#canvas').classList.toggle('hidden');