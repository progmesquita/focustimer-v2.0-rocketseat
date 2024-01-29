export function handleActiveButton(button) {
    document.querySelectorAll("#music-control > button").forEach((item) => {
        if(item.classList.contains('active') && item !== button) {
            item.classList.remove('active')
        }
    })

    return button.classList.toggle("active")
}