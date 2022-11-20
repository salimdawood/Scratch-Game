import React,{useState} from 'react'
//css
import './Projects.css'
//components
import ProjectBox from './ProjectBox'
import ProjectDetails from './ProjectDetails'
//cover photo
import {src1,src2,src3,src4,src5,src6} from '../../assets'
//information
import ProjectInformation from './ProjectInformation.json'



const Projects = () => {

  const project_titles = [
    'Lebanese Homemade','Front-end Shop','Voice Recognition Calculator','NITE','Managment System','3D Maze'
  ]
  const project_cover_photo = [
    src6,src4,src5,src3,src2,src1
  ]

  const[projectDetails,setProjectDetails] = useState(null)

  const boxClick = (proj) =>{
    let projTmp = ProjectInformation.filter(project=>project.name===proj)
    projTmp.length>0 && setProjectDetails(projTmp[0])
  }

  return (
    <div className='project-page'>
      <div className="projects-container">
        {
          project_titles.map((project,index)=>{
            return <ProjectBox
            key={index} title={project_titles[index]} src={project_cover_photo[index]}
            onClick = {()=>boxClick(project)}
            />})
        }
      </div>
      <div className="project-fragment">
        {projectDetails && <ProjectDetails project={projectDetails} />}
      </div>
    </div>
  )
}

export default Projects