let imgBall = null;
imgBall = document.getElementById("image");
function init(){
    imgBall = document.getElementById("image");
    imgBall.style.position = "relative";
    imgBall.style.left = "0px";
}
function moveRight(){
    imgBall.style.left = parseInt(imgBall.style.left) + 10 +"px";
}
window.onload = init
