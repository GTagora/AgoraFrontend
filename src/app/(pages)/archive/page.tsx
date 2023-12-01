
import styles from './page.module.css'
import Header from '@/app/components/header'
import Footer from '../../components/footer'

export default function Archive() {
    return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <h1>Archive page!</h1>
      </div>

      <Footer />
    </main>
    )
}
