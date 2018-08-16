import React from 'react'
import './styles.css'

const PersonalSkills = ({skills}) => {

  const renderSkillList = (list) => {
    return list.map(skill => {
      return <div className="personal-skills__graphic">
        <h3 className="title title--small title--slim">{skill.title}</h3>
      </div>
    })
  }

  return (
    <div className="personal-skills">
      <h1 className="title title--big">{skills.title}</h1>
      <div className="personal-skills__list">
        {renderSkillList(skills.list)}
      </div>
    </div>
  )
}

export default PersonalSkills;
