import styles from './page.module.css'
import Link from 'next/link'
import Header from '@/app/components/header'
import { motion } from 'framer-motion'

export default function About() {
    return (
    <main className={styles.main}>
      {/* <Header /> */}
      <h1>Blog</h1>
      <div className={styles.container}>
        <p>Content coming Spring '23!</p>
        <Link href="/contact">
            <div className={styles.button}>&#x2192;&nbsp;&nbsp;&nbsp;&nbsp;stay up to date</div>
        </Link>
      </div>
    </main>
    )
}
