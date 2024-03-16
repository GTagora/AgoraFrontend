"use client";
import styles from './letter.module.css'
import { useState } from 'react'

const text = (
    <p>
        We are so excited and joyful to invite you to read this debut issue of our journal, <i>Agora</i>. 
        In this endeavor, we were reminded that even the mustard tree sprouts from the smallest of seeds; that&apos;s exactly how our journal started. God planted an idea and nurtured it through countless miracles to bring this journal to you today. A pipe dream, held in fragile human hands, was built on His strength as He provided the interest, facilities, talent, and resources that gave this vision physicality. Then He provided a name, <i>Agora</i>, a marketplace of nourishment and ideas, where each merchant&apos;s individual wares bring diversity to the market&apos;s offerings. Our journal embodies this image of harmony and communal provision by gathering each contributor&apos;s unique perspective through dialogue, reflection, composition, and fellowship founded upon our faith. <br /><br />

        While we didn&apos;t establish an overarching theme for this issue, these first few months have been characterized by His provision and our gratitude. We started this journal to glorify God; His steadfast provision has magnified His presence and power on this campus. <br /><br />

        And so, Reader, we invite you to step foot into our agora and partake in the fruits of His generosity. We hope and pray that our words and voices presented here will bring His glory into focus and spiritually nourish you.<br /><br />

        With love,
        <br /> Chris & Via <br /> <i>Editors-in-Chief</i>
    </p>
)

export default function Letter() {

    const [show, setShow] = useState(false);

    return (
        <div className={styles.letter}>
            <h2>Letter from the editors:</h2>
            <p>Dear Reader,</p>
            <p className={show ? styles.showText : styles.hideText }>
                We are so excited and joyful to invite you to read this debut issue of our journal, <i>Agora</i>. 
                In this endeavor, we were reminded that even the mustard tree sprouts from the smallest of seeds; that&apos;s exactly how our journal started. God planted an idea and nurtured it through countless miracles to bring this journal to you today. A pipe dream, held in fragile human hands, was built on His strength as He provided the interest, facilities, talent, and resources that gave this vision physicality. Then He provided a name, <i>Agora</i>, a marketplace of nourishment and ideas, where each merchant&apos;s individual wares bring diversity to the market&apos;s offerings. Our journal embodies this image of harmony and communal provision by gathering each contributor&apos;s unique perspective through dialogue, reflection, composition, and fellowship founded upon our faith. <br /><br />

                While we didn&apos;t establish an overarching theme for this issue, these first few months have been characterized by His provision and our gratitude. We started this journal to glorify God; His steadfast provision has magnified His presence and power on this campus. <br /><br />

                And so, Reader, we invite you to step foot into our agora and partake in the fruits of His generosity. We hope and pray that our words and voices presented here will bring His glory into focus and spiritually nourish you.<br /><br />

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