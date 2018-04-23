import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"
// import {Route, Switch, NavLink,Redirect} from "react-router-dom"
// import {Router, Route, Redirect, Link} from 'react-router'
import './App.less';

import Recommend from 'pages/recommend/recommend'
import Find from 'pages/find/find'
import My from 'pages/my/my'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="tab">
            <NavLink className="tab-item" to="/recommend">推荐</NavLink>
            <NavLink className="tab-item" to="/find">发现</NavLink>
            <NavLink className="tab-item" to="/my">我的</NavLink>
          </div>
          <div className="tab-content">
            <Switch>
              <Route path="/recommend" component={Recommend}/>
              <Route path="/find" component={Find}/>
              <Route path="/my" component={My}/>
              <Redirect to="/recommend"/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
