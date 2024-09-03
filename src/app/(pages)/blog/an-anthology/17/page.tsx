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
                        src='/blog/an-anthology/17.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>22 - an ode to life</h1>
                    <div className={styles.text}>
                        to the infant Stephen, the 3 year old who’d sneak out of the house to the playground…<br/><br/>

                        to the 6 year old who made his first friend…<br/><br/>

                        to the 12 year old who picked up the viola…<br/><br/>

                        to the 16 year old who lost a friend…<br/><br/>

                        to the 19 year old who didn’t want to live anymore…<br/><br/>

                        you’re 22 now… <br/>
                        &emsp;&emsp;filled with joy and everlasting love <br/>
                        oh my soul, so why do you fear <br/>
                        &emsp;&emsp;why do you fret <br/>
                        &emsp;&emsp;&emsp;&emsp;for the Lord your God has delivered you <br/>
                        &emsp;&emsp;&emsp;&emsp;He has freed you <br/>
                        <br/>
                        so wake up! <br/>
                        look around! <br/>
                        be filled with joy <br/>
                        for the joy of the Lord is your strength <br/>
                        And oh! how He looks upon His child with delight <br/>

                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology" className={styles.href}>&lt;&nbsp; Contents</Link>
                </div>
            </div>
        </div>
)};