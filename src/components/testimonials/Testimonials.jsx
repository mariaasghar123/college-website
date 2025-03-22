import React, { useRef } from 'react'
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
const slider= useRef();
let tx=0;
  const slideforward=()=>{
//code for sliding forward
if(tx>-50){
  tx -=25;
} slider.current.style.transform=`translateX(${tx}%)`
  }
  const slidebackward=()=>{
    //code for sliding back
    if(tx < 0){
      tx +=25;
    } slider.current.style.transform=`translateX(${tx}%)`
  }
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className='next-icon' onClick={slideforward}/>
      <img src={back_icon} alt="" className='back-icon'onClick={slidebackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sarah Ahmed</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Eduisty University has exceeded my expectations in every way. The professors are highly knowledgeable and always ready to help. The campus environment is welcoming, and the modern facilities make learning more effective.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>James Carter</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>One of the best decisions I made was choosing Eduisty University. The courses are well-structured, and the hands-on learning approach really prepares students for real-world challenges.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Ayesha Khan</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>The faculty is supportive, and there are countless opportunities to participate in extracurricular activities. The university truly cares about student success!"</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Michael Roberts</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>From world-class faculty to a vibrant campus life, Eduisty University offers everything a student could ask for. The diverse student community, advanced learning resources, and career development programs make it an ideal place to study.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials