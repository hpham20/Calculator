const display = document.getElementById("display")
let firstInput = "0"
let secondInput = ""

function addToDisplay(option) {
    switch (option) {
        case 'C':
            firstInput = "0"
            break
        case '0':
            break
        case '=':
            firstInput = eval(firstInput).toString()
            break
        default:
            if (firstInput == '0') {
                firstInput = option
            } else {
                firstInput += option
            }
    }
    display.textContent = firstInput
}