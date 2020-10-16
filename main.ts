input.onButtonPressed(Button.A, function () {
    if (ceruzaVagyRadir == 0) {
        led.unplot(kurzorX, kurzorY)
    } else {
        led.plot(kurzorX, kurzorY)
    }
    kurzorX += -1
})
input.onButtonPressed(Button.AB, function () {
    if (ceruzaVagyRadir == 0) {
        ceruzaVagyRadir = 1
    } else {
        ceruzaVagyRadir = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (ceruzaVagyRadir == 0) {
        led.unplot(kurzorX, kurzorY)
    } else {
        led.plot(kurzorX, kurzorY)
    }
    kurzorX += 1
})
let kurzorY = 0
let kurzorX = 0
let ceruzaVagyRadir = 0
ceruzaVagyRadir = 0
kurzorX = 0
kurzorY = 0
basic.forever(function () {
    if (kurzorX >= 4 && kurzorY >= 4) {
        kurzorX = 4
        kurzorY = 4
    } else {
        if (kurzorX > 4) {
            kurzorX = 0
            kurzorY += 1
        }
    }
    if (kurzorX <= 0 && kurzorY <= 0) {
        kurzorX = 0
        kurzorY = 0
    } else {
        if (kurzorX < 0) {
            kurzorX = 4
            kurzorY += -1
        }
    }
    if (led.point(kurzorX, kurzorY)) {
        led.unplot(kurzorX, kurzorY)
    } else {
        if (ceruzaVagyRadir == 1) {
            led.plotBrightness(kurzorX, kurzorY, 255)
        } else {
            led.plotBrightness(kurzorX, kurzorY, 51)
        }
    }
    basic.pause(200)
})
