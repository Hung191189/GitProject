function bam(value) {
    let a = document.getElementById("input")
    a.value += value

}
function xoa() {
    document.getElementById("input").value = ("")
}

function result(){
    let input = document.getElementById("input")
    let result = eval(input.value)
    input.value = result
}
