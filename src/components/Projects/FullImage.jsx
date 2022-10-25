import React from 'react'
//components
import {LeftCircle,RightCircle,Close} from '../Svg'

const FullImage = (props) => {

  const {index,photoList,path,setFullImage} = props

  const closeFullScreen = () =>{
    setFullImage({show:false,index:0})
  }

  const moveNext = ()=>{
    if(index===photoList.length-1) return
    setFullImage({show:true,index:index+1})
  }
  const movePrev = ()=>{
    if(index===0) return
    setFullImage({show:true,index:index-1})
  }

  const returnMedia = (media)=>{
    try {
      //get static media
      var media_source = require(`../../assets/${path}/${media}`)
      //get media type
      var media_type = media.substring(media.indexOf('.')+1,)
      //return based on media type
      return media_type==='mp4'?
      <video src={media_source} loading="lazy" controls/>
      :
      <img src={media_source} loading="lazy" alt='project'/> 
    } catch (error) {}
  }

  return (
    <div className='full-screen-container'>
      <Close onClick={closeFullScreen}/>
      {returnMedia(photoList[index])}
      <LeftCircle onClick={movePrev}/>
      <RightCircle onClick={moveNext}/>
      <p>{index+1} / {photoList.length}</p>
    </div>
  )
}

export default FullImage