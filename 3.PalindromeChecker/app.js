const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value
    const reverse = reverseString(value)

    if (value === reverse) {
        document.body.style.backgroundColor = "green"
        // alert("P A L I N D R O M E")
    }
    else {
        document.body.style.backgroundColor = "red"
        // alert("Not today!")
    }

    // clears the input box after
    input.value = ""
}