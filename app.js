const display = document.getElementById("display")
let firstInput = "0"
let secondInput = ""

function containsOperators(str) {
    const operators = /[\+\-*\/]/

    return operators.test(str)
}

function addToDisplay(option) {
    switch (option) {
        case 'C':
            firstInput = "0"
            break
        case '+':
            if (containsOperators(firstInput)) {
                firstInput = eval(firstInput).toString()
            }
            firstInput += "+"
            break
        case '-':
            if (containsOperators(firstInput)) {
                firstInput = eval(firstInput).toString()
            }
            firstInput += "-"
            break
        case '*':
            if (containsOperators(firstInput)) {
                firstInput = eval(firstInput).toString()
            }
            firstInput += "*"
            break
        case '/':
            if (containsOperators(firstInput)) {
                firstInput = eval(firstInput).toString()
            }
            firstInput += "/"
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

/*
    TODO
    - Chaining operations instead of one line
*/