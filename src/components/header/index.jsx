
import React from 'react'
import './_styles.css'
import logo from './logo.svg'

function Header () {
  return (
    <header className="header">
      <div className="header__block header__block--align-left">
        <div className="fas fa-angle-left header__icon header__icon--pointer"></div>
      </div>
      <div className="header__block">
        <img src={logo} className="header__logo" alt="logo"/>
      </div>
      <div className="header__block header__block--align-right">
      <div className="fas fa-search header__icon header__icon--pointer"></div>
      <div className="fas fa-shopping-cart header__icon header__icon--pointer"></div>
      </div>
    </header>
  )
}

export default Header