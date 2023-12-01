import Link from 'next/link'
import Header from './components/header'
import styles from './notfound.module.css'

export default function NotFound() {
    return (
        <div>
            <Header />
            <div className={styles.main}>
                <h1>Hi there!</h1>
                <p className={styles.message}>Unfortunately, we could not find the page you were looking for.</p>
                <Link href="/">
                    <div className={styles.button}>return home</div>
                </Link>
            </div>
        </div>
)}