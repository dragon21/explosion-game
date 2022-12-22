input.onButtonPressed(Button.A, function () {
	
})
let timer = randint(20, 35)
while (timer > 0) {
    basic.showIcon(IconNames.SmallDiamond)
    timer += -1
    basic.pause(1500)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Square,
    200,
    1,
    255,
    0,
    50,
    SoundExpressionEffect.None,
    InterpolationCurve.Curve
    ), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.SmallSquare)
}
music.playSoundEffect(music.createSoundEffect(
WaveShape.Noise,
500,
499,
255,
0,
3952,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), SoundExpressionPlayMode.InBackground)
for (let index = 0; index < 5; index++) {
    basic.showIcon(IconNames.Chessboard)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
}
