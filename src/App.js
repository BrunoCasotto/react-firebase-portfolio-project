import React, { Component } from 'react'
import Header from './components/header'
import Avatar from './components/avatar'
import PersonalDetail from './components/personal-detail'
import PersonalSkills from './components/personal-skills';
import PersonalWorks from './components/personal-works';
import Loader from './components/loader'
import firebase from './services/firebase'

import './app.css'

class App extends Component {

  state = {
    loaded: false,
    socialList: [
    ],
    profile: {
      name: '',
      picture: '',
      job: '',
      description: {
        title: '',
        content: ''
      },
      skills: {
        title: '',
        list: []
      }
    },
    works: {
      title: '',
      list: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    firebase.getData((result) => {
      this.setState({loaded: true, ...result})
    })
  }

  render() {
    if(!this.state.loaded) {
      return (
        <Loader />
      )
    }

    return (
      <div className="main">
        <Header 
          socialList={this.state.socialList}
          profile={this.state.profile}
        />
        <div className="main__content">
          <div className="main__content__avatar">
            <Avatar 
              picture={this.state.profile.picture}
            />
          </div>

          <div className="main__content__details">
            <PersonalDetail
              description={this.state.profile.description}
            />
          </div>
          <div className="main__content__skills">
            <PersonalSkills
              skills={this.state.profile.skills}
            />
          </div>
          <div className="main__content__works">
            <PersonalWorks
              works={this.state.works}
            />
          </div>
        </div>
        <footer>
          Portfolio - {this.state.profile.name}
        </footer>
      </div>
    )
  }
}

export default App;
