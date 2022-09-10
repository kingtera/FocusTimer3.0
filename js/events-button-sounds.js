function ButtonSoundEvents({
    buttonSoundRain,
    buttonSoundForest,
    buttonSoundCafeteria,
    buttonSoundFireplace,
    svgSoundForest,
    svgSoundRain,
    svgSoundCafeteria,
    svgSoundFireplace,
    auxButtonSoundForest,
    auxButtonSoundRain,
    auxButtonSoundCafeteria,
    auxButtonSoundFireplace,
    sounds
}) {
    const inputForest = document.querySelector('#forestVolume')
    const inputRain = document.querySelector('#rainVolume')
    const inputCafeteria = document.querySelector('#cafeteriaVolume')
    const inputFireplace = document.querySelector('#fireplaceVolume')

    function resetAudioButtons() {
        if(verifyIfDarkModeIsOn()){
            auxButtonSoundForest.classList.remove('dark-button-sound-selected')
            auxButtonSoundRain.classList.remove('dark-button-sound-selected')
            auxButtonSoundCafeteria.classList.remove('dark-button-sound-selected')
            auxButtonSoundFireplace.classList.remove('dark-button-sound-selected')
            buttonSoundForest.classList.remove('dark-buttonSoundSelected')
            buttonSoundRain.classList.remove('dark-buttonSoundSelected')
            buttonSoundCafeteria.classList.remove('dark-buttonSoundSelected')
            buttonSoundFireplace.classList.remove('dark-buttonSoundSelected')
            svgSoundForest.firstElementChild.classList.remove('dark-svgSelectedPath')
            svgSoundRain.firstElementChild.classList.remove('dark-svgSelectedPath')
            svgSoundCafeteria.firstElementChild.classList.remove('dark-svgSelectedPath')
            svgSoundFireplace.firstElementChild.classList.remove('dark-svgSelectedPath')
        } else {
            auxButtonSoundForest.classList.remove('button-sound-selected')
            auxButtonSoundRain.classList.remove('button-sound-selected')
            auxButtonSoundCafeteria.classList.remove('button-sound-selected')
            auxButtonSoundFireplace.classList.remove('button-sound-selected')
            buttonSoundForest.classList.remove('buttonSoundSelected')
            buttonSoundRain.classList.remove('buttonSoundSelected')
            buttonSoundCafeteria.classList.remove('buttonSoundSelected')
            buttonSoundFireplace.classList.remove('buttonSoundSelected')
            svgSoundForest.firstElementChild.classList.remove('svgSelectedPath')
            svgSoundRain.firstElementChild.classList.remove('svgSelectedPath')
            svgSoundCafeteria.firstElementChild.classList.remove('svgSelectedPath')
            svgSoundFireplace.firstElementChild.classList.remove('svgSelectedPath')
        }
    }

    function statusSelected(button, svg, sound, input, auxButton) {
        if(button.classList.contains('buttonSoundSelected')) {
            resetAudioButtons()
            sounds.pauseAllAudios()
        } else {
            resetAudioButtons()
            auxButton.classList.add('button-sound-selected')
            button.classList.add('buttonSoundSelected')
            svg.firstElementChild.classList.add('svgSelectedPath')
            input.classList.add('button-sound-selected')
            sounds.pauseAllAudios()
            sound.play()
        }
    }

    function statusDarkModeSelected(button, svg, sound, input, auxButton) {
        if(button.classList.contains('dark-buttonSoundSelected')) {
            resetAudioButtons()
            sounds.pauseAllAudios()
        } else {
            resetAudioButtons()
            auxButton.classList.add('dark')
            button.classList.add('dark-buttonSoundSelected')
            svg.firstElementChild.classList.add('dark-svgSelectedPath')
            input.classList.add('dark')
            sounds.pauseAllAudios()
            sound.play()
        }
    }

    function verifyIfDarkModeIsOn() {
        let verifierByBody = document.querySelector('body').classList.contains('darkModeBackground')
        return verifierByBody
    }

    buttonSoundForest.addEventListener('click', function() {
        if(verifyIfDarkModeIsOn()) {
            statusDarkModeSelected(buttonSoundForest, svgSoundForest, sounds.audioForest, inputForest, auxButtonSoundForest)
        } else {statusSelected(buttonSoundForest, svgSoundForest, sounds.audioForest, inputForest, auxButtonSoundForest)}
    })
    inputForest.addEventListener('input', function() {
        sounds.audioForest.volume = inputForest.value
    })

    buttonSoundRain.addEventListener('click', function() {
        if(verifyIfDarkModeIsOn()) {
            statusDarkModeSelected(buttonSoundRain, svgSoundRain, sounds.audioRain, inputRain, auxButtonSoundRain)
        } else{statusSelected(buttonSoundRain, svgSoundRain, sounds.audioRain, inputRain, auxButtonSoundRain)}
    })
    inputRain.addEventListener('input', function() {
        sounds.audioRain.volume = inputRain.value
    })

    buttonSoundCafeteria.addEventListener('click', function() {
        if(verifyIfDarkModeIsOn()) {
            statusDarkModeSelected(buttonSoundCafeteria, svgSoundCafeteria, sounds.audioCafeteria, inputCafeteria, auxButtonSoundCafeteria)
        } else {statusSelected(buttonSoundCafeteria, svgSoundCafeteria, sounds.audioCafeteria, inputCafeteria, auxButtonSoundCafeteria)}
    })
    inputCafeteria.addEventListener('input', function() {
        sounds.audioCafeteria.volume = inputCafeteria.value
    })

    buttonSoundFireplace.addEventListener('click', function() {
        if(verifyIfDarkModeIsOn()) {
            statusDarkModeSelected(buttonSoundFireplace, svgSoundFireplace, sounds.audioFireplace, inputFireplace, auxButtonSoundFireplace)
        } else {statusSelected(buttonSoundFireplace, svgSoundFireplace, sounds.audioFireplace, inputFireplace, auxButtonSoundFireplace)}
    })
    inputFireplace.addEventListener('input', function() {
        sounds.audioFireplace.volume = inputFireplace.value
    })
}

export { ButtonSoundEvents }