import React, { useState } from "react";
import Image from 'next/image'
import play from "public/audio-buttons/play-black.png";
import pause from "public/audio-buttons/pause-black.png";
import prev from "public/audio-buttons/minus_ten.png";
import next from "public/audio-buttons/plus_ten.png";
import styles from "./audioPlayer.module.css";


const AudioControls = ({
  isPlaying=true, incrementTime, onPlayPauseClick,
}: {isPlaying:boolean, incrementTime:any, onPlayPauseClick:any}) => {
    return (
        <div className="audio-controls">
            <button
                type="button"
                className={styles.increment}
                onClick={() => incrementTime(-10)}
                aria-label="Play"
            >
                <Image className={styles.increment} src={prev} height={26} width={26} alt='Play'/>
            </button>
            <button
                type="button"
                className={styles.play}
                onClick={() => onPlayPauseClick(!isPlaying)}
                aria-label="Play"
            >
                {isPlaying ? <Image className={styles.play} src={pause} height={34} width={34} alt='Play'/> : <Image className={styles.play} src={play} height={34} width={34} alt='Play'/>}
            </button>
            <button
                type="button"
                className={styles.increment}
                onClick={() => incrementTime(10)}
                aria-label="Play"
            >
                <Image className={styles.increment} src={next} height={26} width={26} alt='Play'/>
            </button>
        </div>
)};

export default AudioControls;
