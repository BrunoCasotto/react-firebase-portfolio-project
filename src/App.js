import React, { Component } from 'react'
import Header from './components/header'
import Avatar from './components/avatar'
import PersonalDetail from './components/personal-detail'
import PersonalSkills from './components/personal-skills';

import './app.css'

class App extends Component {
  state = {
    socialList: [
      {icon: 'github', 'url': 'https://github.com/brunocasotto'},
      {icon: 'facebook', 'url': 'https://www.facebook.com/profile.php?id=100001318441034'},
      {icon: 'linkedin', 'url': 'https://www.linkedin.com/in/brunocasotto/'}
    ],
    profile: {
      name: 'Bruno Casotto',
      job: 'Front end enginner',
      description: {
        title: 'Detalhes pessoais',
        content: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'
      },
      skills: {
        title: 'Minhas habilidades',
        list: [
          {title: 'javascript', percent: '90'},
          {title: 'html', percent: '60'},
          {title: 'css', percent: '70'},
          {title: 'node', percent: '90'},
          {title: 'firebase', percent: '50'}
        ]
      }
    }
  }

  render() {
    return (
      <div className="main">
        <Header 
          socialList={this.state.socialList}
          profile={this.state.profile}
        />
        <div className="main__content">
          <div className="main__content__avatar">
            <Avatar />
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
        </div>
      </div>
    )
  }
}

export default App;
