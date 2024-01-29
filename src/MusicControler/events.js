import { sounds } from './sounds.js'
import { handleActiveButton } from './display.js'

export function toggleMode(button) {
    const mode = sounds[button.dataset.mode]
    const isActive = handleActiveButton(button)
    
    // Pausa todos os sounds diferentes de mode
    for(let sound in sounds) {
        if(mode !== sounds[sound]) {
            sounds[sound].pause()
        }
    }

    mode.loop = true
    return !isActive ? mode.pause() : mode.play()
}