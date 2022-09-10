function Timer({
    minutesDefault,
    secondsDefault,
    minutesDisplay,
    secondsDisplay,
    audioEndTimer,
    buttonPlay,
    buttonPause
}) {
    let timeout

    function countdown() {
        timeout = setTimeout(function(){
            let newMinutes = Number(minutesDisplay.textContent)
            let newSeconds = Number(secondsDisplay.textContent)

            if(newMinutes == 0 && newSeconds == 0){
                reset()
                audioEndTimer.play()
                return
            }
            
            --newSeconds

            if(newSeconds < 0){
                newSeconds = 60
                --newMinutes
                --newSeconds
            }

            
            minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
            secondsDisplay.textContent = String(newSeconds).padStart(2,'0')

            countdown()
        }, 1000)
    }

    function reset() {
        minutesDisplay.textContent = String(minutesDefault).padStart(2,'0')
        secondsDisplay.textContent = String(secondsDefault).padStart(2,'0')
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function hold() {
        clearTimeout(timeout)
    }

    return {
        countdown,
        reset,
        hold
    }
}

export {Timer}