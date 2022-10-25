import React from 'react'
import './animation.css'
//component
import Clipart from './Clipart'

const Animation = () => {
  
	var colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

  return (
    <>
      {Array(40).fill(0).map((value,index)=>{

        var size = Math.random() * 0.05 * [index]
        let clip_props={
          width:5 + size + 'px',
          height:16 + size + 'px',
          left:Math.random() * window.innerWidth + 'px',
          backgroundColor:colors[Math.floor(Math.random() * colors.length)],
          transform:"rotate("+ size*[index] +"deg)"
        }
        return <Clipart key={index} {...clip_props}/>
      })}
    </>
  )
}

export default Animation