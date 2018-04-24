import React, {Component} from 'react'
import './play.less'

class Play extends Component {
  render(){
    return(
      <div className="play">
        我是播放器组件（等待制作中）
        <audio ref="audio" src="https://music.163.com/song/media/outer/url?id=33756016.mp3" preload="auto" autoPlay loop>
          您的浏览器不支持 audio 元素。
        </audio>
      </div>
    )
  }
}

export default Play
