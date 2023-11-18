import styles from './page.module.css'
import Header from '@/app/components/header'

export default function About() {
    return (
    <main className={styles.main}>
      <Header />
      <div>
        <h1>About page!</h1>
      </div>
    </main>
    )
}
