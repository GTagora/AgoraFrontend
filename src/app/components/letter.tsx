"use client";
import styles from './letter.module.css'
import { useState } from 'react'


export default function Letter() {

    const [show, setShow] = useState(false);

    return (
        <div className={styles.letter}>
            <h2>Letter from the editors</h2>
            <p>Dear Reader,</p>
            <p className={show ? styles.showText : styles.hideText }>
                

                With love,
                <br /> Chris & Via <br /> <i>Editors-in-Chief</i>
            </p>
            <div className={styles.box} onClick={() => setShow(!show)}>
                <span className={show ? styles.openhbar : styles.hbar }/>
                <span className={show ? styles.openvbar : styles.vbar }/>
                {!show && <p>Read more</p>}
                {show && <p>Read less</p>}
            </div>
        </div>
)}