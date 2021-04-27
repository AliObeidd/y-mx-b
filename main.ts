let state = 0
let number1 = 0
let number2 = 0
input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        number1 += -1
        basic.showNumber(number1)
    } else if (state == 1) {
        number2 += -1
        basic.showNumber(number2)
    }
})
input.onButtonPressed(Button.AB, function () {
    state += 1
    if (state == 1) {
        number2 += -2
        basic.showNumber(number2)
    } else if (number2 == 2) {
        basic.showString("" + (number1 + number2))
    }
})
input.onButtonPressed(Button.B, function () {
    if (state == 0) {
        number2 += 1
        basic.showNumber(number1)
    } else if (state == 1) {
        number2 += 1
        basic.showNumber(number2)
    }
})
basic.forever(function () {
	
})
