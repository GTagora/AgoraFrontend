import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
  return (
  <main className={styles.main}>
    <Header />
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
    <div className={styles.container}>
      <h1>Fall '23 Release</h1>
    </div>
    <Footer />
  </main>
    
  )
}
