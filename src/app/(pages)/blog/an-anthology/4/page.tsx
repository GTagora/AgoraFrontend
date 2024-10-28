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
                        src='/blog/an-anthology/4.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>listening</h1>
                    <div className={styles.text}>
                        how underrated is hearing? <br/>
                        to hear a voice call your name <br/>
                        to hear the birds chirp in the morning <br/>
                        to hear the gentle trickle of water <br/>
                        to hear the tap of each footstep <br/>
                        how beautiful that sound <br/>
                        how beautifully He has crafted these sounds <br/>
                        the congregated symphony of voices undistinguishable in worship, <br/>
                        what a blessing <br/>
                        <br/>
                        To hear You, oh God <br/>
                        Your mighty voice <br/>
                        <br/>
                        Speak to me. <br/>
                        Use me. <br/>
                        <br/>
                        as a mouthpiece so that others may come to hear You <br/>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology" className={styles.href}>&lt;&nbsp; Contents</Link>
                    <Link href="/blog/an-anthology/5" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};