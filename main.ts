input.onButtonPressed(Button.A, function () {
	
})
let timer = randint(20, 35)
basic.showIcon(IconNames.SmallDiamond)
while (timer > 0) {
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
    ), SoundExpressionPlayMode.UntilDone)
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
