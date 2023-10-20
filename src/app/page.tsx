import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/AgoraLogo.png"
          width={360}
          height={150}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/About" className={styles.card}>
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>Placeholder Text</p>
        </Link>

        <Link href="/Blog" className={styles.card}>
          <h2>
            Blog <span>-&gt;</span>
          </h2>
          <p>Placeholder Text</p>
        </Link>
      </div>
    </main>
  )
}
