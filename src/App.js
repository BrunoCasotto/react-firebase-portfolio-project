import React, { Component } from 'react'
import Header from './components/header'
import Avatar from './components/avatar'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="main-content">
          <Avatar />
        </div>
      </div>
    )
  }
}

export default App;
