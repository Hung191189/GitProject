function doiF(){
    let doC = document.getElementById("C").value
    let c = parseInt(doC)
    let f = (160 + 9*c)/5
    document.getElementById("F").value=(f)
}
function doiC(){
    let doF = document.getElementById("F").value
    let f1 = parseInt(doF)
    let c1 = (5*f1 -160)/9
    document.getElementById("C").value=(c1)
}