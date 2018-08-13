
import React from 'react'
import './_styles.css'
import Button from '_components/button'
import Accordeon from '_components/accordeon'
import SquareButton from '_components/square-button'

class InfoBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      controllerClass: '',
      optionsClass: 'hide'
    }
  }

  buy() {
    this.setState({optionsClass: '', controllerClass: 'hide'})
  }

  cancelBuy() {
    this.setState({optionsClass: 'hide', controllerClass: ''})
  }

  goToCart({opt}) {
    alert(`goToCart ${opt}`)
  }

  renderOptions() {
    let options = []
  
    this.props.sizes.forEach(size => {
      options.push(
        <SquareButton
          text={size}
          opt={size}
          key={size}
          onAction={this.goToCart.bind(this)}
        />
      )
    })

    return options
  }


  render() {
    return (
      <div className="info-box">
        <div className="info-box__info">
          <h1 className="title">{this.props.title}</h1>
          <p className="sub-title">{this.props.price}</p>
        </div>
        <div className={`info-box__controller ${this.state.controllerClass}`}>
          <Button 
            text="Comprar"
            onAction={this.buy.bind(this)}
          />
          <Accordeon
            text={this.props.description}
          />
        </div>
        <div className={`option-size ${this.state.optionsClass}`}>

          <i onClick={this.cancelBuy.bind(this)} className="option-size__back-button fas fa-arrow-left"/>

          <h2 className="title title--small">Selecione o tamanho para prosseguir</h2>
          <div className="option-size__list">
            {this.renderOptions()}
          </div>
        </div>
      </div>
    )
  }

}

export default InfoBox
