import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/WhatsApp Video 2024-04-13 at 11.35.56_569ee380.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

   const player = useRef(null);

const closePlayer = (e)=>{
    if(e.target === player.current){
        setPlayState(false)
    }

}




  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls ></video>
    </div>
  )

}
export default VideoPlayer