import SETTINGS from "./settings.js"

const dropdown_button = document.getElementById(SETTINGS.DROPDOWN_BUTTON)
const dropdown_pane = document.getElementById(SETTINGS.DROPDOWN_PANE)

dropdown_pane.style.display = "none"
let dropdown_active = false

dropdown_button.addEventListener('click', (_e) => {
    dropdown_active = !dropdown_active
    dropdown_pane.style.display = dropdown_active ? "" : "none"
})
