import styles from './page.module.css'
import Header from '@/app/components/header'
import Footer from '../../components/footer'

export default function About() {
    return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>About page!</h1>
      </div>
      <Footer />
    </main>
    )
}
