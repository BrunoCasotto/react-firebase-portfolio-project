
import React from 'react'
import './_styles.css'

class Button extends React.Component {

  render() {
    return (
      <button onClick={this.props.onAction} className="btn btn--primary" >
        {this.props.text}
      </button>
    )
  }
}

export default Button
