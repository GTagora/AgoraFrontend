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
                        src='/blog/an-anthology/16.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>dwell</h1>
                    <div className={styles.text}>
                        to sit here <br/>
                        &emsp;&emsp;amidst Your presence <br/>
                        &emsp;&emsp;&emsp;&emsp;in the stillness <br/>
                        &emsp;&emsp;&emsp;&emsp;in the quiet <br/>
                        Your peace overflows in me <br/>
                        &emsp;&emsp;and the noises cease <br/>
                        &emsp;&emsp;&emsp;&emsp;no more worries <br/>
                        &emsp;&emsp;&emsp;&emsp;no more fears <br/>
                        <br/>
                        to talk to You <br/>
                        to talk with You <br/>
                        to listen to You <br/>
                        to be with You <br/>
                        to dwell <br/>
                        may i dwell <br/>
                        … <br/>
                        … <br/>
                        … <br/>
                        and would all else fade away… <br/>
                        <br/>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology/15" className={styles.href}>&lt;&nbsp; Previous</Link>
                    <Link href="/blog/an-anthology/17" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};