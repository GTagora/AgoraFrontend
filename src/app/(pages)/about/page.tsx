import styles from './page.module.css'
import Footer from '../../components/footer'
import Header from '@/app/components/header'

export default function About() {
    return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>mission page</h1>
      </div>
      <Footer />
    </main>
    )
}
