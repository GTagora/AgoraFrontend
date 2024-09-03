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
                        src='/blog/an-anthology/6.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>reflection&apos;s vantage - the summit</h1>
                    <div className={styles.text}>
                    at the peak i sit <br/>
                    the horizon stretches <br/>
                    the wind bellows <br/>
                    the earth trembles <br/>
                    slowly, a new day rises <br/>
                    in the warmth of the sun <br/>
                    warmth overcomes <br/>
                    … <br/>
                    … <br/>
                    … <br/>
                    in the silence i sit still <br/>
                    and a gentle breeze embraces my cheek <br/>
                    “Isn’t it a beautiful view? <br/>
                    There is still so much to show you. <br/>
                    Trust in <b><i>Me</i></b>. <br/>
                    Sit with <b><i>Me</i></b>, and <br/>
                    <b><i>I</i></b> will make your paths straight.” <br/>
                    <br/>
                    <b>Inspired by 1 Kings 19:10-13</b>

                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology" className={styles.href}>&lt;&nbsp; Contents</Link>
                    <Link href="/blog/an-anthology/7" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};