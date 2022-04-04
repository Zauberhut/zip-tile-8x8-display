let strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
let range = strip.range(0, 8)
basic.forever(function () {
    strip.showRainbow(1, 360)
    strip.shift(1)
    basic.pause(100)
    strip.show()
})
