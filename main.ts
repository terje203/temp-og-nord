input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.pause(1000)
    basic.showString("TERJE OG THOMAS")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.acceleration(Dimension.X))
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
})
basic.forever(function () {
	
})
