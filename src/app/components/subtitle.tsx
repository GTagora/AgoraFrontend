"use client";
import { motion } from 'framer-motion'
import styles from './subtitle.module.css'

const subtitleVariants = {
    animate: {}
}

export default function Subtitle() {
    return (
        <div>
            <motion.div
                className={styles.container}
                whileHover="animate">
                <motion.div
                    variants={subtitleVariants}
                    initial={{ opacity: 1 }}
                    transition={{ duration: .7 }}
                    whileHover={{ opacity: 0 }}
                    >
                <h2>Georgia Tech’s Journal of Christian Thought</h2></motion.div>
                <motion.div
                    variants={subtitleVariants}
                    initial={{ y:-30, opacity: 0 }}
                    transition={{ duration: .7, delay:.2}}
                    whileHover={{ opacity: 1 }}>
                <h3>A marketplace of ideas and spiritual nourishment — all for His glory.</h3></motion.div>
            </motion.div>
        </div>
        
)}