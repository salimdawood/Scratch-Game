import React from 'react'
//componentns
import ImageSlider from './ImageSlider'


const ProjectDetails = ({project}) => {

  const {path,name,description,media,link,deploy} = project

  //get static media
  var media_source = require(`../../assets/${path}/cover.png`)


  return (
    <>
      <div id="project-information" className="project-info">
        <img src={media_source} loading="lazy" alt='project-cover'/> 
        <div className="info">
          <h1>{name}</h1>
          <span>{path}</span>
          <p>{description}</p>
          {deploy && <a href={deploy} target='_blank' rel="noreferrer">Check in deployment</a>}
          {link && (typeof(link)==='string'?
            <a href={link} target='_blank' rel="noreferrer">Project Github link</a>
            :
            link.map((link,index)=>{
              return <a href={link.href} key={index} target='_blank' rel="noreferrer">{link.text}</a>
            }))
          }
        </div>
      </div>
      <ImageSlider photoList={media} path={path} />
    </>
  )
}

export default ProjectDetails