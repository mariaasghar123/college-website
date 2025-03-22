import React, { useRef } from 'react'
import video_icon from "../../assets/rename.mp4";
import "./Video.css"
const Video = ({playvideo,setplayvideo}) => {
  const player= useRef(null);
  const closeplayer=(e)=>{
    if(e.target===player.current){
      setplayvideo(false);
    }
  }
  return (
    <div className={`video-player ${playvideo? "" : "hide"}`} ref={player} onClick={closeplayer}>
      <video src={video_icon} autoPlay muted controls></video>
    </div>
  )
}

export default Video