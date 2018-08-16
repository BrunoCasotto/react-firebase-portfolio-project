import React from 'react'
import './styles.css'
import Battery from '../battery'

const PersonalSkills = ({skills}) => {

  const renderSkillList = (list) => {
    return list.map(skill => {
      return <div className="personal-skills__graphic">
        <h3 className="title title--small title--light title--slim personal-skills__graphic__title">
          {skill.title}
        </h3>
        <div className="personal-skills__battery">
        <Battery
          percent={skill.percent}
        />
        </div>
      </div>
    })
  }

  return (
    <div className="personal-skills">
      <h1 className="title title--light title--big personal-skills__title">{skills.title}</h1>

      <div className="personal-skills__list">
        {renderSkillList(skills.list)}
      </div>
    </div>
  )
}

export default PersonalSkills;
