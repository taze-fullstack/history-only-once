import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Swiper from 'react-id-swiper'
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
import 'react-id-swiper/src/styles/scss/swiper.scss'

import '../stylesheets/main.scss'

export default class Home extends Component {
  render() {
    const params = {
      slideClass: 'swiper-slide hello-slide',
      modules: [Pagination, Navigation],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }

    return (
      <div>
        <div>This is the Homepage</div>
        <Link to="/about">Link to About</Link>

        <Swiper {...params}>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
          <div>Slide 5</div>
        </Swiper>
      </div>
    )
  }
}