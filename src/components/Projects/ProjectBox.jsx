import React from 'react'

const ProjectBox = ({title,src,onClick}) => {

  return (
    <a href='#project-information' className="project-box" onClick={onClick}>
      <img src={src} loading='lazy' alt='project-cover'/>
      <h3>{title}</h3>
    </a>
  )
}

export default ProjectBox