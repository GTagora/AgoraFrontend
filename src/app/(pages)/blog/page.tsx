import styles from './page.module.css'
import Header from '@/app/components/header'

export default function About() {
    return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <h1>Blog</h1>
        <p>Content coming Spring '23!</p>
      </div>
    </main>
    )
}
