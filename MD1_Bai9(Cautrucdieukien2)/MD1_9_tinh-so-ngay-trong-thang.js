function nhap(){
    let a =+ document.getElementById("numB").value
        if (a<=12) {
            switch (a) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    document.getElementById("ketqua").innerHTML = ("thang nay co 31 ngay")
                break;
                case 2:
                    document.getElementById("ketqua").innerHTML = ("thang nay co 28 hoac 29 ngay")
                break;
                default:
                    document.getElementById("ketqua").innerHTML = ("thang nay co 30 ngay")
            }
        }else {
            document.getElementById("ketqua").innerHTML = ("chi co 12 thang")
        }
}