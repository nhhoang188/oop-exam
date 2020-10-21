class Rectangle {
    constructor(width, height) {
        this.height = height;
        this.width = width;
        let ctx = document.getElementById('myCanvas').getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.rect(10, 10, this.width, this.height);
        ctx.stroke();
    }
    setHeight(height){
       return this.height = height;
    }
    setWidth(width){
       return this.width = width;
    }
    getP() {
        return 2 * (this.height + this.width);
    }
    getS(){
        return this.height * this.width;
    }

}

let chunhat = new Rectangle(500, 400);
console.log(chunhat.getP());
console.log(chunhat.getS());
