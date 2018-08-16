import React from 'react'
import './styles.css'

const Avatar = () => {
  const picture = '/perfil.jpg'
  
  return (
    <div className="avatar">
      <figure className="avatar__figure">
        <img className="avatar__img" src={picture} alt="photo" />
      </figure>
    </div>
  )
}

export default Avatar;
