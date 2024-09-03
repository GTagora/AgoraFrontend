import styles from './article.module.css'
import Image from 'next/image';

export default async function Page() {

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <Image 
                        className={styles.image}
                        src='/blog/an-anthology/1.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>credit</p>
                    <h1 className={styles.title}>title</h1>
                    <h2 className={styles.author}>By Stephen Noh</h2>
                    <h3 className={styles.date}>date</h3>
                    <div className={styles.text}>
                        text
                    </div>
                </div>
            </div>
        </div>
)};