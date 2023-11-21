import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'

export default function Header() {
    return (
    <div className={styles.navbar}>
        <Link href="/">
            <Image
                className={styles.logo}
                src="/logo-black-box.png"
                width={75}
                height={75}
                alt='Agora logo'
            />
        </Link>
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