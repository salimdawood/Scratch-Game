import React,{useRef,useState,useEffect} from 'react'
//components
import {Check} from './Svg'
import Animation from './Animation/Animation'

const Scratch = ({text_reveal,openPopUp}) => {

  //catch nodes for direct changes
  const refContainer = useRef()
  const refLink = useRef()
  //
  const [applyScratch,setApplyScratch] = useState(true)
  const [confetti,setConfetti] = useState(false)
  //counter for each card children
  const [scratchComplete,setScratchComplete] = useState(0)
  //when card have enough scratch,
  //change scratch effect to normal card
  useEffect(() => {
    if(scratchComplete >=100){
      setApplyScratch(false)
      //openPopUp()
      const scratch_reveal = document.createElement('div')
      scratch_reveal.className = 'card-reveal'
      const scratch_reveal_1 = document.createElement('h1')
      scratch_reveal_1.innerText=text_reveal
      scratch_reveal.append(scratch_reveal_1)
      refContainer.current.replaceChildren(scratch_reveal)
      scratch_reveal.onclick = openPopUp
    }
  }, [scratchComplete])
  
  useEffect(() => {
    if(!applyScratch){
      setConfetti(true)
    }
  }, [applyScratch])

  useEffect(() => {
    if(confetti){
      const timer = setTimeout(() => {
        setConfetti(false)
      },13500);
      return () => clearTimeout(timer);
    }
  }, [confetti])
  


  const scratchMouse = (e)=>{
    if(applyScratch && scratchComplete < 100){
      const erase = document.createElement('span')
      //position the span with respect to card position
      const card = e.target.getBoundingClientRect()
      //define scratch size based on card size
      let sratch = {
        radius:-25,
        effect:6,
        class:'sm'
      }
      if(150<card.width && card.width<=200) sratch={radius:-50,effect:8,class:'md'}
      if(200<card.width && card.width<250) sratch={radius:-50,effect:6,class:'md'}
      if(card.width>=250) sratch={radius:-75,effect:10,class:'lg'}
      erase.className=sratch.class
      erase.style.left = sratch.radius + e.clientX - card.left+'px'
      erase.style.top = sratch.radius + e.clientY - card.top+'px'
      //add to card
      erase.addEventListener('mousemove',(e)=>e.stopPropagation(),true)
      refContainer.current.insertBefore(erase,refContainer.current.firstChild)
      setScratchComplete(scratchComplete+sratch.effect)
    }
  }
  const scratchFinger = (e)=>{
    if(applyScratch && scratchComplete < 100){
      const erase = document.createElement('span')
      //position the span with respect to card position
      const card = e.target.getBoundingClientRect()
      //define scratch size based on card size
      let sratch = {
        radius:-25,
        effect:1,
        class:'sm'
      }
      if(150<card.width && card.width<250) sratch={radius:-50,effect:1,class:'md'}
      if(card.width>=250) sratch={radius:-75,effect:1,class:'lg'}
      erase.className=sratch.class
      erase.style.left = sratch.radius + e.touches[0].clientX - card.left+'px'
      erase.style.top = sratch.radius + e.touches[0].clientY - card.top+'px'
      //add to card
      erase.addEventListener('touchmove',(e)=>e.stopPropagation(),true)
      refContainer.current.insertBefore(erase,refContainer.current.firstChild)
      setScratchComplete(scratchComplete+sratch.effect)
    }
  }

  const range_color = {
    red:'red',orange:'orange',yellow:'goldenrod',green:'green'
  }

  return (
    <div className='card-info'>
      {confetti && <Animation/>}
      <div className='card-access'>
        {
          applyScratch?
          <h1 style={{color:
          scratchComplete>30?
            scratchComplete>55?
              scratchComplete>99?
              range_color.green
              :range_color.yellow
            :range_color.orange
          :range_color.red 
          }}>{scratchComplete} %</h1>
          :
          <>
            <h1>Let's go</h1>
            <Check/>
          </>
        }
      </div>
      <div className='card' onMouseMove={scratchMouse} onTouchMove={scratchFinger}>
        <div ref={refContainer} className='card-inner'>
          <h1 ref={refLink}>{text_reveal}</h1>
        </div>
      </div>
    </div>
  )
}

export default Scratch