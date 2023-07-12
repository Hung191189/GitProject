let value = "-"
let a = 10
let b = 5
switch (value) {
    case "+":
        alert("a+b= " + (a + b));
        break;
    case "-":
        alert("a-b=" +(a-b));
        break;
    case "*":
        alert("a*b= " +(a*b));
    case "/":
        alert("a/b= "+ (a/b));
        break;
    default:
        alert("khong co phep tinh")
        break;
}
switch (a){
    case 10:
        alert("10" +a);
        switch (b){
            case 5:
                alert("true" +b)
        }
}