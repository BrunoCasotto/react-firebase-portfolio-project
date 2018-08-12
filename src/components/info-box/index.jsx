
import React from 'react'
import './_styles.css'
import Button from '_components/button'

class InfoBox extends React.Component {

  buy() {
    alert('Comprar item')
  }

  render() {
    return (
      <div className="info-box">
        <div className="info-box__info">
          <h1 className="title">{this.props.title}</h1>
          <p className="sub-title">{this.props.price}</p>
        </div>
        <div className="info-box__controller">
          <Button 
            text="Comprar"
            onAction={this.buy}
          />
        </div>
      </div>
    )
  }

}

export default InfoBox
