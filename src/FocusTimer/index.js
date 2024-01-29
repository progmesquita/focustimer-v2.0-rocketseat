import * as timer from './timer.js'
import { state } from './state.js'
import * as event from './event.js'

export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds ?? state.seconds

    timer.updateTimer(minutes, seconds)

    event.registerActions()
}