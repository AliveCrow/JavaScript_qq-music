
const { default: Ajax } = require("./ajax");


export class LyricInit {
    constructor(el, audio) {
        this.el = el //歌词渲染的父节点
        this.lyric = ''
        this.text = ''
        this.time = 0
        this.index = 0
        this.audio = audio
        this.intervalId = null
        this.LINE_HEIGHT = 42
        this.getData = new Ajax()
        this.formatText()
    }

    formatText(text) {
        // let dom = document.createElement('div')
        // dom.innerHTML = text
        // return dom.innerText
        // 
        this.getData.req('GET', 'http://localhost:3300/lyric?songmid=002OEYa71wMnH3').then(res => {
            let dom = document.createElement('div')
            dom.innerHTML = JSON.parse(res).data.lyric
            this.lyric = dom.innerText.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm)
            if (this.lyric !== null) {
                this.render()
            } else {
                console.error('没有歌词')
            }
        })
    }
    render() {
        let html = this.lyric.map(item => {
            return `<div class="player-lyrics-line">${item.slice(10)}</div>`
        }).join('')
        this.el.innerHTML = html
    }
    getSec(lyric) {
        //单句歌词的时间
        return lyric.replace(/^\[(\d{2}):(\d{2}).*/, (match, p1, p2) => 60 * (+p1) + (+p2))
    }
    updateScroll() {
        this.time = Math.round(this.audio ? this.audio.currentTime : this.time + 1)
        if (this.index === this.lyric.length - 1) return
        for (let i = this.index; i < this.lyric.length; i++) {
            let sec = this.getSec(this.lyric[i])
            if (this.time === +sec &&
                (!this.lyric[i + 1] || this.time < this.getSec(this.lyric[i + 1]))
            ) {
                this.el.children[this.index].classList.remove('active')
                this.el.children[i].classList.add('active')
                this.index = i
                break
            }
            if (this.index > 2) {
                let y = -(this.index - 2) * this.LINE_HEIGHT
                this.el.style.transform = `translateY(${y}px)`
            }

        }
    }
    startScroll() {
        this.stopScroll()
        setInterval(this.updateScroll.bind(this), 1000)
    }
    stopScroll() {
        clearInterval(this.intervalId)
    }
    restartScroll() {
        this.resetScroll()
        this.startScroll()
    }

    resetScroll(text) {
        this.stopScroll()
        this.time = 0
        this.index = 0

        this.el.style.transform = `translateY(0px)`
        let active = document.querySelector('.active')
        if (active) {
            active.classList.remove('active')
        }

        if (text) {
            this.text = this.formatText(text) || ''
            this.lyric = this.text.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm) || []
            if (this.lyric.length) this.render()
        }

        if (this.lyric.length) {
            this.el.children[this.index].classList.add('active')
        }

    }


}
