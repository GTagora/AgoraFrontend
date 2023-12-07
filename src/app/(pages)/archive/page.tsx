
import styles from './page.module.css'
import Link from 'next/link'
import Footer from '../../components/footer'

export default function Archive() {
    return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Archive page</h1>
        <p>No archive yet, as this is our debute issue.</p>
        <p>Check back in next semester!</p>
        <Link href="/">
            <div className={styles.button}>&#x2192;&nbsp;&nbsp;&nbsp;&nbsp;Fall '23 Release</div>
        </Link>
      </div>
      <Footer />
    </main>
    )
}
