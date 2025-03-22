import React from 'react'
import "./Program.css"
import Program_1 from "../../assets/program-1.png"
import Program_2 from "../../assets/program-2.png"
import Program_3 from "../../assets/program-3.png"
import Program_icon1 from "../../assets/program-icon-1.png"
import Program_icon2 from "../../assets/program-icon-2.png"
import Program_icon3 from "../../assets/program-icon-3.png"


const Program = () => {
  return (
    <div className='programs-container '>
      <div className="program">
        <img src={Program_1} alt="" />
        <div className="caption">
          <img src={Program_icon1} alt="" />
          <p>Bachelor Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program_2} alt="" />
        <div className="caption">
          <img src={Program_icon2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program_3} alt="" />
        <div className="caption">
          <img src={Program_icon3} alt="" />
          <p>Phd Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Program