function ControlEvents({
    buttonPlay,
    buttonStop,
    buttonPause,
    buttonIncreaseMinutes,
    buttonDecreaseMinutes,
    sounds,
    controls,
    timer
}) {
    buttonPlay.addEventListener('click', function() {
        sounds.audioButtonPress.play()
        controls.play()
        timer.countdown()
    })

    buttonStop.addEventListener('click', function() {
        sounds.audioButtonPress.play()
        controls.pause()
        timer.reset()
    })

    buttonPause.addEventListener('click', function() {
        sounds.audioButtonPress.play()
        controls.pause()
    })

    buttonIncreaseMinutes.addEventListener('click', function() {
        sounds.audioButtonPress.play()
        controls.increaseMinutes()
    })

    buttonDecreaseMinutes.addEventListener('click', function() {
        sounds.audioButtonPress.play()
        controls.decreaseMinutes()
    })
}

export { ControlEvents }