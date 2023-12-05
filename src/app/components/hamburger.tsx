// "use client";
import Link from 'next/link'
import Image from 'next/image'
import styles from './hamburger.module.css'
// import { useState } from'react'

/**
 * Hamburger component for hamburger menu
 * to be used when window width is small or in mobile view to avoid ugly navbar scrunching
 * @returns Hamburger menu component
 */
export default function Hamburger() {

    // const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className={styles.navbar}>
                <input type="checkbox" className={styles.input}/>
                <span className={styles.bar1}></span>
                <span className={styles.bar2}></span>
                <span className={styles.bar3}></span>

                <div className={styles.dim} />
                <div className={styles.buttons}>
                    <Link href="/"><div className={styles.label}>HOME</div></Link>

                    <Link href="/archive"><div className={styles.label}>ARCHIVE</div></Link>
                        {/* <Link href="/archive" className={styles.indent}>Fall '23</Link>
                        <Link href="/archive" className={styles.indent}>Past Issues</Link> */}

                    <Link href="/about"><div className={styles.label}>ABOUT</div></Link>
                        <Link href="/about"><div className={styles.indent}>Mission</div></Link>
                        <Link href="/about/staff"><div className={styles.indent}>Staff</div></Link>

                    <Link href="/blog"><div className={styles.label}>BLOG</div></Link>
                    
                    <Link href="/contact"><div className={styles.label} >CONTACT</div></Link>
                </div>
            </div>
            <Link href="/" className={styles.logo}>
                <Image
                    src="/logo-black-box-ora.png"
                    width={55}
                    height={55}
                    alt='Agora logo'
                />
            </Link>
        </div>
)}