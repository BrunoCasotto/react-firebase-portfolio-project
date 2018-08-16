import React from 'react'
import './styles.css'

const renderBatteryPercent = (percent) => {
  const percentList = []

  for(let x = 0; x < 10; x++) {
    const status = percent >= x * 10 ? 'bar active' : 'bar'

    percentList.push(
      <div class={status} data-power='10'></div>
    )
  }

  return percentList
}
const Battery = ({percent}) => {
  return <div class='battery'>
    {renderBatteryPercent(percent)}
  </div>
}

export default Battery;
