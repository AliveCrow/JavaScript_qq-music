import Slider from './slider.js'
import './tab.js'
import './search.js'
import AjaxReq from './ajax.js'
import sliderFun from './banner.js'
import AblumList from './ablum_list.js'
import lazyLoad from './lazy_load.js'

const render = () => {
  sliderFun() //轮播图
  let getData = new AjaxReq()
  let songList = getData.req('GET', 'http://localhost:3300/songlist/list?category=165')
  songList.then(res => {
    let songList = JSON.parse(res)
    songList.data.list.map(item => {
      let ablumList = new AblumList(item)
      ablumList.render()
      
      lazyLoad(document.querySelectorAll('.lazy_load')) //懒加载
    })
  })


  // ablumList() //个单加载
}

render()


