import React from 'react'
//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//component
import CV from './CV.pdf'

const Link = ({icon,src,tooltip}) => {
  return (
    <a href={src.length==0?CV:src} data-tooltip={tooltip} target='_blank' rel="noreferrer">
      <FontAwesomeIcon icon={icon}/>
    </a>
  )
}

export default Link