import React from 'react'
import './styles.css'

const PersonaDetail = ({description}) => {

  return (
    <div className="personal-details">
      <h2 className="title title--sub personal-details__title">{description.title}</h2>
      <p className="text text--justify personal-details__text">{description.content}</p>
    </div>
  )
}

export default PersonaDetail;
