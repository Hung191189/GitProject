function clickMe() {
    let banKinh = document.getElementById("r").value
    let r = parseInt(banKinh)
    let s2 = Math.PI * r * r
    console.log(s2)
    document.getElementById("s").value = s2
}