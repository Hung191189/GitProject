function checkIt(){
    let brow = document.getElementById("name").value
        switch(brow) {
            case "Edge":
                alert("You have got the Edge!");
                break;
            case "Chrome":
            case "chrome":
            case "Firefox":
            case "firefox":
            case "Safari":
            case "safari":
            case "Opera":
            case "opera":
                alert("Ok we support these browsers too");
                break;
            default:
                alert("We hope this page looks ok")
        }
}
function kiem(){
    let a = document.getElementById("input").value
        switch (a) {
            case "1":
                alert('1');
                break;
            case "2":
                alert("2");
                break;
            case "3":
            case "4":
                alert("34");
                break;
            default:
                alert("None")
        }
}
function testIt(){
    let a = document.getElementById("numb").value
    if (a > 0) {
        alert("1")
    } else if (a < 0) {
        alert("-1")
    }else {
        alert("0")
    }
}
function testIt1(){
    let a = document.getElementById("numbT").value
    let b = (a >0) ? 1:
                            (a < 0) ? -1: 0
        switch (b) {
            case 1:
                alert('1');
                break;
            case -1:
                alert('-1');
                break;
            case 0:
                alert('0')
        }
}
