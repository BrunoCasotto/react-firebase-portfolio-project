import React from 'react'
import './styles.css'

const PersonalWorks = ({works}) => {

  const renderGrid = (list) => {
    return list.map(work => {
      const background = {
        backgroundImage: `url(${work.image})`
      }

      return <div className="personal-works__list__item"  style={background} key={work.title}>
        <h3 className="title personal-works__list__title">
          {work.title}
        </h3>
        <p className="text text--justify text--bold personal-works__list__text">
          {work.description}
          <a className="btn btn--slim btn--light personal-works__list__button" href={work.link}>
            {work.linkLabel}
          </a>
        </p>
      </div>
    })
  }

  return (
    <div className="personal-works">
      <h1 className="title title--big personal-works__title">{works.title}</h1>
      <div className="personal-works__list">
        {renderGrid(works.list)}
      </div>
    </div>
  )
}

export default PersonalWorks;
