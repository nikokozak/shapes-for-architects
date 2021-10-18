import example_list from './example_list.js'
import SETTINGS from '../scripts/settings.js'

const list_wrapper = document.querySelector(SETTINGS.DROPDOWN_LIST)

function make_title_li(section_title) {
    const title_li = document.createElement('li')
    title_li.classList.add('list-title')
    const title = document.createElement('h1')
    title.innerText = section_title

    title_li.appendChild(title)
    return title_li
}

function make_item_li(section, item) 
{
    const item_li = document.createElement('li') 
    item_li.classList.add('list-item')
    const item_thumb = document.createElement('div')
    item_thumb.classList.add('thumb')
    const item_info = document.createElement('div')
    item_info.classList.add('info')
    const item_name = document.createElement('h3')
    item_name.classList.add('name')
    item_name.innerText = item.name
    const item_category = document.createElement('h5')
    item_category.classList.add('category')
    item_category.innerText = section

    item_info.appendChild(item_name)
    item_info.appendChild(item_category)
    item_li.appendChild(item_thumb)
    item_li.appendChild(item_info)
    
    return item_li
}

export function populateExamplesDropdown(editor, ...callbacks)
{
    for (const [section, items] of Object.entries(example_list)) 
    {
        const title_li = make_title_li(section)
        list_wrapper.appendChild(title_li)

        for (const item of items)
        {
            const item_li = make_item_li(section, item)
            item_li.addEventListener('click', (_e) => {
                editor.set_contents(item.code)
                for (const cb of callbacks)
                {
                    cb()
                }
            })
            list_wrapper.appendChild(item_li)
        }
    }
}
