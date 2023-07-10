let inputwidth;
let inputheight;
function showmess() {
    inputwidth = prompt("Enter the width");
    inputheight = prompt("Enter the height");
    let width = parseInt(inputwidth);
    let height = parseInt(inputheight);
    let area = width * height;
    document.write("The area is: " + area);
}