function bam(no){
    let nut = document.getElementById("input")
        nut.value +=no
}
function xoa(){
    document.getElementById("input").value = ("")
}
function result(){
    let nut = document.getElementById("input")
    let ketqua = eval(nut.value)
    nut.value = ketqua
}