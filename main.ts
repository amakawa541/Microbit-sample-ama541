input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("a b")
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
basic.showString("Hello!")
basic.forever(function () {
    basic.showNumber(input.lightLevel())
})
