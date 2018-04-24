import React from 'react'
// import PropTypes from 'prop-types'
import './cell.less'

const Cell = (props) =>{
  // const {data, currentIndex} = props;
  return (
    <div className="list">
      <div className="img">
        <img src="" alt=""/>
      </div>
      <div className="info">
        {}
      </div>
      <span className="btn"></span>
    </div>
  )
};

// Cell.propTypes = {
//   // data: PropTypes.array.isRequired,
//   // currentIndex: PropTypes.number
// };

export default Cell
