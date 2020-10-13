import { LyricInit } from './lyriceClass.js';
import { Prograss } from './prograssClass.js'


export class Play {
  constructor(el) {
    this.el = el
    this.el.addEventListener('click', this)
    this.bar_box = document.querySelector('.bar_box');
    this.lyric = new LyricInit(document.querySelector('.lyrice_move'), this.audio)
    this.audio = this.createAudio()
    this.prograss = new Prograss(document.querySelector('.bar_prograss'))
    this.go_top = document.querySelector('.go_top')
    this.Event = {
      'bar_box': '.bar_box',
      'go_top': '.go_top',
      'play_view': '.play_view',
      'header_right': '.header_right'
    }
    this.prograss.render()
  }

  createAudio() {

    let audio = document.createElement('audio')
    audio.id = `player-${Math.floor(Math.random() * 100)}-${+new Date}`
    audio.autoplay = true
    // audio.src = `
    // http://122.226.161.16/amobile.music.tc.qq.com/C4000000NpyS0N53eQ.m4a?guid=2796982635&vkey=897581EF14BBE7548206DD34172383861DCF73621A0F16298E12CB50902820F11B537763DE14FC0C6C2F23A8D6DD2CB6441DE16B7C5C8921&uin=2404&fromtag=66
    // `
    audio.src = 'http://qiniu.dreamsakula.top/C4000000NpyS0N53eQ.mp4'
    audio.addEventListener('ended', (e) => {
      this.audio.play()
      this.lyric.restartScroll()
      this.prograss.restart();
    })
    document.body.appendChild(audio)
    return audio
  }
  handleEvent(event) {
    let target = event.target
    switch (true) {
      case target.matches('.bar_play'):
        document.querySelector('.bar_pause').classList.remove('hidden')
        document.querySelector('.bar_play').classList.add('hidden')
        this.onPlay(event)
        break
      case target.matches('.bar_pause'):
        document.querySelector('.bar_play').classList.remove('hidden')
        document.querySelector('.bar_pause').classList.add('hidden')
        this.onPause(event)
        break
      case target.matches('.top'):
        this.hide()
        break
    }
  }


  onPlay(Event) {
    this.audio.play()
    this.lyric.startScroll()
    this.prograss.run()
  }
  onPause(event) {
    this.audio.pause()
    this.lyric.stopScroll()
    this.prograss.stop()
  }
  show() {
    this.el.style.transform = 'translateY(0%)'
  }
  hidden() {
    this.el.style.transform = 'translateY(-220vw)';
  }
}