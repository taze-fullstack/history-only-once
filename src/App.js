import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Header from './components/header'
import Footer from './components/footer'
import Home from './containers/home'
import About from './containers/about'
import NoRouteMatch from './containers/404'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NoRouteMatch} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
