import { Timer } from './timer.js'
import { Controls } from './controls.js'
import { Sounds } from './sounds.js'
import { ControlEvents } from './events-controls.js'
import { ButtonSoundEvents } from './events-button-sounds.js'
import { ButtonModeEvents } from './events-button-modes.js'
import { Elements } from './elements.js'

const elements = Elements()

const sounds = Sounds()

const timer = Timer({
    minutesDefault: elements.minutesDefault,
    secondsDefault: elements.secondsDefault,
    minutesDisplay: elements.minutesDisplay,
    secondsDisplay: elements.secondsDisplay,
    audioEndTimer: sounds.audioEndTimer,
    buttonPlay: elements.buttonPlay,
    buttonPause: elements.buttonPause
})

const controls = Controls({
    minutesDisplay: elements.minutesDisplay,
    buttonPlay: elements.buttonPlay,
    buttonPause: elements.buttonPause,
    timer
})

ControlEvents({
    buttonPlay: elements.buttonPlay,
    buttonStop: elements.buttonStop,
    buttonPause: elements.buttonPause,
    buttonIncreaseMinutes: elements.buttonIncreaseMinutes,
    buttonDecreaseMinutes: elements.buttonDecreaseMinutes,
    sounds,
    controls,
    timer
})

ButtonSoundEvents({
    buttonSoundRain: elements.buttonSoundRain,
    buttonSoundForest: elements.buttonSoundForest,
    buttonSoundCafeteria: elements.buttonSoundCafeteria,
    buttonSoundFireplace: elements.buttonSoundFireplace,
    svgSoundForest: elements.svgSoundForest,
    svgSoundRain: elements.svgSoundRain,
    svgSoundCafeteria: elements.svgSoundCafeteria,
    svgSoundFireplace: elements.svgSoundFireplace,
    auxButtonSoundForest: elements.auxButtonSoundForest,
    auxButtonSoundRain: elements.auxButtonSoundRain,
    auxButtonSoundCafeteria: elements.auxButtonSoundCafeteria,
    auxButtonSoundFireplace: elements.auxButtonSoundFireplace,
    sounds
})

ButtonModeEvents({
    buttonLightMode: elements.buttonLightMode,
    buttonDarkMode: elements.buttonDarkMode,
    buttonSoundRain: elements.buttonSoundRain,
    buttonSoundForest: elements.buttonSoundForest,
    buttonSoundCafeteria: elements.buttonSoundCafeteria,
    buttonSoundFireplace: elements.buttonSoundFireplace,
    svgButtonPause: elements.svgButtonPause,
    auxButtonSoundForest: elements.auxButtonSoundForest,
    auxButtonSoundRain: elements.auxButtonSoundRain,
    auxButtonSoundCafeteria: elements.auxButtonSoundCafeteria,
    auxButtonSoundFireplace: elements.auxButtonSoundFireplace
})