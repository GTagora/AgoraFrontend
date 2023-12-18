"use client";
import Link from 'next/link'
import Image from 'next/image'
import styles from './hamburger.module.css'
import { useState } from'react'

/**
 * Hamburger component for hamburger menu
 * to be used when window width is small or in mobile view to avoid ugly navbar scrunching
 * @returns Hamburger menu component
 */
export default function Hamburger() {

    const [open, setOpen] = useState(false);

    return (
        <div className={styles.body}>
            <div className={styles.navbar} onClick={ () => setOpen(!open)} >
                <div className={open ? styles.openBar : styles.bar }>
                    <span className={open ? styles.openBar1 : styles.bar1 }></span>
                    <span className={open ? styles.openBar2 : styles.bar2 }></span>
                    <span className={open ? styles.openBar3 : styles.bar3 }></span>
                </div>

                {/* <div className={styles.dim} /> */}
                <div className={ open? styles.activebuttons : styles.buttons }>
                    <Link href="/"><div className={styles.label}>HOME</div></Link>

                    <Link href="/about"><div className={styles.label}>ABOUT</div></Link>
                        <Link href="/about"><div className={styles.indent}>Mission</div></Link>
                        <Link href="/about/staff"><div className={styles.indent}>Staff</div></Link>

                    <Link href="/archive"><div className={styles.label}>ARCHIVE</div></Link>
                        <Link href="/archive" className={styles.indent}>Fall '23</Link>
                        <Link href="/archive" className={styles.indent}>Past Issues</Link>

                    <Link href="/blog"><div className={styles.label}>BLOG</div></Link>
                    
                    <Link href="/contact"><div className={styles.label} >CONTACT</div></Link>
                </div>
            </div>
            <Link href="/" className={styles.logo}>
                <Image
                    src="/logo-black-box.png"
                    width={55}
                    height={55}
                    alt='Agora logo'
                />
            </Link>
        </div>
)}