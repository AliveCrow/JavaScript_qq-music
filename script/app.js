import init from './init.js';
import './tab.js'
import './search.js'


const render = () => {
  init.slider()
  init.ablumList()
  init.rankList()
  init.hotWord()
  init.search()
  init.scrollLoad()
  // ablumList() //个单加载
}

render()


