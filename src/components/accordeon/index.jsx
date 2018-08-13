
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

  createMarkup() {
    return {__html: this.props.text}
  }

  render() {
    return (
      <div onClick={this.toggle.bind(this)} className={`accordeon fas accordeon--${this.state.appearance}`}>
        <div className="accordeon__content"
          dangerouslySetInnerHTML={this.createMarkup()}
        />
      </div>
    )
  }
}

export default Accordeon
