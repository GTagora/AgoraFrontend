"use client";
import styles from './letter.module.css'
import { useState } from 'react'


export default function Letter() {

    const [show, setShow] = useState(false);

    return (
        <div className={styles.letter}>
            <h2>Letter from the EIC</h2>
            <p>Dear Reader,</p>
            <p className={show ? styles.showText : styles.hideText }>
                What a blessing it is to bring you this second issue of <i>Agora</i>! I thank God that you&apos;re here, however it is that you&apos;ve happened upon this journal. And whether He is a stranger or an old friend, just know that He sits beside you as you flip through this issue on Cycles.<br/><br/>

                We all experience this world in a certain rhythm, as a life of constant novelty and unpredictability would be impossible to comprehend. So our lives are benchmarked by these patterns, which characterize the natural ebb and flow of the human experience: daily habits, transformation, the swell of seasons, in nature and in life. It follows that God speaks through these cycles as He shapes us, grows us, and brings us back to Him.<br/><br/>

                This semester, our writers reflected on this theme and now offer you their take on Cycles, in hurt or condemnation, in relationships, in iterations of sin, repentance, and restoration. This writing process, though arduous, was a revelation of God&apos;s provision and a gift of fellowship, and I hope its fruit is as much a blessing to you as it was to us.<br/><br/>

                And so, dear Reader, I invite you to take a breath, dwell here, and find nourishment in these reflections, knowing He is here with you.<br/><br/>

                Happy reading, until we meet face to face.<br/><br/>
                Yours in Chris,<br /> Via<br /><i>Editor-in-Chief</i>
            </p>
            <div className={styles.box} onClick={() => setShow(!show)}>
                <span className={show ? styles.openhbar : styles.hbar }/>
                <span className={show ? styles.openvbar : styles.vbar }/>
                {!show && <p>Read more</p>}
                {show && <p>Read less</p>}
            </div>
        </div>
)}