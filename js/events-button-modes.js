function ButtonModeEvents({
    buttonLightMode,
    buttonDarkMode,
    buttonSoundRain,
    buttonSoundForest,
    buttonSoundCafeteria,
    buttonSoundFireplace,
    svgButtonPause,
    auxButtonSoundForest,
    auxButtonSoundRain,
    auxButtonSoundCafeteria,
    auxButtonSoundFireplace
}) {

    function setDarkModeOnSoundButtons() {
        auxButtonSoundForest.classList.add('dark')
        auxButtonSoundRain.classList.add('dark')
        auxButtonSoundCafeteria.classList.add('dark')
        auxButtonSoundFireplace.classList.add('dark')
        buttonSoundRain.classList.add('dark-buttonSound')
        buttonSoundForest.classList.add('dark-buttonSound')
        buttonSoundCafeteria.classList.add('dark-buttonSound')
        buttonSoundFireplace.classList.add('dark-buttonSound')
    }

    function setDarkModeOnAllSvg() {
        let svgList = document.querySelectorAll('svg')
        for(let svgElement of svgList){
            svgElement.firstElementChild.classList.add('dark-svg-modifier')
        }

        let pauseSvgList = svgButtonPause.querySelectorAll('path')
        for(let svgElement of pauseSvgList){
            svgElement.classList.add('dark-svg-modifier')
        }
    }

    function unsetDarkModeOnAllSvg() {
        let svgList = document.querySelectorAll('svg')
        for(let svgElement of svgList){
            svgElement.firstElementChild.classList.remove('dark-svg-modifier')
        }

        let pauseSvgList = svgButtonPause.querySelectorAll('path')
        for(let svgElement of pauseSvgList){
            svgElement.classList.remove('dark-svg-modifier')
        }
    }

    function unsetDarkModeOnSoundButtons() {
        auxButtonSoundForest.classList.remove('dark')
        auxButtonSoundRain.classList.remove('dark')
        auxButtonSoundCafeteria.classList.remove('dark')
        auxButtonSoundFireplace.classList.remove('dark')
        buttonSoundRain.classList.remove('dark-buttonSound')
        buttonSoundForest.classList.remove('dark-buttonSound')
        buttonSoundCafeteria.classList.remove('dark-buttonSound')
        buttonSoundFireplace.classList.remove('dark-buttonSound')
    }

    function changeModeButton() {
        buttonLightMode.classList.toggle('hide')
        buttonDarkMode.classList.toggle('hide')
    }

    buttonLightMode.addEventListener('click', function() {
        changeModeButton()

        document.querySelector('body').classList.add('darkModeBackground')
        document.querySelector('h1').classList.add('dark-h1-modifier')
        
        setDarkModeOnSoundButtons()
        setDarkModeOnAllSvg()
    })

    buttonDarkMode.addEventListener('click', function() {
        changeModeButton()

        document.querySelector('body').classList.remove('darkModeBackground')
        document.querySelector('h1').classList.remove('dark-h1-modifier')

        unsetDarkModeOnSoundButtons()
        unsetDarkModeOnAllSvg()
    })
}

export { ButtonModeEvents }