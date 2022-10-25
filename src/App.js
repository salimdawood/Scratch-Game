import {useState} from 'react'
import './App.css'
//components
import Scratch from './components/Scratch'
import {Close} from './components/Svg'
//pages
import Aboutme from './components/Aboutme/Aboutme'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contactme from './components/Contactme/Contactme'


function App() {

  const [open,setOpen] = useState({
    isOpen:false,
    page_num:1
  })

  const openPopUp = (page_num)=>{
    setOpen({
      isOpen:true,
      page_num:page_num
    })
  }

  const closePopUp = ()=>{
    setOpen({...open,isOpen:false})
  }

  const popInflate = (fragment_num)=>{
    switch (fragment_num) {
      case 1:
        return <Aboutme closePopUp={closePopUp} openPopUp={()=>openPopUp(4)}/>
      case 2:
        return <Skills/>
      case 3:
        return <Projects/>
      case 4:
        return <Contactme/>
      default:
        return <p>error opening popup</p>
    }
  }

  return (
    <div className='container'>
      {open.isOpen &&
        <div className='pop-container'>
          {popInflate(open.page_num)}
          <Close onClick={closePopUp}/>
        </div>
      }
      <h1>Portfolio <span>Game</span></h1>
      <div className='cards-container'>
        <Scratch text_reveal='WHO AM I' openPopUp={()=>openPopUp(1)}/>
        <Scratch text_reveal='SKILLS' openPopUp={()=>openPopUp(2)}/>
        <Scratch text_reveal='PROJECTS' openPopUp={()=>openPopUp(3)}/>
        <Scratch text_reveal='STAY IN TOUCH' openPopUp={()=>openPopUp(4)}/>
      </div>
    </div>
  );
}

export default App;
