function Controls({
    minutesDisplay,
    buttonPlay,
    buttonPause,
    timer
}) {
    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    }

    function pause() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        timer.hold()
    }

    function increaseMinutes() {
        let minutesIncreased = Number(minutesDisplay.textContent) + 5
        minutesDisplay.textContent = String(minutesIncreased).padStart(2, '0')
    }

    function decreaseMinutes() {
        let minutesDecreased = Number(minutesDisplay.textContent) - 5
        
        if(minutesDecreased < 0) {
            alert('Atenção: Os minutos não podem ser negativos!')
            return
        }

        minutesDisplay.textContent = String(minutesDecreased).padStart(2, '0')
    }

    return {
        play,
        pause,
        increaseMinutes,
        decreaseMinutes
    }
}

export { Controls }