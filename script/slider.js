

export default class Slider {
  constructor(el) {
    this.el = el
    this.boxLength = this.el.children.length * 100
    this.el.style.width = `${this.boxLength}%`
  }
  run() {
    let povit = this.el.clientWidth / 6;
    let n = 0;
    let id = setInterval(() => {
      n += 1
      this.el.style.transition = 'left 1s cubic-bezier(.35, .79, .77, 1.01)'
      this.el.style.left = `-${povit * n}px`
      if (n >= 5) {
        setTimeout(() => {
          this.el.style.transition = ''
          n = 0
          this.el.style.left = `-${povit * n}px`
        }, 1000)
      }
    }, 1500)
  }

}

// let sliderImg = document.querySelector('.slider_img')
// //容器长度
// let boxLength = sliderImg.children.length * 100
// sliderImg.style.width = `${boxLength}%`

// let povit = sliderImg.clientWidth / 6;
// let n = 0;
// let id = setInterval(() => {
//   n += 1
//   sliderImg.style.transition = 'left 1s cubic-bezier(.35, .79, .77, 1.01)'
//   sliderImg.style.left = `-${povit * n}px`
//   if (n >= 5) {
//     sliderImg.style.transition = ''
//     n = 0
//     sliderImg.style.left = `-${povit * n}px`
//   }
// }, 1000)