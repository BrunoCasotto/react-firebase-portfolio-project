
import React from 'react'
import './_styles.css'
import Swiper from 'swiper'

class Slider extends React.Component {

  createSlides() {
    let slides = []
  
    this.props.images.forEach(img => {
      slides.push(
        <div class="swiper-slide slider__wrapper__slide">
          <img src={img} alt="product" />
        </div>
      )
    })

    return slides
  }

  render() {
    return (
      <div class="swiper-container slider">
        <div class="swiper-wrapper slider__wrapper">
          {this.createSlides()}
        </div>

        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev swipper-button fas fa-angle-left"></div>
        <div class="swiper-button-next swipper-button fas fa-angle-right"></div>
      </div>
    )
  }

  componentDidMount() {
    new Swiper('.swiper-container', {
      centeredSlides: true,
      simulateTouch: true,
      autoplay: 500,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}


export default Slider