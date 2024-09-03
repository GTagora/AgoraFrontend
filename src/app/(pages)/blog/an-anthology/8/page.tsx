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
                        src='/blog/an-anthology/8.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>listen, listen! pt. 2</h1>
                    <div className={styles.text}>
                    listen, listen! To the birds wishing each other “good day!” <br/>
                    listen, listen! To the tender drum of the rain <br/>
                    listen, listen! To the patter of shoes trekking ground <br/>
                    listen, listen! To the sounds of children laughing in play <br/>
                    listen, listen! To the hum of car tires on the road <br/>
                    listen, listen! To the gentle purr of the wind nudging the grass <br/>
                    listen, listen! To the bustle of Your people everywhere <br/>
                    listen, listen! and rest in the peace of the still quiet <br/>
                    . <br/>
                    . <br/>
                    . <br/>
                    listen, listen! Can you hear the mighty voice of the Lord? <br/>
                    listen, listen! and obey His loving commands <br/>
                    listen, listen! As the people turn to repentance <br/>
                    listen, listen! Your creation rises to lift Your praise <br/>
                    listen, listen! To the myriad of voices and their shouts of glory <br/>
                    listen, listen! To the symphony of eternity <br/>

                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology" className={styles.href}>&lt;&nbsp; Contents</Link>
                    <Link href="/blog/an-anthology/9" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};