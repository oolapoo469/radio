input.onButtonPressed(Button.A, function () {
    message = "" + message + "."
    basic.showString(message)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(message)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    message = "" + message + "-"
    basic.showString(message)
})
let message = ""
radio.setGroup(123)
