import React from 'react'
//css
import './Contactme.css'
//icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,faLinkedinIn,faGithub} from '@fortawesome/free-brands-svg-icons'
import { fas,faAt,faPhone,faFile} from '@fortawesome/free-solid-svg-icons'
//component
import Link from './Link.jsx'


library.add(fab,faLinkedinIn,faGithub,fas,faAt,faPhone,faFile)

const Contactme = () => {


  const contact_icon = ['fab fa-linkedin-in','fab fa-github','fas fa-at','fas fa-phone','fas fa-file']
  const contact_src =['https://www.linkedin.com/in/salimdawood/','https://github.com/salimdawood',
  'mailto:salimdawood666@gmail.com','https://wa.me/96176340160','']
  const contact_tooltip = ['Check me on Linkedin','Check my Github','Write Email to me','Reach me on Whatsapp','Check my Resume',]

  return (
    <div className='contact-page'>
      <h1>Get in Touch</h1>
      <div className="media-container">
        {
          contact_icon.map((contact,index)=>{
            return <Link src={contact_src[index]} icon={contact_icon[index]} key={index} tooltip={contact_tooltip[index]} />
          })
        }
      </div>
    </div>
  )
}

export default Contactme