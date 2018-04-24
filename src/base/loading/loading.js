import React from 'react'
import './loading.less'

const Loading = (props) => {
  const {text} = props;
  return (
    <div className="loading-box">
      <div className="loading">
        <div>
          <span className="one"></span>
          <span className="tow"></span>
          <span className="one"></span>
          <span className="tow"></span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  )
};

Loading.defaultProps = {
  text: '努力加载中...'
};

export default Loading
