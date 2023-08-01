class Ball{
    x;
    y;
    width;
    height;
    // radius;
    // color;
    constructor(url, x, y, width, height, radius, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.url = url;
        // this.radius = radius;
        // this.color = color;
        this.speed = 2;
        this.number = 0;
        this.flag = 'up';
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
    }

    drawBall(){
        // this.ctx.beginPath();
        // this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        let img = new Image()
        img.src = this.url

        // img.onload = () => {
            this.ctx.drawImage(img, this.x, this.y, this.width, this.height)
        // }
        // console.log(img)
        // this.ctx.fillStyle = this.color
        // this.ctx.fill();
        // this.ctx.closePath();
    }
    moveBallUp(){
        this.x += this.number;
        this.y -= this.speed;
    }
    moveBallDown(){
        this.x += this.number;
        this.y += this.speed;
    }
    moveBallDownLeft(){
        this.x -= this.speed;
        this.y += this.number;
    }
    moveBallDownRight(){
        this.x += this.speed;
        this.y -= this.number;
    }
    moveBall(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        switch (this.flag){
            case 'up':
                this.moveBallUp();
                break;
            case 'down':
                this.moveBallDown();
                break;
            case 'downLeft':
                this.moveBallDownLeft();
                break;
            case 'downRight':
                this.moveBallDownRight();
        }
        this.drawBall();


    }
    checkCollisionBorder(){
        if(this.y <= 0){
            this.flag = "down"
            this.number = Math.random()*2 -1
        }
        // if(this.y + this.height >= this.canvas.height){
        //
        // }
        if(this.x + this.width >= this.canvas.width){
            this.flag = "downLeft"
            this.number = Math.random()*2 -1
        }
        if(this.x <= 0){
            this.flag = "downRight"
            this.number = Math.random()*2 -1
        }
    }
    checkCollisionBar() {
        if ((this.y + this.height >= bar.y) && (this.x + this.width >=  bar.x) && (this.x + this.width <= (bar.width + bar.x))) {
            this.flag = "up"
            this.number = Math.random()*2 -1
        }
    }
    checkCollisionBrick(brick,score){
        if(this.y <= brick.y + brick.height && this.x + this.width>= brick.x
            && brick.x + brick.width >= this.x
           ){
            this.flag = 'down'
            brick.status = false
            score.text += 1;
        }
        // if (this.y +this.radius <= brick.y && this.x >= brick.x
        //     && brick.x +brick.width >= this.x){
        //     this.flag = 'up'
        //     brick.status = false
        //     score.text += 1;
        // }

    }
}
