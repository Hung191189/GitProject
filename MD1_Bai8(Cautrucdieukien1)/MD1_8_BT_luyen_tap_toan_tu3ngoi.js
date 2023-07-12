function tinhTong(){
    let a =+ document.getElementById("a").value
    let b =+ document.getElementById("b").value
    let c = (a+b < 4) ? "Below" : "Over";
    alert(c);
}
function clickME(){
let a = document.getElementById("mess").value
let b = (a === "Employee") ? "Hello" :
                        (a === "Director") ? "Greeting" :
                            (a  === "a") ? "No login" : ""
    alert(b)
}