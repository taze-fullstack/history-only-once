import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Swiper from 'react-id-swiper'

import '../stylesheets/main.scss'

export default class Home extends Component {
  render() {    return (
      <div>
        <div>This is the Homepage</div>
        <Link to="/about">Link to About</Link>

        <Swiper>
          <div>Slide 1</div>
        </Swiper>
      </div>
    )
  }
}