import AjaxReq from './ajax.js'
import Slider from './slider.js'


const sliderFun = () => {
  let getData = new AjaxReq()
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
  });
}
export default sliderFun