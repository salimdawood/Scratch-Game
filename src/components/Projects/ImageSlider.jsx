import React,{useState,useEffect} from 'react'
import { useRef } from 'react'
//components
import {LeftCircle,RightCircle} from '../Svg'
import FullImage from './FullImage'

const ImageSlider = ({photoList,path}) => {

  const media_slider = useRef()

  const [fullImage,setFullImage] = useState({
    show:false,
    index:0
  })

  useEffect(() => {
    media_slider.current.scrollLeft=0
  }, [photoList])
  

  const moveNext = ()=>{
    const container = media_slider.current.getBoundingClientRect()
    media_slider.current.scrollLeft+=container.width 
    //console.log(media_slider.current.scrollLeft)   
  }
  const movePrev = ()=>{
    const container = media_slider.current.getBoundingClientRect()
    media_slider.current.scrollLeft-=container.width 
    //console.log(media_slider.current.scrollLeft)
  }

  const showFullScreen = (index) =>{
    setFullImage({show:true,index})
  }

  
  const fullImage_props = {
    ...fullImage,
    setFullImage,
    photoList,
    path
  }

  const returnMedia = (media,index)=>{
      try {
        //get static media
        var media_source = require(`../../assets/${path}/${media}`)
        //get media type
        var media_type = media.substring(media.indexOf('.')+1,)
        //return based on media type
        return media_type==='mp4'? 
        <div className="play-video" key={index} onClick={()=>showFullScreen(index)}>
          <video src={media_source} loading="lazy"/>
        </div>
        :
        <img src={media_source} loading="lazy" key={index} onClick={()=>showFullScreen(index)}/> 
      } catch (error) {}
  }

  return (
    <>
      {fullImage.show && <FullImage {...fullImage_props}/>}
      <div className='photo-gallery'>
        <h3>Screenshots</h3>
        {
          photoList.length>0 &&
            <>
              <div ref={media_slider} className='photo-container'>
                {photoList.map((media,index)=>{
                  return returnMedia(media,index)
                })}
              </div>
              <LeftCircle onClick={movePrev}/>
              <RightCircle onClick={moveNext}/>
            </>
        }
      </div>
    </>
      )
}

export default ImageSlider