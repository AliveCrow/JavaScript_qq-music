
export default class Rank {
  constructor(item) {
    this.item = item
  }
  render() {
    let rank_view_ul = document.querySelector('.rank_view_ul')
    let dom = document.createElement('li');
    dom.classList.add('lazy_load')
    dom.innerHTML =
      `<a href="#">
        <dl>
          <dt>${this.item.label}</dt>
          <dd><span>1. </span>${this.item.song[0].title + '-' + this.item.song[0].singerName}</dd>
          <dd><span>2. </span>${this.item.song[1].title + '-' + this.item.song[1].singerName}</dd>
          <dd><span>3. </span>${this.item.song[2].title + '-' + this.item.song[2].singerName}</dd>
        </dl>
        <img src="${this.item.picUrl}" alt="" />
      </a>`
    rank_view_ul.appendChild(dom)
  }
}


