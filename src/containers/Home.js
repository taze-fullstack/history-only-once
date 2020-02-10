import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div>/home</div>
      <h1>This is the Home page</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
};

export default Home;
