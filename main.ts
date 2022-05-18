huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.showString("ON")
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.showString("OFF")
    }
})
