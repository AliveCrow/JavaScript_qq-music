function lazyLoad(images) {

  let imgs = [].slice.call(images)  //Array.from(images)转成数组

  //使用api IntersectionObserver 支持不好
  if ('IntersectionObserver' in window) {
    let observer = new IntersectionObserver(function (e) {
      e.forEach(img => {
        if (img.intersectionRatio > 0) {
          loadImage(img.target, () => {
            observer.unobserve(img.target)
          })
        }
      })
    }, { threshold: 0.01 })
    imgs.forEach(img => observer.observe(img))

  } else {
    let onscroll = throttle(function () {
      if (imgs.length === 0) {
        window.removeEventListener('scroll', () => { })
        return
      }
      imgs = imgs.filter(img => img.classList.contains('lazy_load'))
      imgs.forEach(item => {
        if (inViewport(item)) {
          loadImage(item)
        }
      })
    }, 700)
    window.addEventListener('scroll', onscroll)
    window.dispatchEvent(new Event('scroll'))
  }

  function throttle(func, wait) {
    let prev, timer
    return function fn() {
      let curr = Date.now()
      let diff = curr - prev
      if (!prev || diff >= wait) {
        func()
        prev = curr
      } else if (diff < wait) {
        clearTimeout(timer)
        timer = setTimeout(fn, wait - diff)
      }
    }
  }

  function inViewport(img) {
    let { top, left, right, bottom } = img.getBoundingClientRect() //当前图片距离窗口边界的距离
    let vpWidth = document.documentElement.clientWidth
    let vpHeight = document.documentElement.clientHeight
    return (
      (top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight) &&
      (left > 0 && left < vpWidth || right > 0 && right < vpWidth)
    )
  }

  function loadImage(img) {
    let image = new Image()
    image.src = img.dataset.src
    image.onload = function () {
      img.src = image.src
      img.classList.remove('lazyload')
    }
    if (typeof callback === 'function') callback()
  }







}

export default lazyLoad