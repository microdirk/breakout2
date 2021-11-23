input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showNumber(1)
})
function toVolToY (Value: number) {
    if (Value > 900) {
        return 5
    }
    if (Value > 700) {
        return 4
    }
    if (Value > 600) {
        return 3
    }
    if (Value > 500) {
        return 1
    }
    if (Value > 400) {
        return 0
    }
    return 0
}
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showNumber(0)
})
let Right = 0
let Center = 0
let Left = 0
pins.analogWritePin(AnalogPin.P0, 0)
pins.analogWritePin(AnalogPin.P1, 0)
pins.analogWritePin(AnalogPin.P2, 0)
radio.setGroup(1)
basic.forever(function () {
    Left = pins.analogReadPin(AnalogPin.P0)
    basic.pause(100)
    Center = pins.analogReadPin(AnalogPin.P1)
    basic.pause(100)
    Right = pins.analogReadPin(AnalogPin.P2)
    basic.pause(100)
    basic.clearScreen()
    led.plot(1, toVolToY(Left))
    led.plot(2, toVolToY(Center))
    led.plot(3, toVolToY(Right))
    radio.sendValue("Center", Center)
    radio.sendValue("Right", Right)
    radio.sendValue("Left", Left)
})
