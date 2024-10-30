import styles from './article.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <Link href="/blog/an-anthology-2" className={styles.breadcrumb}>An Anthology of Joy and Thought Vol. 2</Link>
                    <Image 
                        className={styles.image}
                        src='/blog/an-anthology-2/1.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>Creator</h1>
                    <div className={styles.text}>
                        
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology-2" className={styles.href}>&lt;&nbsp; Contents</Link>
                    <Link href="/blog/an-anthology/2" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};