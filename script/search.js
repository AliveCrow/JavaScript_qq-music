let input = document.querySelector('.search_form_input')
let search_form_button = document.querySelector('.search_form_button')

input.addEventListener('focus', (e) => {
  if (e.target.dataset.type !== 'search') return
  search_form_button.style.display = 'block'
})

search_form_button.addEventListener('click', (e) => {
  search_form_button.style.display = 'none'
  input.value = ""

  document.querySelector('.search-view-result').classList.add('hidden')
  document.querySelector('.search-view-result-ul').innerHTML = ''
  document.querySelector('.search-view-hot').classList.remove('hidden')
})


