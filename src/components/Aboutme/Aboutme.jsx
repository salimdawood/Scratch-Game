import React from 'react'
import './Aboutme.css'

const Aboutme = ({closePopUp,openPopUp}) => {
  return (
    <div className='aboutme-page'>
      <h1>Salim Dawood</h1>
      <main>
        <p>HI, I'M A SOFTWARE DEVELOPER.<br/> I BUILD THINGS</p>
        <div className="btn-container">
          <button onClick={openPopUp}>Say no more,we're in(Scratch-free)</button>
          <button onClick={closePopUp}>Um we need more information</button>
        </div>
      </main>
    </div>
  )
}

export default Aboutme