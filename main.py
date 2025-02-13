def on_button_pressed_a():
    radio.send_string("Hola somos Miguel Angel y Juanma")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_string("me moriiiiiiii")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    radio.send_string("\"marisco recio\"")
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(1)