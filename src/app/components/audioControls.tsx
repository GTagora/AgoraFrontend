import React, { useState } from "react";
import Image from 'next/image'
import play from "public/audio-buttons/play.png";
import playHover from "public/audio-buttons/play-black.png";
import pause from "public/audio-buttons/pause.png";
import pauseHover from "public/audio-buttons/pause-black.png";
import styles from "./audioPlayer.module.css";

const AudioControls = ({
  onPlayPauseClick,
}: any) => {
    const [isHoveringPlay, setIsHoveredPlay] = useState(false);
    const [isHoveringPause, setIsHoveredPause] = useState(false);
    const onMouseEnterPlay = () => setIsHoveredPlay(true);
    const onMouseLeavePlay = () => setIsHoveredPlay(false);
    const onMouseEnterPause = () => setIsHoveredPause(true);
    const onMouseLeavePause = () => setIsHoveredPause(false);
    return (
        <div className="audio-controls">
            <button
                onMouseEnter={onMouseEnterPlay}
                onMouseLeave={onMouseLeavePlay}
                type="button"
                className={styles.play}
                onClick={() => onPlayPauseClick(true)}
                aria-label="Play"
            >
                {isHoveringPlay ? <Image src={playHover} height={40} width={40} alt='Play'/> : <Image src={play} height={40} width={40} alt='Play'/>}
            </button>
            <button
                onMouseEnter={onMouseEnterPause}
                onMouseLeave={onMouseLeavePause}
                type="button"
                className={styles.pause}
                onClick={() => onPlayPauseClick(false)}
                aria-label="Pause"
            >
                {isHoveringPause ? <Image src={pauseHover} height={40} width={40} alt='Play'/> : <Image src={pause} height={40} width={40} alt='Play'/>}
            </button>
        </div>
)};

export default AudioControls;
