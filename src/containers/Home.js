import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../stylesheets/main.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>/home</div>
        <h1>This is the Home page</h1>
        <Link to="/about">Go to About</Link>
      </div>
    );
  }
}
