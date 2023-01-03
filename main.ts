let timer = randint(1, 4)
basic.forever(function () {
    if (timer > 0) {
        basic.showIcon(IconNames.Square)
        timer += -1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(200)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 500, 499, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
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
        basic.pause(2000)
        timer = randint(1, 4)
    }
})
