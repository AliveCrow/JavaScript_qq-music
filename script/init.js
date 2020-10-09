import AjaxReq from './ajax.js'
import Slider from './slider.js'
import AblumList from './ablum_list.js'
import lazyLoad from './lazy_load.js'

let getData = new AjaxReq()
const init = {
  slider() {
    let banner = getData.req('GET', 'http://localhost:3300/recommend/banner')
    //加载轮播图
    banner.then(res => {
      let song = JSON.parse(res)
      let sliderImg = document.querySelector('.slider').firstElementChild
      song.data.push(song.data[0])
      sliderImg.innerHTML = song.data.map(item => {
        return `<a href="${item.h5Url}">
            <img src="${item.picUrl}" alt="" />
          </a>`
      }).join("")
      let slider = new Slider(document.querySelector('.slider_img'))
      slider.run()
    })
  },

  ablumList() {
    let songList = getData.req('GET', 'http://localhost:3300/songlist/list?category=165')
    songList.then(res => {
      let songList = JSON.parse(res)
      songList.data.list.map(item => {
        let ablumList = new AblumList(item)
        ablumList.render()

        lazyLoad(document.querySelectorAll('.lazy_load')) //懒加载
      })
    })
  }

  
}

export default init