
import React from 'react'
import Slider from '_components/slider'
import InfoBox from '_components/info-box'
import Button from '_components/button'
import productMocks from '_mocks/product.json'

import './_product.css'

class ProductPage extends React.Component {

  render() {
    return (
      <div className="product-page">
        <div className="product-page__slider">
          <Slider {...productMocks}/>
        </div>
        <div className="product-page__infoBox">
          <InfoBox {...productMocks} />
        </div>
      </div>
    )
  }
}

export default ProductPage