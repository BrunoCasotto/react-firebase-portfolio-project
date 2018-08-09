
import React from 'react'
import './_styles.css'
import Swiper from 'swiper'

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="swiper-container slider">
        <div class="swiper-wrapper slider__wrapper">
          <div class="swiper-slide slider__wrapper__slide">
            <img src="https://static-hmg-freelace-com-br.ns2online.com.br/produtos/tenis-nike-air-precision-masculino/26/D12-6810-026/D12-6810-026_zoom2.jpg?resize=*:720" alt="product" />
          </div>

          <div class="swiper-slide slider__wrapper__slide">
            <img src="https://static-hmg-freelace-com-br.ns2online.com.br/produtos/tenis-nike-air-precision-masculino/26/D12-6810-026/D12-6810-026_zoom2.jpg?resize=*:720" alt="product" />
          </div>
        </div>

        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev swipper-button fas fa-angle-left"></div>
        <div class="swiper-button-next swipper-button fas fa-angle-right"></div>
      </div>
    )
  }

  componentDidMount() {
    var mySwiper = new Swiper('.swiper-container', {
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