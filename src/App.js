import React, { Component } from 'react'
import Header from './components/header'
import Avatar from './components/avatar'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="main__content">
          <div className="main__content__avatar">
            <Avatar />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
