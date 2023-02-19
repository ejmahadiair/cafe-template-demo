import React from 'react'
import "./showbox.scss"
const ShowBox = ({width}) => {
  return (
    <div className='item-box-container-show' style={{width:`${width || '200px'}`}}>
       
    </div>
  )
}

export default ShowBox