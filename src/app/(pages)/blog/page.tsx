import styles from './page.module.css'
import Link from 'next/link'
import Footer from '@/app/components/footer'

export default function About() {
    return (
    <main className={styles.main}>
      <h1>Blog</h1>
      <div className={styles.container}>
        <p>Content coming Spring &apos;24!</p>
        <Link href="/contact">
            <div className={styles.button}>&#x2192;&nbsp;&nbsp;&nbsp;&nbsp;stay up to date</div>
        </Link>
      </div>
      {/* <div className={styles.footer}><Footer /></div> */}
    </main>
    )
}
