import { stop } from './actions.js'
import * as display from './display.js'
import { state } from './state.js'

export function countDown() {
    clearTimeout(state.countDownId)
    
    let minutes = Number(display.minutes.textContent)
    let seconds = Number(display.seconds.textContent)

    if(!state.isRunning) return
    
    seconds--
    
    if(seconds < 0) {
        minutes--
        seconds = 59
    }
    
    if(minutes < 0) {
        stop()
        return
    }
    
    state.countDownId = setTimeout(() => countDown(), 1000)

    updateTimer(minutes, seconds)
}

export function updateTimer(minutes, seconds) {
    minutes = minutes ?? state.minutes // Se não houver parametro na instância então ele puxa os dados do state
    seconds = seconds ?? state.seconds

    display.minutes.textContent = String(minutes).padStart(2, "0")
    display.seconds.textContent = String(seconds).padStart(2, "0")
}