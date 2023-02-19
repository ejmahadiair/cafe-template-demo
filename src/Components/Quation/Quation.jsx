import React from 'react'
import "./quation.scss"
const cupart = require("../../media/photos/cupart.PNG")
const Quation = () => {
  return (
    <div className='quation-container'>
        <p>
        <q/>
        Coffee is a way of stealing time
        which should by rights belong to
        your older self.<q/>
        </p>
        <div >
        <img src={cupart} alt="" />
        </div>
       
    </div>
  )
}

export default Quation