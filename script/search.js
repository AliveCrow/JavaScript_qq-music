let input = document.querySelector('.search_form_input')

input.addEventListener('focus', (e) => {
  console.log(e.target.dataset.type);
  if (e.target.dataset.type !== 'search') return

  let content = document.querySelector(e.target.dataset.view)
  if (content) {
    content.style.display = 'block'
  }
})

input.addEventListener('blur', (e) => {
  let content = document.querySelector('.search_view')
  if (content) {
    content.style.display = 'none'
  }
})
