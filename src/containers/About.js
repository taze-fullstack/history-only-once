import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div>/about</div>
        <h1>This is the About page</h1>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
}
