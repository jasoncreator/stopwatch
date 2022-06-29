let start = 0
let elasped = 0
let steps = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elasped = input.runningTime() - start
    basic.showNumber(Math.idiv(elasped, 1000))
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # # #
        # . . . #
        . # # # .
        `)
    basic.pause(5000)
    basic.clearScreen()
})
input.onSound(DetectedSound.Quiet, function () {
    steps += 1
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showNumber(steps)
})
basic.forever(function () {
	
})
