import React from 'react'
import './styles.css'

const Header = ({socialList, profile, website}) => {

  const renderSocial = (socialList) => {
    return socialList.map( social => {
      return <a href={social.url} target="_blank" key={social.url}>
        <i className={`fab fa-${social.icon} icon`}></i>
      </a>
    })
  }

  const background = {
    backgroundImage: `url(${website.topWallpaper})`
  }

  return (
    <header className="header" style={background}>
      <h1 className="title title--big header__title">{profile.name}</h1>
      <h2 className="title title--slim header__subtitle">{profile.job}</h2>

      <div className="header__social">
        {renderSocial(profile.socialList)}
      </div>
    </header>
  )
}

export default Header;
