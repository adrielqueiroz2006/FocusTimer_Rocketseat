import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDiplay,
  secondsDisplay,
} from "./elements.js"

const controls = Controls({ buttonPlay, buttonPause, buttonSet, buttonStop })

const timer = Timer({
  minutesDiplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

Events({ controls, timer, sound, minutesDiplay })
