import { control } from './display.js'
import * as actions from './actions.js'

export function registerActions() {

    control.addEventListener('click', event => {
        const action = event.target.dataset.action

        if(typeof actions[action] !== 'function') return

        actions[action]()
    })
}