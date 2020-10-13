
let input = document.querySelector('.search_form_input')
document.addEventListener('click', function (e) {

  //判断点击是否是tab
  if (e.target.dataset.type !== 'tab') return
  if (e.target.dataset.view !== '.search-view') {
    input.value = ''
    document.querySelector('.search-view-result').classList.add('hidden')
    document.querySelector('.search-view-result-ul').innerHTML = ''
    document.querySelector('.search-view-hot').classList.remove('hidden')
  }

  [].forEach.call(e.target.parentElement.children, item => {
    item.classList.remove('active')
  })
  e.target.classList.add('active')

  let content = document.querySelector(e.target.dataset.view)
  if (content) {
    [].forEach.call(content.parentElement.children, item => {
      item.style.display = 'none'
    })
  }
  content.style.display = 'block'
})