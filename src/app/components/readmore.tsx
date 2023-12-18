"use client";
import styles from './readmore.module.css'
import { useState } from 'react'

export default function ReadMore( { text }:{ text:any }) {

    const [show, setShow] = useState(false);

    return (
        <div>
            <p className={show ? styles.showText : styles.hideText }>{text}</p>
            <div className={styles.box} onClick={() => setShow(!show)}>
                <span className={show ? styles.openhbar : styles.hbar }/>
                <span className={show ? styles.openvbar : styles.vbar }/>
                {!show && <p>Read more</p>}
                {show && <p>Read less</p>}
            </div>
        </div>
)}