'use client';
import React, { useState, useEffect, useRef, useCallback } from "react";
import AudioControls from "./audioControls";
import Backdrop from "./backdrop";
import Image from "next/image";
import styles from "./audioPlayer.module.css";

const AudioPlayer = ({ tracks }: any) => {
//   // State
//   const [trackIndex, setTrackIndex] = useState(0);
//   const [trackProgress, setTrackProgress] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Destructure for conciseness
//   const { title, artist, color, image, audioSrc } = tracks[trackIndex];

//   // Refs
//   const audioRef = useRef(new Audio(audioSrc));
//   const intervalRef = useRef();
//   const isReady = useRef(false);

//   // Destructure for conciseness
//   const { duration } = audioRef.current;

//   const currentPercentage = duration
//     ? `${(trackProgress / duration) * 100}%`
//     : "0%";
//   const trackStyling = `
//     -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
//   `;

//   const toNextTrack = useCallback(() => {
//     if (trackIndex < tracks.length - 1) {
//         setTrackIndex(trackIndex + 1);
//       } else {
//         setTrackIndex(0);
//       }
//   }, [trackIndex, tracks.length]);

//   const startTimer = useCallback(() => {

//     // Clear any timers already running
//     clearInterval(intervalRef.current);

//     intervalRef.current = setInterval(() => {
//         if (audioRef.current.ended) {
//         toNextTrack();
//         } else {
//         setTrackProgress(audioRef.current.currentTime);
//         }
//     }, [1000]);

//   }, [toNextTrack]); 

//   const onScrub = (value) => {
//     // Clear any timers already running
//     clearInterval(intervalRef.current);
//     audioRef.current.currentTime = value;
//     setTrackProgress(audioRef.current.currentTime);
//   };

//   const onScrubEnd = () => {
//     // If not already playing, start
//     if (!isPlaying) {
//       setIsPlaying(true);
//     }
//     startTimer();
//   };

//   const toPrevTrack = () => {
//     if (trackIndex - 1 < 0) {
//       setTrackIndex(tracks.length - 1);
//     } else {
//       setTrackIndex(trackIndex - 1);
//     }
//   };

  

//   useEffect(() => {
//     if (isPlaying) {
//       audioRef.current.play();
//       startTimer();
//     } else {
//       audioRef.current.pause();
//     }
//   }, [startTimer, isPlaying]);

//   // Handles cleanup and setup when changing tracks
//   useEffect(() => {
//     audioRef.current.pause();

//     audioRef.current = new Audio(audioSrc);
//     setTrackProgress(audioRef.current.currentTime);

//     if (isReady.current) {
//       audioRef.current.play();
//       setIsPlaying(true);
//       startTimer();
//     } else {
//       // Set the isReady ref as true for the next pass
//       isReady.current = true;
//     }
//   }, [audioSrc, startTimer, trackIndex]);

//   useEffect(() => {
//     // Pause and clean up on unmount
//     return () => {
//       audioRef.current.pause();
//       clearInterval(intervalRef.current);
//     };
//   }, []);

//   return (
//     <div className={styles['audio-player']}>
//       <div className={styles['track-info']}>
//         <Image className={styles.artwork} src={image} height={400} width={400} alt='Article Image'/>
//         <h2 className={styles.title}>{title}</h2>
//         <h3 className={styles.artist}>{artist}</h3>
//         <AudioControls
//           isPlaying={isPlaying}
//           onPrevClick={toPrevTrack}
//           onNextClick={toNextTrack}
//           onPlayPauseClick={setIsPlaying}
//         />
//         <input
//           type="range"
//           value={trackProgress}
//           step="1"
//           min="0"
//           max={duration ? duration : `${duration}`}
//           className={styles.progress}
//           onChange={(e) => onScrub(e.target.value)}
//           onMouseUp={onScrubEnd}
//           onKeyUp={onScrubEnd}
//           style={{ background: trackStyling }}
//         />
//       </div>
//       <Backdrop
//         trackIndex={trackIndex}
//         activeColor={color}
//         isPlaying={isPlaying}
//       />
//     </div>
//   );
};

export default AudioPlayer;
