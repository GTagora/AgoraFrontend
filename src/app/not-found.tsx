import Link from 'next/link'
import styles from './page.module.css'

export default function NotFound() {
    return (
        <div>
            <h2>There was a problem.</h2>
            <p>We could not find the page you were looking for.</p>
            <Link href="/contact">
            <div className={styles.button}>&#x2192;&nbsp;&nbsp;&nbsp;&nbsp;stay up to date</div>
        </Link>
        </div>
)}