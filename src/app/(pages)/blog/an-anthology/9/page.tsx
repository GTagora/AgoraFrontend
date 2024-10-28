import styles from './article.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                <Link href="/blog/an-anthology" className={styles.breadcrumb}>An Anthology of Joy and Thought Vol. 1</Link>
                    <Image 
                        className={styles.image}
                        src='/blog/an-anthology/9.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>when i think about the Lord</h1>
                    <div className={styles.text}>
                    when i think about the Lord, my heart cries out in anguish <br/>
                    when i think about the Lord, i see my sinfulness <br/>
                    when i think about the Lord, i’m reminded how broken i am <br/>
                    when i think about the Lord, i see the cross <br/>
                    when i think about the Lord, i’m reminded that i am forgiven <br/>
                    when i think about the Lord, i see the blood of the Lamb <br/>
                    when i think about the Lord, my heart remembers that i am redeemed <br/>
                    <br/>
                    when i think about the Lord, i want to shout <br/>
                    when i think about the Lord, His blood has covered my brokenness <br/>
                    when i think about the Lord, i can live confidently in His grace <br/>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology" className={styles.href}>&lt;&nbsp; Contents</Link>
                    <Link href="/blog/an-anthology/10" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};