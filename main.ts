input.onButtonPressed(Button.A, function () {
    count += 1
})
Microbit.init()
let count = 0
basic.forever(function () {
    Microbit.showNumber(Oled.oled14, count)
})
