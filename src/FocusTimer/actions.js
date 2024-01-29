import { state } from './state.js'
import * as timer from './timer.js'
import * as display from './display.js'

export function running() {    
    state.isRunning = true

    if(!state.countDownId) {
        state.minutes = Number(display.minutes.textContent)
    }

    timer.countDown()
}

export function stop() {
    if(!state.isRunning) {
        timer.updateTimer() // Reset timer to default
    }

    state.isRunning = false
}

export function addMoreMinutes() {
    const minutesAdded = Number(display.minutes.textContent) + 5

    handleMinutes(minutesAdded)
}

export function takeMoreMinutes() {
    const minutesTaked = Number(display.minutes.textContent) - 5

    handleMinutes(minutesTaked)
}

function handleMinutes(minutes) {
    if(minutes > 60) {
        timer.updateTimer(60, 0)
        return
    }

    if(minutes < 0) {
        timer.updateTimer(0, 0)
        return
    }

    timer.updateTimer(minutes, 0)
}