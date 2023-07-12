function input() {
    let name = document.getElementById("name").value
    let pass = document.getElementById("pass").value
        if (name === "Admin") {
            if (pass === "TheMaster") {
                alert("Welcome")
            } else if (pass === null) {
                alert("Canceled")
            } else {
                alert("Wrong password")
            }
        } else if (name === null) {
            alert("Canceled")
        } else {
            alert("I don't know")
        }
}