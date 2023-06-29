input.onButtonPressed(Button.A, function () {
    timer = 0
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    timer = 40
})
input.onButtonPressed(Button.B, function () {
    timer = 0
    basic.showIcon(IconNames.Surprised)
})
let timer = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 200) {
        basic.showIcon(IconNames.Sad)
    }
    if (timer == 300) {
        basic.showIcon(IconNames.Asleep)
    }
    if (timer == 720) {
        while (true) {
            basic.showIcon(IconNames.Skull)
        }
    }
})
