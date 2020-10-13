

export class Prograss {
  constructor(el) {
    this.el = el
    this.bar_box = document.querySelector('.bar_box')
    this.audio = document.querySelector('audio')
    this.now_time = document.querySelector('.now_time')
    this.currentTime = 0
    this.id = null
  }

  run() {
    this.id = setInterval(() => {
      this.update
    }, 50)
  }
  stop() {
    clearInterval(this.id)
  }
  update() {
    let allTime = this.audio.duration
    if (this.currentTime >= time) this.reset()
    this.currentTime += 0.05
    let percent = (this.currentTime / allTime) * 100 - 100
    this.el.style.transform = `translateX(${percent}%)`
    this.now_time.innerHTML = this.formatTime(this.n)
  }
  reset() {
    this.stop()
    this.currentTime = 0
    this.id = null
    this.el.style.transform = `translateX(${0}%)`
    this.now_time.innerHTML = this.formatTime(this.n)

  }
  formatTime() {
    let min = Math.floor(this.currentTime / 60)
    let sec = Math.floor(this.currentTime % 60)
    if (min < 10) min = '0' + min
    if (sec < 10) sec = '0' + sec
    return `${min}:${sec}`
  }
}