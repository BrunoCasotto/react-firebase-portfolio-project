
import React from 'react'
import './_styles.css'
import logo from './logo.svg'

function Header () {
  return (
    <header class="header">
      <div class="header__block header__block--align-left">
        <div class="fas fa-angle-left header__icon header__icon--pointer"></div>
      </div>
      <div class="header__block">
        <img src={logo} class="header__logo" alt="logo"/>
      </div>
      <div class="header__block header__block--align-right">
        <div class="fas fa-shopping-cart header__icon header__icon--pointer"></div>
        <div class="fas fa-search header__icon header__icon--pointer"></div>
      </div>
    </header>
  )
}

export default Header