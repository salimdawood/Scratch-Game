import React from 'react'
//components
import Li from './Li'

const SkillsBox = ({title,language_name,language_icon,language_color}) => {

  return (
    <div className='skill-container'>
      <h1>{title}</h1>
      <ul>
        {
          language_name.map((langElement,index)=>{
            return <Li key={index} name={language_name[index]} icon={language_icon[index]} color={language_color[index]}/>})
        }
      </ul>
    </div>
  )
}

export default SkillsBox