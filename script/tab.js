document.addEventListener('click', function (e) {

  //判断点击是否是tab
  if (e.target.dataset.type !== 'tab') return

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