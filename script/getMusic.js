const { default: Ajax } = require("./ajax")
import api from './music_api'

export class GetMusic {
  constructor(songmid) {
    this.songmid = songmid
    this.musicData
    this.ajax = new Ajax()
  }

  getMusicData() {
    return this.ajax.req('GET', `${api.SongMessage}${this.songmid}`)
  }

  getSongmid() {
    
  }



}