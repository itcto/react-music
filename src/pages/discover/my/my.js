import React, {Component} from 'react';
import {getUserPlaylist} from 'api'
// import Cell from './cell/cell'

class My extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      userList: []
    }
  }
  
  componentDidMount() {
    getUserPlaylist()
    .then(res => {
      if (res.data.code === 200) {
        this.setState({
          userList: res.data.playlist
        })
      }
    })
  }
  
  render() {
    const {userList} = this.state;
    return (
      <div className="My">
        {
          userList.length > 0 && userList.map((item) => {
            return (
              <li className="lcrlist-item" key={item.id}>
                <div className="item-img">
                  <img src={`${item.coverImgUrl}?param=200y200`} alt=""/>
                </div>
                <p className="item-title">{item.name.replace(/\s/g, ' ')}</p>
                <span className="item-play">{item.playCount}</span>
              </li>
            )
          })
        }
      </div>
    )
  }
}

export default My;
