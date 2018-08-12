
import React from 'react'
import './_styles.css'
import Swiper from 'swiper'

class Slider extends React.Component {

  createSlides() {
    let slides = []
  
    this.props.images.forEach(img => {
      slides.push(
        <div className="swiper-slide slider__wrapper__slide" key={img}>
          <img src={img} alt="product" />
        </div>
      )
    })

    return slides
  }

  render() {
    return (
      <div className="swiper-container slider">
        <div className="swiper-wrapper slider__wrapper">
          {this.createSlides()}
        </div>

        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev swipper-button fas fa-angle-left"></div>
        <div className="swiper-button-next swipper-button fas fa-angle-right"></div>
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