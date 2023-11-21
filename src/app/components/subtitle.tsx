"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './subtitle.module.css'

const subtitleVariants = {
    animate: {}
}

export default function Subtitle() {
    return (
        <motion.div className={styles.container} whileHover="animate">
            <Image
                className={styles.logo}
                src="/logo-black-box.png"
                width={100}
                height={100}
                alt='Agora logo'
            />
            <h1>AGORA</h1>
            <motion.div
                // whileHover="animate"
                >
                <motion.div
                    variants={subtitleVariants}
                    initial={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{ opacity: 0 }}
                    >
                <h2>Georgia Tech’s Journal of Christian Thought</h2></motion.div>
                <motion.div
                    variants={subtitleVariants}
                    initial={{ y:-30, opacity: 0 }}
                    transition={{ duration: 1, delay:.2}}
                    whileHover={{ opacity: 1 }}>
                <h3>A marketplace of ideas and spiritual nourishment — all for His glory.</h3></motion.div>
            </motion.div>
        </motion.div>
        
)}