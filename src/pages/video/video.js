import React, {Component} from 'react'
import Loading from 'base/loading/loading'
import './video.css';

class Video extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
    
    }
  }
  
  componentDidMount() {
  
  }
  
  render() {
    return (
      <div className="Find">
        <Loading text="功能开发中..."></Loading>
      </div>
    );
  }
}

export default Video;
