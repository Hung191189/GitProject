
function tong(){
    let vatLy = document.getElementById("vl").value;
    let hoaHoc= document.getElementById( "hh").value;
    let sinhHoc = document.getElementById("sh").value;
    let v = parseInt(vatLy);
    let h = parseInt(hoaHoc);
    let s = parseInt(sinhHoc);
    let Tong = v + h + s;
    let TrungBinh =Tong/3;
    console.log(vatLy);
    console.log(hoaHoc);
    console.log(sinhHoc);
    console.log(Tong);
    console.log(TrungBinh);
    alert("Tổng: " +Tong);
    alert("Trung Bình: " +TrungBinh);
    document.getElementById("t").innerHTML=("Tổng:"+Tong);
    document.getElementById("tb").innerHTML=("Trung Bình:"+TrungBinh)
}