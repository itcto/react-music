import React, {Component} from 'react'
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'
import BScroll from "better-scroll"
import Dot from './dot/dot'
import './slide.less';

class Slide extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    interval: PropTypes.number,
    loop: PropTypes.bool,
    threshold: PropTypes.number,
    speed: PropTypes.number
  };
  
  static defaultProps = {
    interval: 4000,//轮播间隔
    loop: true,//是否循环
    autoPlay: true,//是否自动切换
    threshold: 0.1,//滚动到下一个的阈值
    speed: 400,//动画速度
  };
  
  constructor(porps) {
    super(porps);
    this.state = {
      currentPageIndex: 0
    }
  }
  
  componentWillMount() {
    // console.log('Component WILL MOUNT!组件将挂载')
  }
  
  componentDidMount() {
    // console.log('Component DID MOUNT!组件确实挂载')
  }
  
  componentWillReceiveProps(newProps) {
    // console.log('componentWillReceiveProps组件将接收道具!', newProps)
  }
  
  shouldComponentUpdate(newProps, newState) {
    // console.log("newProps", newProps)
    // console.log("newState", newState)
    return true;
  }
  
  componentWillUpdate(nextProps, nextState) {
    // console.log('componentWillUpdate!组件将更新')
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(!this.slider){
      this._initWdith();
      this._initSlide();
      if (this.props.autoPlay) {
        this._play()
      }
    }
    // console.log('Component DID UPDATE!组件更新')
  }
  
  componentWillUnmount() {
    // console.log('Component WILL UNMOUNT组件将卸载!')
  }
  
  //重新计算 better-scroll
  refresh() {
    if (this.slide === null) {
      return false
    }
    if (this.slider) {
      this.slider.refresh()
    }
  }
  
  //初始化 better-scroll
  _initSlide() {
    this.slider = new BScroll(ReactDOM.findDOMNode(this.refs.sildeWrapper), {
      scrollX: true,
      scrollY: false,
      momentum: false,
      snap: {
        loop: this.props.loop,
        threshold: this.props.threshold,
        speed: this.props.speed
      },
      bounce: !this.props.loop,
      stopPropagation: true
    });
    
    this.slider.goToPage(this.state.currentPageIndex, 0, 0);
    
    this.slider.on('scrollEnd', this._onScrollEnd);
  
    this.slider.on('touchend', () => {
      if (this.props.autoPlay) {
        this._play()
      }
    });
  
    this.slider.on('beforeScrollStart', () => {
      if (this.props.autoPlay) {
        clearTimeout(this.timer)
      }
    })
  }
  
  //计算宽度
  _initWdith() {
    let slideWidth = ReactDOM.findDOMNode(this.refs.sildeWrapper).clientWidth;
    let sildeList = ReactDOM.findDOMNode(this.refs.sildeList);
    let width = 0;
    if (sildeList.children.length) {
      for (let i = 0; i < sildeList.children.length; i++) {
        // console.log(sildeList.children[i])
        let child = sildeList.children[i];
        child.style.width = `${slideWidth}px`;
        width += slideWidth
      }
    }
    if (this.props.loop && sildeList.children.length > 1) {
      width += 2 * slideWidth
    }
    ReactDOM.findDOMNode(this.refs.sildeList).style.width = `${width}px`
  }
  
  // 自动切换
  _play = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.slider.next()
    }, this.props.interval)
  };
  
  //滚动结束事件
  _onScrollEnd = () => {
    let pageIndex = this.slider.getCurrentPage().pageX;
    this.setState({
      currentPageIndex: pageIndex
    });
    if (this.props.autoPlay) {
      this._play()
    }
  };
  
  render() {
    const {data} = this.props;
    return (
      <div className="silde-wrapper" ref="sildeWrapper">
        <div className="slide-group" ref="sildeList">
          {
            data && data.length > 0 && data.map((item, index) => {
              return (
                <div className="slide-item" key={item.targetId + index}>
                  <img src={item.pic} alt=""/>
                </div>
              )
            })
          }
        </div>
        <Dot data={data} currentIndex={this.state.currentPageIndex}/>
      </div>
    );
  }
}

export default Slide;
