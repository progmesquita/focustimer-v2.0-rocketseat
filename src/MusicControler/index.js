import * as events from './events.js'

const musicControl = document.querySelector("#music-control")

musicControl.onclick = (e) => {
    const button = e.target

    events.toggleMode(button)
}