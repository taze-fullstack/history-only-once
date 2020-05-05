import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

const About = () => {
  let history = useHistory();

  if (!sessionStorage.getItem('visitedUrls')) {
    sessionStorage.setItem('visitedUrls', '[]');
  } else {
    let visitedUrls = JSON.parse(sessionStorage.getItem('visitedUrls'));
    visitedUrls.push('/about');
    sessionStorage.setItem('visitedUrls', JSON.stringify(visitedUrls));
  }

  useEffect(() => {
    if (sessionStorage.getItem('visitedUrls')) {
      let visitedUrls = JSON.parse(sessionStorage.getItem('visitedUrls'));
      if (visitedUrls.indexOf('/about') !== -1) {
        history.push('/');
      }
    }
  }, []);

  return (
    <div className="about">
      <div>/about</div>
      <h1>This is the About page</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default About;
