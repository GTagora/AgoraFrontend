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
                        src='/blog/an-anthology/3.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>the doorkeeper</h1>
                    <div className={styles.text}>
                        the bells ring <br/>
                        the voices shout <br/>
                        as i sit on Your doorstep <br/>
                        &emsp;&emsp;hallelujah <br/>
                        &emsp;&emsp;&emsp;&emsp;hallelujah <br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;they sing <br/>
                        oh, how lovely is Your dwelling place oh God <br/>
                        <br/>
                        to even sit here holding the doors to Your temple <br/>
                        it is so much better than what the world has given me <br/>
                        <br/>
                        what more do i need? <br/>
                        to simply sit and serve in Your presence <br/>
                        that is all i desire <br/>
                        <br/>
                        i cannot wait for this day to never end… <br/>
                        <br/>

                        <b>inspired and motivated, an ode to Psalm 84</b>

                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology" className={styles.href}>&lt;&nbsp; Contents</Link>
                    <Link href="/blog/an-anthology/4" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};