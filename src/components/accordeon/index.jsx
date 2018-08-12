
import React from 'react'
import './_styles.css'

class Accordeon extends React.Component {

  constructor(props) {
    super(props);
    this.state = { appearance: 'closed' }
  }

  /**
   * function to open and close accordeon
   */
  toggle() {
    let newAppearance = this.state.appearance === 'closed' ? 'open' : 'closed'

    this.setState({
      appearance: newAppearance
    });
  }

  render() {
    return (
      <div onClick={this.toggle.bind(this)} className="accordeon fas fa-plus" >
        <div className={`accordeon__content accordeon__content--${this.state.appearance}`}>
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default Accordeon
