
import React from 'react'
import Slider from '_components/slider/index.jsx'
import InfoBox from '_components/info-box'
import productMocks from '_mocks/product.json'

import './_product.css'

function ProductPage () {
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

export default ProductPage