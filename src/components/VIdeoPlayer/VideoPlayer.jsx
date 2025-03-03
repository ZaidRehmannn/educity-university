import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'
import { useRef } from 'react'

const VideoPlayer = ({ PlayState, setPlayState }) => {
    const player = useRef()

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false)
        }
    }

    return (
        <div className={`video-player ${PlayState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer
