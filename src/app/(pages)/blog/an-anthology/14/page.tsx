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
                        src='/blog/an-anthology/14.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>fireworks - freedom</h1>
                    <div className={styles.text}>
                        <b>July 4th, 2024</b> <br/>
                        <br/>
                        A symbol of freedom… <br/>
                        of celebration <br/>
                        <br/>
                        For one day in the year, all eyes look to the skies, <br/>
                        to remember… <br/>
                        <br/>
                        Families, couples, students, children, <br/>
                        gather under an illuminated night sky <br/>
                        to remember… <br/>
                        <br/>
                        If an american freedom tastes so sweet, <br/>
                        how much sweeter… <br/>
                        <br/>
                        how much sweeter <br/>
                        will the completed freedom of Christ <br/>
                        when all eyes are gathered <br/>
                        oh, how much sweeter that will be <br/>
                        <br/>
                    </div>
                </div>

                <div className={styles.buttons}>
                <Link href="/blog/an-anthology/13" className={styles.href}>&lt;&nbsp; Previous</Link>
                <Link href="/blog/an-anthology/15" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};