basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showString("START")
let XRONOS = randint(5, 30)
music.setVolume(255)
basic.forever(function () {
    if (XRONOS > 0) {
        XRONOS += -1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1600, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        basic.pause(300)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1600, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(300)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1600, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(300)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1600, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(300)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 523, 1, 255, 0, 2000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.Chessboard)
        basic.clearScreen()
        basic.pause(2000)
        basic.showLeds(`
            . . # # .
            . # . . .
            . # # # .
            . # . . .
            . . # # .
            `)
        basic.clearScreen()
        basic.pause(300)
        basic.showString("you lost. play again. ")
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        basic.showString("START")
        XRONOS = randint(5, 30)
    }
})
