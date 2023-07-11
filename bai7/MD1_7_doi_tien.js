function convert(){
    let tienNhap =+ document.getElementById("soTien").value;
    let tienGoc = document.getElementById("tienGoc").value;
    let tienDoi = document.getElementById("tienDoi").value;
    let Result;
    if  (tienGoc == "USD" && tienDoi =="VND"){
        Result = "Result: " + (tienNhap*24000) + "Đ";
    }
    else if (tienGoc == "VND" && tienDoi == "USD"){
        Result = "Result: " + (tienNhap/24000) + "USD";
    }
    if (tienGoc == "VND" && tienDoi == "VND"){
        Result = "Result: " + (tienNhap) + "Đ"
    }
    else if (tienGoc == "USD" && tienDoi == "USD"){
        Result = "Result: " + tienNhap + "USD"
    }
    document.getElementById("Result").innerHTML = Result
}