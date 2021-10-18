import SETTINGS from "./settings.js"

const dropdown_button = document.getElementById(SETTINGS.DROPDOWN_BUTTON)
const dropdown_pane = document.getElementById(SETTINGS.DROPDOWN_PANE)

dropdown_pane.style.display = "none"

dropdown_button.addEventListener('click', (_e) => {
    const display_prop = dropdown_pane.style.display
    dropdown_pane.style.display = display_prop == "none" ? "" : "none"
})
