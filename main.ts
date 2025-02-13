input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("Hola somos Miguel Angel y Juanma")
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    radio.sendString("me moriiiiiiii")
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendString("\"marisco recio\"")
})
radio.setGroup(1)
