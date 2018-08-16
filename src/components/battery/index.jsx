import React from 'react'
import './styles.css'

const Battery = (percent) => {
  return <div class='battery'>
    <div class='bar active' data-power='10'></div>
    <div class='bar' data-power='20'></div>
    <div class='bar' data-power='30'></div>
    <div class='bar' data-power='40'></div>
    <div class='bar' data-power='50'></div>
    <div class='bar' data-power='60'></div>
    <div class='bar' data-power='70'></div>
    <div class='bar' data-power='80'></div>
    <div class='bar' data-power='90'></div>
    <div class='bar' data-power='100'></div>
  </div>
}

export default Battery;
