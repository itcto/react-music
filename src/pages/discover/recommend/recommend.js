import React, {Component} from 'react';
import Scroll from 'base/scroll/scroll'
import Slide from 'base/slide/silde'
import LcrList from 'components/lcr-list/lcr-list'
import {getBanner, getPersonalized} from 'api'
import './recommend.less'

class Recommend extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      banners: [],//banner数组
      getDate: new Date().getDate(),//当前日期
      personalized: [],//推荐歌单
    }
  }
  
  componentDidMount() {
    getBanner()
    .then(res => {
      // console.log(res)
      if (res.data.code === 200) {
        this.setState({
          banners: res.data.banners
        });
        this.refs.slide.refresh()
      }
    });
    getPersonalized()
    .then(res => {
      // console.log(res);
      if (res.data.code === 200) {
        this.setState({
          personalized: res.data.result
        })
      }
    });
  }
  
  render() {
    const {personalized,getDate} = this.state;
    return (
      <div className="Recommend">
        <Scroll options={{bounce:false}}>
          {this.state.banners && <div className="banner"><Slide ref="slide" data={this.state.banners}></Slide></div>}
          <ul className="menu">
            <li className="menu-item fm">
              <div className="menu-icon"></div>
              <p>私人FM</p>
            </li>
            <li className="menu-item daily">
              <div className="menu-icon" data-date={getDate}></div>
              <p>每日推荐</p>
            </li>
            <li className="menu-item playlist">
              <div className="menu-icon"></div>
              <p>歌单</p>
            </li>
            <li className="menu-item rank">
              <div className="menu-icon"></div>
              <p>排行榜</p>
            </li>
          </ul>
          <LcrList title="推荐歌单" data={personalized}></LcrList>
        </Scroll>
      </div>
    );
  }
}

export default Recommend;
