const form = document.querySelector('form')
const list = document.querySelector('.task-list')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    let inputTask = data.get('task')
    
    const newListItem = document.createElement('li')
    newListItem.textContent = inputTask

    list.appendChild(newListItem)

    e.target.reset()

    
})