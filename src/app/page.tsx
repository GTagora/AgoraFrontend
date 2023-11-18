import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
// import Navbar from '@/app/navbar'
// import './reference.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <Image
          className={styles.logo}
          src="/logo-black-box.png"
          width={100}
          height={100}
          alt='Agora logo'
        />
        <h1>AGORA</h1>
        <h2>Georgia Tech’s Journal of Christian Thought</h2>
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
