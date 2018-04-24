import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"
import './discover.less'
import Recommend from 'pages/discover/recommend/recommend'
// import Find from 'pages/discover/find/find'
import My from 'pages/discover/my/my'

class Discover extends Component {
  render() {
    return (
      <Router>
        <div className="discover mm-music">
          <div className="header">
            <NavLink className="header-item" to="/discover/recommend">推荐</NavLink>
            {/*<NavLink className="header-item" to="/discover/my">我的</NavLink>*/}
            {/*<NavLink className="tab-item" to="/find">发现</NavLink>*/}
          </div>
          <main className="mm-main">
            <Switch>
              <Route path="/discover/recommend" component={Recommend}/>
              <Route path="/discover/my" component={My}/>
              {/*<Route path="/discover/find" component={Find}/>*/}
              <Redirect to="/discover/recommend"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default Discover
