
import React from 'react'
import Slider from '_components/slider/index.jsx'
import InfoBox from '_components/info-box'

import './_product.css'

function ProductPage () {
  return (
    <div className="product-page">
      <div className="product-page__slider">
        <Slider />
      </div>
      <div className="product-page__infoBox">
        <InfoBox />
      </div>
    </div>
  )
}

export default ProductPage