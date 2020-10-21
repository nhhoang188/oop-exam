class Rectangle {
    constructor(width, height) {
        this.height = height;
        this.width = width;
        this.perimeter = 2 * (this.height + this.width);
        this.s = this.height * this.width;
        let ctx = document.getElementById('myCanvas').getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.rect(10, 10, this.width, this.height);
        ctx.stroke();
    this.setHeight = function (height) {
       return this.height = height;
    }
    this.setWidth = function (width) {
       return this.width = width;
    }

}
}

let chunhat = new Rectangle(500, 400);
chunhat.setHeight(100)
chunhat.setWidth(300);
console.log(chunhat.perimeter);
console.log(chunhat.s);
