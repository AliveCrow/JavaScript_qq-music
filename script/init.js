
import Slider from './slider.js'
import AblumList from './ablum_list.js'
import lazyLoad from './lazy_load.js'
import Rank from './rank.js';

const { default: Ajax } = require("./ajax");

const init = {
  getData: new Ajax(),
  page: 1,
  slider() {
    let banner = this.getData.req('GET', 'http://localhost:3300/recommend/banner')
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
    let songList = this.getData.req('GET', 'http://localhost:3300/songlist/list?category=165')
    songList.then(res => {
      let songList = JSON.parse(res)
      songList.data.list.map(item => {
        let ablumList = new AblumList(item)
        ablumList.render()

        lazyLoad(document.querySelectorAll('.lazy_load')) //懒加载
      })
    })
  },

  rankList() {
    let rankList = this.getData.req('GET', 'http://localhost:3300/top/category?showDetail=1')
    rankList.then(res => {
      let newArray = []
      let resData = JSON.parse(res);
      [].slice.call(resData.data)
      resData.data.forEach(item => {
        item.list.forEach(listItem => {
          newArray.push(listItem)
        })
      })
      newArray.map(item => {
        let rankRender = new Rank(item)
        rankRender.render()
      })
    })
  },

  hotWord() {
    let hotWord = this.getData.req('GET', 'http://localhost:3300/search/hot')
    hotWord.then(res => {
      console.log(JSON.parse(res));
      JSON.parse(res).data.map(item => {
        let search_view_hot_ul = document.querySelector('.search-view-hot-ul')
        let dom = document.createElement('li')
        dom.innerHTML =
          `
      <li>${item.k}</li>
      `
        search_view_hot_ul.appendChild(dom)
      })

    })
  },

  search(page) {
    console.log('run');
    let _this = this
    let keyContainer = document.querySelector('.search_form_input')
    let search_form = document.querySelector('.search_form')
    let input = document.querySelector('.search_form_input')
    let search_view_hot = document.querySelector('.search-view-hot')
    let search_result = document.querySelector('.search-view-result')
    let search_view_result_ul = document.querySelector('.search-view-result-ul')
    search_form.addEventListener('submit', function (e) {
      e.preventDefault()
      //是否是歌手
      _this.getData.req('GET', `http://localhost:3300/search?key=${input.value}&t=9`).then(singer => {
        if (JSON.parse(singer).data.list !== []) {
          let singerName = JSON.parse(singer).data.list[0].singerName
          let songNum = JSON.parse(singer).data.list[0].songNum
          let singerPic = JSON.parse(singer).data.list[0].singerPic
          let albumNum = JSON.parse(singer).data.list[0].albumNum

          let search = _this.getData.req('GET', `http://localhost:3300/search?key=${input.value}&t=0&pageSize=20&pageNo=${page || _this.page}`)
          search.then(res => {
            console.log("ryn");
            let list = JSON.parse(res).data.list
            console.log(list);
            let dom_singer = document.createElement('a')
            dom_singer.classList.add('result')
            dom_singer.innerHTML =
              `<img src="${singerPic}" alt="" />
            <dl>
              <dt>歌手: ${singerName}</dt>
              <dd>歌曲:${songNum} 专辑:${albumNum}</dd>
            </dl>
            `
            search_result.insertBefore(dom_singer, search_view_result_ul)
            let dom_singList = document.createElement('li')
            list.map(list_item => {
              _this.renderList(list_item)
            })
            search_view_hot.classList.add('hidden')
            search_result.classList.remove('hidden')
          })
        } else {

        }
      })

    })
  },

  renderList(item) {
    let search_view_result_ul = document.querySelector('.search-view-result-ul')
    let dom_singList = document.createElement('li')
    dom_singList.innerHTML =
      `
      <a href="${item.albummid}">
        <dl>
          <dt>${item.songname}</dt>
          <dd>${item.singer[0].name}</dd>
        </dl>
      </a>
    `
    search_view_result_ul.appendChild(dom_singList)
  },

  //滚动加载
  scrollLoad() {
    let _this = this
    let page = 1
    let keyContainer = document.querySelector('.search_form_input')
    let search_form = document.querySelector('.search_form')
    let input = document.querySelector('.search_form_input')
    let search_view_hot = document.querySelector('.search-view-hot')
    let search_result = document.querySelector('.search-view-result')
    let search_view_result_ul = document.querySelector('.search-view-result-ul')
    window.addEventListener('scroll', function (e) {
      if (pageYOffset + document.documentElement.clientHeight > document.body.scrollHeight - 50) {
        page += 1
        _this.getData.req('GET', `http://localhost:3300/search?key=${input.value}&t=9`).then(singer => {
          if (JSON.parse(singer).data.list !== []) {
            let singerName = JSON.parse(singer).data.list[0].singerName
            let songNum = JSON.parse(singer).data.list[0].songNum
            let singerPic = JSON.parse(singer).data.list[0].singerPic
            let albumNum = JSON.parse(singer).data.list[0].albumNum

            let search = _this.getData.req('GET', `http://localhost:3300/search?key=${input.value}&t=0&pageSize=20&pageNo=${page || _this.page}`)
            search.then(res => {
              console.log("ryn");
              let list = JSON.parse(res).data.list
              console.log(list);
              let dom_singer = document.createElement('a')
              dom_singer.classList.add('result')
              dom_singer.innerHTML =
                `<img src="${singerPic}" alt="" />
              <dl>
                <dt>歌手: ${singerName}</dt>
                <dd>歌曲:${songNum} 专辑:${albumNum}</dd>
              </dl>
              `
              search_result.insertBefore(dom_singer, search_view_result_ul)
              let dom_singList = document.createElement('li')
              list.map(list_item => {
                _this.renderList(list_item)
              })
              search_view_hot.classList.add('hidden')
              search_result.classList.remove('hidden')
            })
          } else {

          }
        })
      }
    })
  }

}

export default init