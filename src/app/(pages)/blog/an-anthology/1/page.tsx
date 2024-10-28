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
                        src='/blog/an-anthology/1.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>Creator</h1>
                    <div className={styles.text}>
                        dust <br/>
                        dirt <br/>
                        from which You have formed me. <br/>
                        <br/>
                        Creator You were. <br/>
                        Creator You are. <br/>
                        Creator You will be. <br/>
                        <br/>
                        You formed me in love. <br/>
                        Your image You made me. <br/>
                        An image-bearer, a fragment of You. <br/>
                        <br/>
                        You are a creator. <br/>
                        not a duplicator. <br/>
                        Each and every creation unique. <br/>
                        <br/>
                        why do i compare <br/>
                        why do i complain <br/>
                        <br/>
                        Before anything else, <br/>
                        Fearfully and wonderfully, <br/>
                        You have made me. <br/>
                        <br/>
                        until the day this dust returns, <br/>
                        and i am wholly made new. <br/>
                        may i continue to worship You <br/>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology" className={styles.href}>&lt;&nbsp; Contents</Link>
                    <Link href="/blog/an-anthology/2" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};