class Ball{
    constructor(x, y, r, color) {
        this.x =x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.speed = 5;
        this.canvas = document.getElementById("main");
        this.ctx = this.canvas.getContext("2d")
    }
    draw(){
        // let c = document.getElementById("main");
        // let ctx = c.getContext("2d")
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0,2*Math.PI)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.closePath();
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI)
        // ctx.fill();

    }
    move(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        if(this.canvas.height - this.y < this.r){
            this.y -= this.speed
        } else if (this.y === this.r){
            this.y += this.speed
        }
       this.y += this.speed;
       this.draw()
    }
    moveUp(){
        this.y -= this.speed
    }
    moveDown(){
        this.y += this.speed
    }
    checkVarBrick(brick){

}
    checkVarBar(bar){

    }
    checkVarBorder(border){

    }
}
