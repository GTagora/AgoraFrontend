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
                        src='/blog/an-anthology/15.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>freedom - to my friends</h1>
                    <div className={styles.text}>
                        <b>July 4th, 2024</b> <br/>
                        sitting here together <br/>
                        our eyes up <br/>
                        lights burst and blast across the sky <br/>
                        to the left and to the right <br/>
                        brothers and sisters come together <br/>
                        <br/>
                        to my friends in all the places <br/>
                        how do you do? <br/>
                        are you too sitting under this sky <br/>
                        this day to remember the freedom <br/>
                        and to be reminded of all the more freedom we have in Christ <br/>
                        <br/>
                        i miss you all so dearly <br/>
                        until the day we see each other again <br/>
                        or until we meet again in Heaven <br/>
                        be well <br/>
                        and may the Lord bless you… <br/>

                        <br/>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology/14" className={styles.href}>&lt;&nbsp; Previous</Link>
                    <Link href="/blog/an-anthology/16" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};