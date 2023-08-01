class Score{
    text;
    x;
    y;
    constructor(x, y,) {
        this.text = 0;
        this.x = x;
        this.y = y;
        this.ctx = document.getElementById("myCanvas").getContext("2d");
    }
    drawScore(){
        this.ctx.beginPath();
        this.ctx.font = ' arial';
        this.ctx.fillText(`SCORE: ${this.text}`, this.x, this.y)
        this.ctx.closePath();
    }
}