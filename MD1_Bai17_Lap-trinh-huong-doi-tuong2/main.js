let ball = new Ball(200, 200, 20, "red")
ball.draw();

function play(){
    ball.move()
    requestAnimationFrame(play)
}
play()