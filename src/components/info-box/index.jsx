
import React from 'react'
import './_styles.css'
class InfoBox extends React.Component {

  render() {
    return (
      <div className="info-box">
        <div className="info-box__info">
          <h1 className="title">{this.props.title}</h1>
          <p className="sub-title">{this.props.price}</p>
        </div>
      </div>
    )
  }

}

export default InfoBox
