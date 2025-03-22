import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"
const About = ({setplayvideo}) => {
  return (
    <div className="about">
       <div className="about-left">
        <img src={about_img} alt=""  className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setplayvideo(true)}}/>
       </div>
       <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tommorow's leader Today</h2>
        <p>Universities offer a wide range of academic programs, including undergraduate and postgraduate degrees in various disciplines such as science, engineering, humanities, business, and medicine.</p>
        <p>With a focus on research, innovation, and practical learning, universities help students explore new ideas and contribute to advancements in different fields.</p>
        <p>In addition to academics, universities provide a vibrant campus life where students can engage in extracurricular activities, join clubs, and participate in sports.</p>
       </div>

    </div>
  )
}

export default About