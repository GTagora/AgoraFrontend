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
        <div className={styles.buttons}>
            <div className={styles.item}>
                <Link href="/"><div className={styles.label} >HOME</div></Link>
            </div>
            <div className={styles.item}>
                <Link href="/blog"><div className={styles.label} >BLOG</div></Link>
            </div>
            <div className={styles.item}>
                <Link href="/archive"><div className={styles.label} >ARCHIVE</div></Link>
                <Link href="/about"><div className={styles.dropdown} >Fall '23</div></Link>
                <Link href="/about"><div className={styles.dropdown} >Past Issues</div></Link>
            </div>
            <div className={styles.item}>
                <Link href="/about"><div className={styles.label} >ABOUT</div></Link>
                <Link href="/about"><div className={styles.dropdown} >Mission</div></Link>
                <Link href="/about"><div className={styles.dropdown} >Staff</div></Link>
            </div>
            <div className={styles.item}>
                <Link href="/contact"><div className={styles.label} >JOIN</div></Link>
            </div>
        </div>
    </div>
)}