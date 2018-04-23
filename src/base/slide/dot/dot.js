import React from 'react'
import PropTypes from 'prop-types'
import './dot.less'

const Dot = (props) =>{
  const {data, currentIndex} = props;
  return (
    <div className="dots">
      {
        data.length > 0 && data.map((item, index) => (
          <span className={index === currentIndex ? 'dot on' : 'dot'} key={index}>{index}</span>
        ))
      }
    </div>
  )
};

Dot.propTypes = {
  data: PropTypes.array.isRequired,
  currentIndex: PropTypes.number
};

export default Dot
