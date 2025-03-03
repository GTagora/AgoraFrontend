import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const contents = [
    {
        id: 1,
        title: 'Creator',
        href: 'an-anthology-3/1'
    },
    {
        id: 2,
        title: 'many voices',
        href: 'an-anthology-3/2'
    },
    {
        id: 3,
        title: 'the doorkeeper',
        href: 'an-anthology-3/3'
    },
    {
        id: 4,
        title: 'listening',
        href: 'an-anthology-3/4'
    },
    {
        id: 5,
        title: 'one more step',
        href: 'an-anthology-3/5'
    },
    {
        id: 6,
        title: "reflecton's vantage - the summit",
        href: 'an-anthology-3/6'
    },
    {
        id: 7,
        title: 'listen, listen!',
        href: 'an-anthology-3/7'
    },
    {
        id: 8,
        title: 'listen, listen! pt. 2',
        href: 'an-anthology-3/8'
    },
    {
        id: 9,
        title: 'when i think about the Lord',
        href: 'an-anthology-3/9'
    },
    {
        id: 10,
        title: '1698',
        href: 'an-anthology-3/10'
    },
    {
        id: 11,
        title: 'two sparrows',
        href: 'an-anthology-3/11'
    },
    {
        id: 12,
        title: 'sunshine and rainbows',
        href: 'an-anthology-3/12'
    },
    {
        id: 13,
        title: 'prune',
        href: 'an-anthology-3/13'
    },
    {
        id: 14,
        title: 'fireworks - freedom',
        href: 'an-anthology-3/14'
    },
    {
        id: 15,
        title: 'freedom - to my friends',
        href: 'an-anthology-3/15'
    },
    {
        id: 16,
        title: 'dwell',
        href: 'an-anthology-3/16'
    },
    {
        id: 17,
        title: '22 - an ode to life',
        href: 'an-anthology-3/17'
    },
]

export default function Page() {
    return(
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.hbox}>
                        <div className={styles.col}>
                            <Image 
                                className={styles.image}
                                src="/blog/an-anthology-3/intermission.jpg"
                                width={600}
                                height={600}
                                alt='article image'/>
                            <p className = {styles.credit}>Image: Stephen Noh</p>
                        </div>
                        <div className={styles.col}>
                            <h1 className={styles.title}> An Anthology of Joy and Thought Vol. 3</h1>
                            <h2 className={styles.author}>By Stephen Noh</h2>
                            <h3 className={styles.date}>SPRING 2025</h3>
                        </div>
                    </div>
                    <h2 className={styles.subtitle}>Preface</h2>
                    <p className={styles.text}>
                    </p><br/> <br/>
                    <h2 className={styles.subtitle}>Contents</h2>
                    <div className={styles.contentsContainer}>
                        {contents.map(item => 
                            <Link key={item.id} href={item.href} className={styles.content}>
                                {item.id}&nbsp;&nbsp; 
                                <p className={styles.href}>{item.title}</p>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}