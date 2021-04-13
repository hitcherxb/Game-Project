const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');


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
        console.log(e, this, this.id, this.parentNode.parentNode, this.parentNode.parentNode.nextElementSibling)

        this.parentNode.parentNode.classList.add('hidden')
        this.parentNode.parentNode.nextElementSibling.classList.remove('hidden')
    }
}