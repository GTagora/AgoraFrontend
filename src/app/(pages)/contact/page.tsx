
import styles from './page.module.css'
import Header from '@/app/components/header'

export default function Contact() {
    return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <h1>Contact page!</h1>
      </div>
    </main>
    )
}
