function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

class circle {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.color = getRandomColor();
        this.radius = Math.floor(Math.random() * 80);
        let ctx = document.getElementById('myCanvas').getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function CreatMultiCircle() {
    for (let i = 0; i < 50; i++) {
        new circle();
    }
}
CreatMultiCircle();