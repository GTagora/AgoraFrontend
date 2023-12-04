import styles from './staff.module.css'
import Footer from '@/app/components/footer'

export default function Staff() {
    return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.pageHeader}>Staff & Contributors</h1>
      </div>
      <Footer />
    </main>
)}