import React from 'react'
import './styles.css'

const PersonalSkills = ({skills}) => {

  const renderBattery = (percent) => {
    return <div class='battery'>
      <div class='bar active' data-power='10'></div>
      <div class='bar' data-power='20'></div>
      <div class='bar' data-power='30'></div>
      <div class='bar' data-power='40'></div>
      <div class='bar' data-power='50'></div>
      <div class='bar' data-power='60'></div>
      <div class='bar' data-power='70'></div>
      <div class='bar' data-power='80'></div>
      <div class='bar' data-power='90'></div>
      <div class='bar' data-power='100'></div>
    </div>
  }

  const renderSkillList = (list) => {
    return list.map(skill => {
      return <div className="personal-skills__graphic">
        <h3 className="title title--small title--slim personal-skills__graphic__title">{skill.title}</h3>
        <div className="personal-skills__battery">
          {renderBattery(skill.percent)}
        </div>
      </div>
    })
  }

  return (
    <div className="personal-skills">
      <h1 className="title title--big personal-skills__title">{skills.title}</h1>

      <div className="personal-skills__list">
        {renderSkillList(skills.list)}
      </div>
    </div>
  )
}

export default PersonalSkills;
