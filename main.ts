basic.forever(function () {
    for (let index = 0; index < 100; index++) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 200), music.PlaybackMode.UntilDone)
        basic.showString("Welcome to alfalah academy Al dana")
    }
})
