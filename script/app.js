import init from './init.js';
import './tab.js';
import './search.js';

import { Play } from './playClass.js'

let header_right = document.querySelector('.header_right');
let go_top = document.querySelector('.go_top');
let play = new Play(document.querySelector('.play_view'))
header_right.addEventListener('click', function (e) {
  play.show()
})
go_top.addEventListener('click', function (e) {
  play.hidden()
})
play.onPlay()


const render = () => {
  init.slider()
  init.ablumList()
  init.rankList()
  init.hotWord()
  init.search()
  init.scrollLoad()

}

render()


