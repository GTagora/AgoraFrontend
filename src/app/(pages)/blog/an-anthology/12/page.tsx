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
                        src='/blog/an-anthology/12.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>sunshine and rainbows</h1>
                    <div className={styles.text}>
                        Sunshine and rainbows. Words that are often used to describe life. To me, they mean light and promise. Light that exposes all darkness and a promise that is unchanging and stretches across all skies.<br/><br/>
                        Then the storms come. They bring about gray skies, darkness. The light we once saw feels distant and the promise unkept.<br/><br/>
                        But then the water falls. Scattered and tattered it covers the earth. Wasn’t water supposed to bring life? For gentle drops nourish but floods consume. How will I choose to view this water?<br/><br/>
                        Consume or nourish, only time and peace will tell. Eventually the storm passes. Has it nourished or consumed, I do not know. But then the light comes out again, and the rainbow forms. The light and the promises I am reminded.<br/><br/>
                        And I remember…<br/><br/>
                        I am home…

                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology" className={styles.href}>&lt;&nbsp; Contents</Link>
                    <Link href="/blog/an-anthology/13" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};