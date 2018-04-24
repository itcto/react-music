import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import MmHeader from 'components/mm-header/mm-header'
import Play from 'components/play/play'
import Discover from 'pages/discover/discover'
import Video from 'pages/video/video'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App mm-music">
          <MmHeader></MmHeader>
          <main className="mm-main">
            <Switch>
              <Route path="/discover" component={Discover}/>
              <Route path="/video" component={Video}/>
              <Redirect to="/discover"/>
            </Switch>
          </main>
          <Play></Play>
        </div>
      </Router>
    );
  }
}

export default App;
