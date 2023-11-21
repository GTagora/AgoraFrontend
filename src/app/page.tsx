import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Header from './components/header'
import Card from './card'

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
      <h3>A marketplace of ideas and spiritual nourishment — all for His glory.</h3>
    </div>

    <div className={styles.container}>
      <h1>Fall '23 Release</h1>

      <div className={styles.hbox}>
        <div className={styles.feature} >
          <p>carousel?</p>
        </div>
        <div className={styles.letter}>
          <h2>Letter from the editors:</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
          <h5>With love, <br /> Chris & Via</h5>
        </div>
      </div>

      <div className={styles.articlesContainer}>
        <Card title="i love God" genre="SOMETHING REALLY LONG"/>
        <Card title="I love jesus"/>
        <Card title="a really really really really really really really long title"/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      
    </div>
  </main>
    
  )
}
