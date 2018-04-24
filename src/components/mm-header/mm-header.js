import React from 'react'
import {NavLink} from 'react-router-dom'
import './mm-header.less'

const MmHeader = () => (
  <header className="mm-header">
    <div className="mm-header-left"></div>
    <div className="mm-header-title">
      <NavLink className="mm-header-item discover" to="/discover"></NavLink>
      <NavLink className="mm-header-item video" to="/video"></NavLink>
      <div className="mm-header-item friends" to="/friends"></div>
    </div>
    <div className="mm-header-right"></div>
  </header>
);

export default MmHeader
