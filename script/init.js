
import Slider from './slider.js'
import AblumList from './ablum_list.js'
import lazyLoad from './lazy_load.js'
import Rank from './rank.js';


const { default: Ajax } = require("./ajax");


const init = {
  getData: new Ajax(),
  page: 1,
  singer: {
    'singerName': '',
    'songNum': '',
    'singerPic': '',
    'albumNum': '',
  },
  page: 1,
  keyContainer: document.querySelector('.search_form_input'),
  search_form: document.querySelector('.search_form'),
  input: document.querySelector('.search_form_input'),
  search_view_hot: document.querySelector('.search-view-hot'),
  search_result: document.querySelector('.search-view-result'),
  search_view_result_ul: document.querySelector('.search-view-result-ul'),

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

  search() {
    let _this = this
    window.addEventListener('keyup', function (e) {
      if (e.code !== 'Enter') return
      //是否是歌手
      let search = _this.getData.req('GET', `http://localhost:3300/search?key=${_this.input.value}&t=0&pageSize=20&pageNo=${_this.page}`)
      search.then(res => {
        let list = JSON.parse(res).data.list
        let dom_singList = document.createElement('li')
        list.map(list_item => {
          _this.renderList(list_item)
        })
        _this.search_view_hot.classList.add('hidden')
        _this.search_result.classList.remove('hidden')
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
    window.addEventListener('scroll', function (e) {
      if (pageYOffset + document.documentElement.clientHeight > document.body.scrollHeight - 50) {
        _this.page += 1
        let search = _this.getData.req('GET', `http://localhost:3300/search?key=${_this.input.value}&t=0&pageSize=20&pageNo=${_this.page}`)
        search.then(res => {
          let list = JSON.parse(res).data.list
          let dom_singList = document.createElement('li')
          list.map(list_item => {
            _this.renderList(list_item)
          })
          _this.search_view_hot.classList.add('hidden')
          _this.search_result.classList.remove('hidden')
        })
      }
    })
  }

  //点击热门搜索



}

export default init