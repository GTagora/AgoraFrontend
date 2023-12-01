import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Header from './components/header'
import Subtitle from './components/subtitle';
import articles from '../JournalEntries.json'
import Card from './(templates)/card'


export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Header /> */}

      <div className={styles.heading}>
        <Subtitle />
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
          {/* TODO: see about extracting articles container component to pass in articles json information */}
          <Card id={0} />
          <Card id={1} />
          <Card id={2} />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>
    </main>

  )
}
