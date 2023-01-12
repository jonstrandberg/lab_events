document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const newItemForm = document.querySelector('#new-item-form') 
  newItemForm.addEventListener ("submit", (evt) => {
    evt.preventDefault()
    const newListElement = document.createElement("li")
    const list = document.querySelector("ul")
    newListElement.textContent = `
    ${evt.target.title.value}
    ${evt.target.author.value}
    ${evt.target.category.value}
    `
    document.querySelector('#new-item-form').reset()
    list.appendChild(newListElement)
  })



})
