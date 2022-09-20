radio.onReceivedNumber(function (receivedNumber) {
    let RecievedNumber = 0
    if (RecievedNumber == Number2) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    Number2 += 1
    basic.showNumber(Number2)
})
input.onButtonPressed(Button.B, function () {
    Number2 += -1
    basic.showNumber(Number2)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(Number2)
})
let Number2 = 0
basic.showIcon(IconNames.Chessboard)
radio.setGroup(1)
Number2 = randint(0, 5)
basic.showNumber(Number2)
