function clickMe(){
let a =+ document.getElementById("weight").value
let b =+ document.getElementById("height").value
let c = a / b
    if (c < 18.5){
        document.getElementById("result").innerHTML=("Underweight");
    } else if (c < 25){
        document.getElementById("result").innerHTML="Normal";
    } else if(c < 30){
        document.write("Overweight");
    }else {
        document.write("Obese");
    }
}