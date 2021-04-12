const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

// ctx.font = "18px Arial";
// ctx.fillStyle = "white";
// ctx.fillText('Distraction Avoidance!', 90, 20);


let start_image = new Image();
start_image.src = './images/chalkboardBackground.jpeg';

const background = {
    x: 0,
    y: 0,
    w: canvas.width,
    h: canvas.height,
    draw: function () {
        ctx.drawImage(background_image, this.x, this.y, this.w, this.h);
    },
};

function animate() {
    stopGame = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw()

}
animate();