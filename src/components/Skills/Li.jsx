import React from 'react'
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//svg
import { CSharp,VisualStudio,VisualStudioCode,NetCore,AndroidStudio,Postman} from '../Svg'
//
import {ReactComponent as SQL} from './sql.svg'

const Li = ({name,icon,color}) => {

  //console.log(name)
  const iconSVG={
    '1':<CSharp/>,
    '2':<NetCore/>,
    '3':<VisualStudioCode/>,
    '4':<VisualStudio/>,
    '5':<Postman/>,
    '6':<SQL/>,
    '7':<AndroidStudio/>
  }


  return (
    <li>
      {name==='HTML5/CSS3' && <FontAwesomeIcon icon='fab fa-css3-alt' color='#2965f1' className='shy-icon'/>}
      {icon.length>1?<FontAwesomeIcon icon={icon} color={color}/>:iconSVG[icon]}
      {name}
    </li>
  )
}

export default Li