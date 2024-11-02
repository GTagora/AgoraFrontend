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
                        src='/blog/an-anthology/10.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>1698</h1>
                    <div className={styles.text}>
                        <b>1698</b> <br/>
                        A chosen seed falls to the ground <br/>
                        on healthy, fertile soil <br/>
                        watered by God and grown with love <br/>
                        through storms and tribulation it has steadfast grown <br/>
                        <br/>
                        <b>2024</b> <br/>
                        A chosen tree stands grand and tall <br/>
                        providing healthy soil to those around <br/>
                        watching over generations and more to come <br/>
                        through hustle and bustle it continues to stand strong <br/>
                        <br/><br/>
                        A tree I saw in this park had this 1698 tag and I came to realize that this tree was planted then. It’s been here for 326 years. Wow. Imagine the history, the life that this tree has seen amidst the storms, the droughts, the floods, yet it still continues to stand. How many seasons, how many changes has this tree gone through. How far have its roots stretched? I wonder how many different people, different testimonies have sat under the same shade as I reminiscing, reflecting, on life here. I pray that just as this tree has grown steadfast, that my love for the Lord would also grow steadfast, wide, abundant, and firm.

                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology/9" className={styles.href}>&lt;&nbsp; Previous</Link>
                    <Link href="/blog/an-anthology/11" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};