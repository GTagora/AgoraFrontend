"use client";
import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'
import { motion } from 'framer-motion'

export default function Header() {

    const itemVars= {
        initial: {
            opacity: 1,
        },
        hover: {
            opacity: 1,
            transition: {
                duration: .7,
                staggerChildren: .1,
            }
        },
    }

    const dropdownVars= {
        initial: {
            opacity: 0,
        },
        hover: {
            opacity: 1,
            y:5,
            transition: { duration: .2 },
        },
    }

    return (
    <div className={styles.navbar}>
    {/* LOGO */}
        <Link href="/">
            <Image
                className={styles.logo}
                src="/logo-black-box.png"
                width={75}
                height={75}
                alt='Agora logo'
            />
        </Link>
        <div className={styles.buttons}>
        {/* HOME */}
            {/* <motion.div 
                className={styles.item}
                variants={itemVars}
                initial="initial"
                whileHover="hover">
                <Link href="/"><div className={styles.label} >HOME</div></Link>
            </motion.div> */}

        {/* ABOUT */}
            <motion.div 
                className={styles.item}
                variants={itemVars}
                initial="initial"
                whileHover="hover">
                <Link href="/about"><div className={styles.label} >ABOUT</div></Link>

            {/* MISSION */}
                <Link href="/about">
                    <motion.div 
                        className={styles.dropdown}
                        variants={dropdownVars}>
                    Mission</motion.div></Link>
            {/* STAFF */}
                <Link href="/about/staff">
                    <motion.div 
                        className={styles.dropdown}
                        variants={dropdownVars}>
                    Staff</motion.div></Link>
            </motion.div>

        {/* ARCHIVE */}
            <motion.div 
                className={styles.item}
                variants={itemVars}
                initial="initial"
                whileHover="hover">
                <Link href="/archive"><div className={styles.label} >ARCHIVE</div></Link>

            {/* CURRENT ISSUE */}
                <Link href="/#latest-issue">
                    <motion.div 
                        className={styles.dropdown}
                        variants={dropdownVars}>
                    Latest Issue</motion.div></Link>
            {/* PAST ISSUES */}
                <Link href="/archive">
                    <motion.div 
                        className={styles.dropdown}
                        variants={dropdownVars}>
                    Past Issues</motion.div></Link>
            </motion.div>

        {/* BLOG */}
            <motion.div 
                className={styles.item}
                variants={itemVars}
                initial="initial"
                whileHover="hover">
                <Link href="/blog"><div className={styles.label} >BLOG</div></Link>
            </motion.div>

        {/* CONTACT */}
            <motion.div
                className={styles.item}
                variants={itemVars}
                initial="initial"
                whileHover="hover">
                <Link href="/contact"><div className={styles.label} >CONTACT</div></Link>
            </motion.div>
        
        </div>
    </div>
)}