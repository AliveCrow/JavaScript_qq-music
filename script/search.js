let input = document.querySelector('.search_form_input')
hot()
input.addEventListener('focus', (e) => {
  console.log(e.target.dataset.type);
  if (e.target.dataset.type !== 'search') return

  let content = document.querySelector(e.target.dataset.view)
  if (content) {
    content.style.display = 'block'
  }
})

input.addEventListener('blur', (e) => {
  input.value = ""
  let content = document.querySelector('.search_view')
  if (content) {
    content.style.display = 'none'
  }
})

//热门搜索
function hot(item) {
  let search_view_hot_ul = document.querySelector('.search-view-hot-ul')
  let dom = document.createElement('li')
  dom.innerHTML =
    `
  <li>${item}</li>
  `
  search_view_hot_ul.appendChild(dom)


}

