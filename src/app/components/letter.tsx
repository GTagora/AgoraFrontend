"use client";
import styles from './letter.module.css'
import { useState } from 'react'


export default function Letter({letter}:{letter:string}) {

    const [show, setShow] = useState(false);

    return (
        <div className={styles.letter}>
            <h2>Letter from the EIC</h2>
            <p>Dear Reader,</p>
            <div className={styles.text} dangerouslySetInnerHTML={{ __html: letter.replace(/\\n/g, '\n')}} />
            <div className={styles.box} onClick={() => setShow(!show)}>
                <span className={show ? styles.openhbar : styles.hbar }/>
                <span className={show ? styles.openvbar : styles.vbar }/>
                {!show && <p>Read more</p>}
                {show && <p>Read less</p>}
            </div>
        </div>
)}