import SETTINGS from "./settings.js"


const dropdown_button = 
    document.querySelector(SETTINGS.DROPDOWN_PARENT + " " + SETTINGS.DROPDOWN_BUTTON)
const dropdown_pane = 
    document.querySelector(SETTINGS.DROPDOWN_PARENT + " " + SETTINGS.DROPDOWN_PANE)

dropdown_pane.style.display = "none"

dropdown_button.addEventListener('click', (_e) => {
    const display_prop = dropdown_pane.style.display
    dropdown_pane.style.display = display_prop == "none" ? "" : "none"
})
