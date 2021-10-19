/* ==================== EXAMPLE DROPDOWN.JS ====================
 * In dire need of encapsulation, this file contains helper
 * functions for creating and populating the elements in 
 * the examples dropdown. Ultimately, it has to be able to call
 * the "editor" in order to populate its text. This could be abstracted
 * but might complicate everything.
 */

import example_list from './example_list.js'
import SETTINGS from '../settings.js'

const list_wrapper = document.querySelector(SETTINGS.DROPDOWN_LIST)

function make_title_li(section_title) {
    const title_li = document.createElement('li')
    title_li.classList.add('list-title')
    const title = document.createElement('h1')
    title.innerText = section_title

    title_li.appendChild(title)
    return title_li
}

function make_example_li(section, example) 
{
    const example_li = document.createElement('li') 
    example_li.classList.add('list-item')
    const example_thumb = document.createElement('div')
    example_thumb.classList.add('thumb')
    const example_info = document.createElement('div')
    example_info.classList.add('info')
    const example_name = document.createElement('h3')
    example_name.classList.add('name')
    example_name.innerText = example.name
    const example_category = document.createElement('h5')
    example_category.classList.add('category')
    example_category.innerText = section

    example_info.appendChild(example_name)
    example_info.appendChild(example_category)
    example_li.appendChild(example_thumb)
    example_li.appendChild(example_info)
    
    return example_li
}

(function addClickToggleToDropdown () {
    const dropdown_button = 
        document.querySelector(SETTINGS.DROPDOWN_PARENT + " " + SETTINGS.DROPDOWN_BUTTON)
    const dropdown_pane = 
        document.querySelector(SETTINGS.DROPDOWN_PARENT + " " + SETTINGS.DROPDOWN_PANE)

    dropdown_pane.style.display = "none"

    dropdown_button.addEventListener('click', (_e) => {
        const display_prop = dropdown_pane.style.display
        dropdown_pane.style.display = display_prop == "none" ? "" : "none"
    })
}())

export function populateExamplesDropdown(editor, renderFn)
{
    const dropdown_body = document.querySelector(SETTINGS.DROPDOWN_PANE)

    for (const [category, examples] of Object.entries(example_list)) 
    {
        const title_li = make_title_li(category)
        list_wrapper.appendChild(title_li)

        for (const example of examples)
        {
            const example_li = make_example_li(category, example)
            example_li.addEventListener('click', (_e) => {
                editor.set_contents(example.code) // Populate the editor
                dropdown_body.style.display = 'none' // Close the dropdown body
                renderFn()
          })
            list_wrapper.appendChild(example_li)
        }
    }
}


