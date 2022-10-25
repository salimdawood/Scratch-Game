import React from 'react'

const Clipart = (props) => {

  return (
    React.createElement(
      'div',
      {style:{...props},className:'clip-art'}
    )
  )
}

export default Clipart