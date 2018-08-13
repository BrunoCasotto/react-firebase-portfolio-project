
import React from 'react'
import './_styles.css'

class SquareButton extends React.Component {
  //function to pass parameters
  callCallback() {
    this.props.onAction({...this.props})
  }

  render() {
    return (
      <div onClick={this.callCallback.bind(this)} className="square-button">
        {this.props.text}
      </div>
    )
  }

}

export default SquareButton
