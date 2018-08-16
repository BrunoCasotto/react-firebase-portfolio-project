import React from 'react'
import './styles.css'

const Header = ({socialList}) => {

  const renderSocial = (socialList) => {
    return socialList.map( social => {
      return <a href={social.url} target="_blank">
        <i class={`fab fa-${social.icon} icon`}></i>
      </a>
    })
  }

  return (
    <header className="header">
      <h1 className="title title--big header__title">Bruno Casotto</h1>
      <h2 className="title title--slim header__subtitle">Front end enginner</h2>

      <div className="header__social">
        {renderSocial(socialList)}
      </div>
    </header>
  )
}

export default Header;
