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
    const {userList} = this.state.userList;
    return (
      <div className="My">
        {/*<Cell></Cell>*/}
        {
          // userList.length > 0 && userList.map((item,index) => ({index}))
        }
        {/*{*/}
          {/*data.length > 0 && data.map((item, index) => (*/}
            {/*<span className={index === currentIndex ? 'dot on' : 'dot'} key={index}>{index}</span>*/}
          {/*))*/}
        {/*}*/}
        我的
      </div>
    )
  }
}

export default My;
