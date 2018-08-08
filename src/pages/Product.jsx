
import React from 'react'
import Slider from '../components/slider/index.jsx'
import './_product.css'

function ProductPage () {
  return (
    <div className="product-page">
      <div className="product-page__slider">
        <Slider />
      </div>
    </div>
  )
}

export default ProductPage