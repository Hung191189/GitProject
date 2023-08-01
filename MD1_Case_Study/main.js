let ball1 = new Ball('1.png',200, 100, 20, 20);
// let ball2 = new Ball('2.png',200, 100, 20, 20);
let bar = new Bar(200, 300, 100, 10, "blue")
// let brick = new Brick(10, 10, 70, 10, "green")
let listBrick = creatBrick();
let score = new Score(20, 20)
let gameOver = false
let checkScore = false
function creatBrick() {
    let listBrick = [];
    let x = 10
    let y = 30
    for (let i = 0; i < 32; i++) {
        // x += 80
        // creatBrick.push(brick)
        let brick = new Brick(x, y, 50, 10, "green")

        if (brick.x < 500 - brick.width - 10) {
            x += 80
            listBrick.push(brick)
        } else {
            x = 10
            y = y + brick.height + 10
            i--
        }
    }
    return listBrick
}

function drawB() {

    for (let i = 0; i < listBrick.length; i++) {
        if (listBrick[i].status === true) {
            listBrick[i].drawBrick();
            ball1.checkCollisionBrick(listBrick[i], score)
        }
    }
}

function checkGameOver() {
    if (ball1.y + ball1.height >= 350) {
        gameOver = true
    }
}
function checkGameScore(){
    if(score.text === 32){
        checkScore = true
    }
}


    function play() {
        document.getElementById("start").style.display = 'none'
        checkGameOver();
        checkGameScore();
        if(checkScore === false){
        if (gameOver === false) {
        // ball1.drawBall();
        ball1.moveBall();
        bar.drawBar();
        creatBrick();
        drawB();
        ball1.checkCollisionBorder();
        ball1.checkCollisionBar();
        score.drawScore();
        requestAnimationFrame(play);
    }else {
        alert("Thua")
            location.reload()
        }
        }else {
            alert("Thang: "+ score.text +"diem")
        }
}

window.addEventListener("keydown", function (evt) {
    if (evt.key === 'ArrowRight') {
        bar.moveRight();
    } else {
        bar.moveLeft();
    }
})