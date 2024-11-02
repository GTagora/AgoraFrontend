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
                        src='/blog/an-anthology/5.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>one more step</h1>
                    <div className={styles.note}>Note: for formatting purposes, this piece is best viewed on desktop</div>
                    <div className={styles.desk}>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;i’m here. <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;… <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;… <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;… <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;one more step… <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;one more step… keep pushing <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;one more step… <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;one more step… we can do this… <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;i’m not alone… <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;wait… … … <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;one more step… <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;one more step… can i really do this? <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;one more step… my legs pain so dearly <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;one more step… <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;one more step… <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;one more step… is false hope i tell myself… <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;one more step… i’m almost there <br/>
                        &emsp;&emsp;&emsp;&emsp;one more step… it hurts so much <br/>
                        &emsp;&emsp;&emsp;one more step… is this really possible? <br/>
                        &emsp;&emsp;one more step… <br/>
                        &emsp;one more step… <br/>
                        a summit before me. formidable it stands. can i really make it? is this really necessary? <br/>
                    </div>
                    <div className={styles.mobile}>
                        i’m here. <br/>
                        … <br/>
                        … <br/>
                        … <br/>
                        one more step… <br/>
                        one more step… keep pushing <br/>
                        one more step… <br/>
                        one more step… we can do this… <br/>
                        i’m not alone… <br/>
                        wait… … … <br/>
                        one more step… <br/>
                        one more step… can i really do this? <br/>
                        one more step… my legs pain so dearly <br/>
                        one more step… <br/>
                        one more step… <br/>
                        one more step… is false hope i tell myself… <br/>
                        one more step… i’m almost there <br/>
                        one more step… it hurts so much <br/>
                        one more step… is this really possible? <br/>
                        one more step… <br/>
                        one more step… <br/>
                        a summit before me. formidable it stands. can i really make it? is this really necessary? <br/>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology/4" className={styles.href}>&lt;&nbsp; Previous</Link>
                    <Link href="/blog/an-anthology/6" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};