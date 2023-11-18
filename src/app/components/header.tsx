import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Header() {
    return (
    <div className={styles.navbar}>
        <Image
            className={styles.logo}
            src="/logo-black-box.png"
            width={70}
            height={70}
            alt='Agora logo'
        />
        <div className={styles.navbarEnd}>
            <div className={styles.navbarButton}>
                <Link href="/about">ABOUT</Link>
            </div>
            <div className={styles.navbarButton}>
                <Link href="/archive">ARCHIVE</Link>
            </div>
            <div className={styles.navbarButton}>
                <Link href="/contact">CONTACT</Link>
            </div>
        </div>
    </div>
)}