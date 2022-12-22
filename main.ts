input.onButtonPressed(Button.A, function () {
	
})
let timer = randint(5, 15)
basic.showIcon(IconNames.SmallDiamond)
while (timer > 0) {
    timer += -1
    basic.pause(1000)
}
basic.showIcon(IconNames.Chessboard)
