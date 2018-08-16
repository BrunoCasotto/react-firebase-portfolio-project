import React, { Component } from 'react'
import Header from './components/header'
import Avatar from './components/avatar'
import './app.css'

class App extends Component {
  state = {
    socialList: [
      {icon: 'github', 'url': 'https://github.com/brunocasotto'},
      {icon: 'facebook', 'url': 'https://www.facebook.com/profile.php?id=100001318441034'},
      {icon: 'linkedin', 'url': 'https://www.linkedin.com/in/brunocasotto/'}
    ]
  }

  render() {
    return (
      <div className="main">
        <Header 
          socialList={this.state.socialList}
        />
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
