
import AjaxReq from './ajax.js'
import Slider from './slider.js'


export default class Ablum {
  constructor(item) {
    this.item = item
  }
  render() {
    let song_list_ul = document.querySelector('.song_list_ul')
    let dom = document.createElement('li');
    dom.innerHTML =
      `<li >
      <a href="">
        <img
          class="img_url lazy_load"
          data-src="${this.item.imgurl}"
          alt=""
        />
        <p>${this.item.dissname}</p>
        <img class="img_btn" alt="img" src='http://qiniu.dreamsakula.top/images/20201009083809.png' />
      </a>
    </li>`
    song_list_ul.appendChild(dom)
  }
}




// function ablumList() {
//   //歌单渲染
//   let getData = new AjaxReq()
//   let songList = getData.req('GET', 'http://localhost:3300/songlist/list?category=165')

//   songList.then(res => {
//     let songList = JSON.parse(res)
//     let song_list_ul = document.querySelector('.song_list_ul')
//     song_list_ul.innerHTML = songList.data.list.map(item => {
//       return `<li>
//     <a href="">
//       <img
//         class="img_url lazy_load"
//         data-src="${item.imgurl}"
//         alt=""
//       />
//       <p>${item.dissname}</p>
//       <img class="img_btn" alt="img" src='http://qiniu.dreamsakula.top/images/20201009083809.png' />
//     </a>
//   </li>`
//     }).join("")
//   })
// }

// export default ablumList