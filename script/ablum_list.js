

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

