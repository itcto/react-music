import React, {Component} from 'react'
import Slide from 'base/slide/silde'
import Scroll from 'base/scroll/scroll'
import {getBanner} from 'api'
import './find.css';

class Find extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      banners: []
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
        // console.log(this.state)
      }
    })
  }
  
  render() {
    return (
      <div className="Find">
        <Scroll>
          <div>
            {this.state.banners && <Slide ref="slide" data={this.state.banners}></Slide>}
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </Scroll>
      </div>
    );
  }
}

export default Find;
