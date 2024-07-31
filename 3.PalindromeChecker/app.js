const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value
    const reverse = reverseString(value)

    if (value === reverse) {
        alert("P A L I N D R O M E");
        // body.style.backgroundColor = 'green'
    }
    else {
        alert("Not today!")
    }

    // clears the input box after
    input.value = ""
}