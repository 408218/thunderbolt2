let a = 0
let b = 0
let c = 0
let d = 0
let e = 0
basic.forever(function () {
    if (a < 4) {
        led.plot(a, 0)
        led.plot(a, 1)
        led.plot(a, 2)
        led.plot(a, 3)
        led.plot(a, 4)
        a += 1
        basic.pause(100)
        basic.clearScreen()
        led.plot(a, 0)
        led.plot(a, 1)
        led.plot(a, 2)
        led.plot(a, 3)
        led.plot(a, 4)
        led.plotBrightness(a - 1, 0, 100)
        led.plotBrightness(a - 1, 1, 100)
        led.plotBrightness(a - 1, 2, 100)
        led.plotBrightness(a - 1, 3, 100)
        led.plotBrightness(a - 1, 4, 100)
        a += 1
        basic.pause(100)
        basic.clearScreen()
        led.plot(a, 0)
        led.plot(a, 1)
        led.plot(a, 2)
        led.plot(a, 3)
        led.plot(a, 4)
        led.plotBrightness(a - 1, 0, 100)
        led.plotBrightness(a - 1, 1, 100)
        led.plotBrightness(a - 1, 2, 100)
        led.plotBrightness(a - 1, 3, 100)
        led.plotBrightness(a - 1, 4, 100)
        led.plotBrightness(a - 2, 0, 100)
        led.plotBrightness(a - 2, 0, 100)
        led.plotBrightness(a - 2, 0, 100)
        led.plotBrightness(a - 2, 0, 100)
        led.plotBrightness(a - 2, 0, 100)
        basic.clearScreen()
    }
    if (a == 4) {
        basic.clearScreen()
        a = 4
        for (let index = 0; index < 5; index++) {
            led.plot(a, 0)
            led.plot(a, 1)
            led.plot(a, 2)
            led.plot(a, 3)
            led.plot(a, 4)
            a += -1
            basic.pause(100)
            basic.clearScreen()
            led.plot(a, 0)
            led.plot(a, 1)
            led.plot(a, 2)
            led.plot(a, 3)
            led.plot(a, 4)
            led.plotBrightness(a + 1, 0, 100)
            led.plotBrightness(a + 1, 1, 100)
            led.plotBrightness(a + 1, 2, 100)
            led.plotBrightness(a + 1, 3, 100)
            led.plotBrightness(a + 1, 4, 100)
            basic.pause(100)
            basic.clearScreen()
            led.plot(a, 0)
            led.plot(a, 1)
            led.plot(a, 2)
            led.plot(a, 3)
            led.plot(a, 4)
            led.plotBrightness(a + 1, 0, 100)
            led.plotBrightness(a + 1, 1, 100)
            led.plotBrightness(a + 1, 2, 100)
            led.plotBrightness(a + 1, 3, 100)
            led.plotBrightness(a + 1, 4, 100)
            led.plotBrightness(a + 2, 0, 100)
            led.plotBrightness(a + 2, 1, 100)
            led.plotBrightness(a + 2, 2, 100)
            led.plotBrightness(a + 2, 3, 100)
            led.plotBrightness(a + 2, 4, 100)
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
