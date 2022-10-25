import React from 'react'
//components
import SkillsBox from './SkillsBox'
//css
import './Skills.css'
//icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,faJava,faJsSquare,faPhp,faPython,faGithub,faReact,faHtml5,faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-solid-svg-icons'


library.add(fab,faJsSquare,faJava,faPhp,faPython,faGithub,faReact,faHtml5,faCss3Alt)

const Skills = () => {


  const language_name = [
  'Vanilla Javascript','Php','Java','Python','C#',
  'ReactJs','Web Api',
  'HTML5/CSS3','VS Code','Visual Studio','GitHub','Postman','MS SQL Server','Android Studio'
  ]
  const language_icon = [
  'fab fa-js-square','fab fa-php','fab fa-java','fab fa-python','1',
  'fab fa-react','2',
  'fab fa-html5','3','4','fab fa-github','5','6','7'
  ]
  const language_color = [
  '#ffaa1d','#787bb5','#048295','#306998','#fffff',
  '#61dbfb','',
  '#e34c26','#2965f1','','#171515','','',''
  ]


  const skills_props_1 = {
    title:'Languages',
    language_name:language_name.slice(0,5),
    language_icon:language_icon.slice(0,5),
    language_color:language_color.slice(0,5)
  }

  const skills_props_2 = {
    title:'Frameworks & Libraries',
    language_name:language_name.slice(5,7),
    language_icon:language_icon.slice(5,7),
    language_color:language_color.slice(5,7)
  }

  const skills_props_3 = {
    title:'Others & Tools',
    language_name:language_name.slice(7,),
    language_icon:language_icon.slice(7,),
    language_color:language_color.slice(7,)
  }

  return (
    <div className='skills-page'>
      <SkillsBox {...skills_props_1}/>
      <SkillsBox {...skills_props_2}/>
      <SkillsBox {...skills_props_3}/>
    </div>
  )
}

export default Skills