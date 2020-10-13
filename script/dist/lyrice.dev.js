// const { default: Ajax } = require("./ajax");
// const lyriceInit = {
//   getData: new Ajax(),
//   lyrice: '',
//   time: 0,
//   elapsed: 0,//当前播放时间
//   index: 0,
//   audio: null,
//   intervalId: null,
//   LINE_HEIGHT: 42,
//   formatText() {
//     this.audio = document.createElement('audio')
//     this.audio.id = `player-${Math.floor(Math.random() * 100)}-${+new Date()}`
//     this.audio.autoplay = true
//     this.audio.src = `
//     http://122.226.161.16/amobile.music.tc.qq.com/C400004gQ9QA2FNAAq.m4a?guid=2796982635&vkey=543D1C5636374B4114693D9F92F3CFE59FCCF0147EBB310358AE64D12F79576BA9AA62C0C4E1F116B89BAF139901A11757A99A46A504DBC5&uin=1899&fromtag=66
//     `
//     document.body.appendChild(this.audio)
//     this.getData.req('GET', 'http://localhost:3300/lyric?songmid=0014yips0EuFTc').then(res => {
//       let lyrice_move = document.querySelector('.lyrice_move')
//       let el = document.createElement('div')
//       el.innerHTML = JSON.parse(res).data.lyric
//       this.lyrice = el.innerText.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm)
//       if (this.lyrice !== null) {
//         let lyrice = this.lyrice
//         let html = lyrice.map(item => {
//           return `<div class="player-lyrics-line">${item.slice(10)}</div>`
//         }).join('')
//         lyrice_move.innerHTML = html
//         this.update(this.audio)
//       } else {
//         console.error('没有歌词')
//       }
//     })
//   },
//   restart() {
//     this.reset()
//     this.formatText()
//   },
//   lyriceScroll(lyrice) {
//     let lyrice_move = document.querySelector('.lyrice_move')
//     this.elapsed = Math.round(this.audio ? this.audio.currentTime : this.elapsed + 1)
//     if (this.index === lyrice.length - 1) return
//     for (let i = this.index; i < lyrice.length; i++) {
//       //单句歌词的时间
//       let seconds = lyrice[i].replace(/^\[(\d{2}):(\d{2}).*/, (match, p1, p2) => 60 * (+p1) + (+p2))
//       //逻辑:高亮歌曲的时间,当播放时间和歌曲的时间一致的时候,并且要比后面一句的事件大,此时高亮
//       if (
//         this.elapsed === +seconds &&
//         (!lyrice[i + 1] || this.elapsed < lyrice[i + 1].replace(/^\[(\d{2}):(\d{2}).*/, (match, p1, p2) => 60 * (+p1) + (+p2)))
//       ) {
//         lyrice_move.children[this.index].classList.remove('active')
//         lyrice_move.children[i].classList.add('active')
//         this.index = i
//         break
//       }
//       if (this.index > 2) {
//         let y = -(this.index - 2) * this.LINE_HEIGHT
//         lyrice_move.style.transform = `translateY(${y}px)`
//       }
//     }
//   },
//   update(audio) {
//     this.intervalId = setInterval(() => {
//       this.lyriceScroll(this.lyrice)
//       if (this.elapsed >= Math.floor(this.audio.duration)) {
//         console.log(this.elapsed, Math.floor(this.audio.duration));
//         this.reset()
//       }
//     }, 1000)
//   },
//   pause() {
//     clearInterval(this.intervalId)
//   },
//   reset() {
//     this.pause()
//     this.audio.currentTime = 0
//     this.elapsed = 0
//     this.index = 0
//     let lyrice_move = document.querySelector('.lyrice_move')
//     lyrice_move.style.transform = `translateY(0px)`
//     let $active = document.querySelector('active')
//     $active && $active.classList.remove('active')
//   }
// }
"use strict";