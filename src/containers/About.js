import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <div>/about</div>
      <h1>This is the About page</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default About;
