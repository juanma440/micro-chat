input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola somos Miguel Angel y Juanma")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("me moriiiiiiii")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("\"marisco recio\"")
})
radio.setGroup(1)
