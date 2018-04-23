import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Find from 'pages/find/find'
import My from 'pages/my/my'

export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/find" component={Find}/>
          <Route path="/my" component={My}/>
          <Redirect to="/find"/>
        </Switch>
      </HashRouter>
    )
  }
}
