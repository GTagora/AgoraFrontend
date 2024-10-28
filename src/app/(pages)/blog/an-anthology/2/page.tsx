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
                        src='/blog/an-anthology/2.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>many voices</h1>
                    <div className={styles.text}>
                    oh how I can’t wait for the day to hear the voices of many <br/>
                    to hear the languages of multitude <br/>
                    in unification <br/>
                    singing praises <br/>
                    to the one true King <br/><br/>

                    <b>Inspired by Revelation 14:1-5</b>

                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology" className={styles.href}>&lt;&nbsp; Contents</Link>
                    <Link href="/blog/an-anthology/3" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};