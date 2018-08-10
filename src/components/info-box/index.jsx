
import React from 'react'
import './_styles.css'

class InfoBox extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="info-box">
        <div className="info-box__info">
          <h1 className="title">{this.props.title}</h1>
          <h3 className="sub-title">{this.props.price}</h3>
        </div>
      </div>
    )
  }

}

export default InfoBox
