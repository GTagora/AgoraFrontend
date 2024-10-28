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
                        src='/blog/an-anthology/7.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>listen, listen!</h1>
                    <div className={styles.text}>
                    close your eyes… <br/>
                    what do you hear? <br/>
                    the gentle flow and cascade of water~ <br/>
                    &emsp;&emsp;oh, how Your Word is a never-ceasing river of life! <br/>
                    the sounds of children playing as they run worry-free~ <br/>
                    &emsp;&emsp;oh, how much more do You love Your children! <br/>
                    the gentle crunch of each grass bristle under my feet~ <br/>
                    &emsp;&emsp;oh, how You provide for all. Why should I worry? <br/>
                    the gentle wisp of the wind on my ears~ <br/>
                    &emsp;&emsp;oh, how much more beautiful is Your voice! <br/>
                    the simple laughter and conversations of Your creation passing~ <br/>
                    &emsp;&emsp;oh, how beautiful have You made your image-bearers <br/>
                    <br/>
                    but soon… <br/>
                    &emsp;&emsp;the water may sit still <br/>
                    &emsp;&emsp;the children will grow old <br/>
                    &emsp;&emsp;the grass will dry out <br/>
                    &emsp;&emsp;the winds will cease <br/>
                    <br/>
                    but soon the people will worship <br/>
                    &emsp;&emsp;for Your voice is never ceasing. <br/>
                    &emsp;&emsp;how steadfast and wonderful You are. <br/>

                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology" className={styles.href}>&lt;&nbsp; Contents</Link>
                    <Link href="/blog/an-anthology/8" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};