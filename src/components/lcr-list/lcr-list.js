import React from 'react'
import PropTypes from 'prop-types'
import './lcr-list.less'

const LcrList = (props) => {
  const {title, data} = props;
  return (
    <div className="lcrlist">
      <h3 className="lcrlist-hd">{title}</h3>
      <ul className="lcrlist-bd">
        {
          data.length > 0 && data.map((item, index) => {
            return (
              <li className="lcrlist-item" key={item.id}>
                <div className="item-img">
                  <img src={`${item.picUrl}?param=200y200`} alt=""/>
                </div>
                <p className="item-title">{item.name.replace(/\s/g, ' ')}</p>
                <span className="item-play">{item.playCount}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};

LcrList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired
};

export default LcrList
