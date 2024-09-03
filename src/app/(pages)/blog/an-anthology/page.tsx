import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const contents = [
    {
        id: 1,
        title: 'Creator',
        href: 'an-anthology/1'
    },
    {
        id: 2,
        title: 'many voices',
        href: 'an-anthology/2'
    },
    {
        id: 3,
        title: 'the doorkeeper',
        href: 'an-anthology/3'
    },
    {
        id: 4,
        title: 'listening',
        href: 'an-anthology/4'
    },
    {
        id: 5,
        title: 'one more step',
        href: 'an-anthology/5'
    },
    {
        id: 6,
        title: "reflecton's vantage - the summit",
        href: 'an-anthology/6'
    },
    {
        id: 7,
        title: 'listen, listen!',
        href: 'an-anthology/7'
    },
    {
        id: 8,
        title: 'listen, listen! pt. 2',
        href: 'an-anthology/8'
    },
    {
        id: 9,
        title: 'when i think about the Lord',
        href: 'an-anthology/9'
    },
    {
        id: 10,
        title: '1698',
        href: 'an-anthology/10'
    },
    {
        id: 11,
        title: 'two sparrows',
        href: 'blog/an-anthology/11'
    },
    {
        id: 12,
        title: 'sunshine and rainbows',
        href: 'an-anthology/12'
    },
    {
        id: 13,
        title: 'prune',
        href: 'an-anthology/13'
    },
    {
        id: 14,
        title: 'fureworks - freedom',
        href: 'an-anthology/14'
    },
    {
        id: 15,
        title: 'freedom - to my friends',
        href: 'an-anthology/15'
    },
    {
        id: 16,
        title: 'dwell',
        href: 'an-anthology/16'
    },
    {
        id: 17,
        title: '22 - an ode to life',
        href: 'an-anthology/17'
    },
]

export default function Page() {
    return(
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    {/* <Image 
                        className={styles.image}
                        src="/blog/an-anthology/3.jpg"
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>credit</p> */}
                    <h1 className={styles.title}> An Anthology of Joy and Thought Vol. 1</h1>
                    <h2 className={styles.author}>By Stephen Noh</h2>
                    <h3 className={styles.date}>SUMMER 2024</h3>
                    <h2 className={styles.subtitle}>0. Preface</h2>
                    <p className={styles.text}>
                    As I’ve come to grow more in my faith and walk with Christ, I feel like my senses and observation skills have also heightened. In a way, I feel like my eyes and ears have truly been opened.
                    <br/><br/>
                    I think a lot. Like a lot. Sometimes that’s a helpful thing, other times it leads to overthinking. More often than not though, I think it helps me love Him more. I love just jotting down these thoughts as they pop into my head as I’m taking a walk, cooking, taking pictures, out with friends, whatever it may be. I feel like the Lord has continuously reminded me of His goodness as I’ve grown to think more creatively and observantly.
                    <br/><br/>
                    One thing I’ve been reflecting and thinking about a lot lately is a life with God. Not just a life for God or a life seeking God, but one that seeks to be with Him. Inherently, I believe a life with God implies that I do things for Him and that I seek Him in all things, but I believe that this concept of “with” stretches even further beyond. I think it’s how I choose to think and live on the daily. What is the first response in my head when I experience something? Who is the first one I turn to in peace or turmoil? In idleness or commotion? Why am I doing the things I do? Simple yet multi-faceted questions such as this. I believe a life with God seeks to have God be at the center of every aspect of my life. In walks. In boredom. In crying out. In sorrow. In joy. In victory. In everything. I’ve come to slowly see God in all these aspects of my life as I’ve continued to walk with Him and there is still so much more to see and learn.
                    <br/><br/>
                    With that said, here is An Anthology of Joy and Thought Vol. 1. Authored and taken by me, Stephen Noh, but ultimately by the Lord, my Father in Heaven. This is a collection of some raw thoughts in the day to day, reflections of life, and expressions of gratitude/love in the form of photography and attempted prose. Nothing in here is heavily edited, it is merely a reflection of what I’ve come to reminisce on at the moment. So with that said, reader, I welcome you to join me in a little walk I call life and to see a little testament of how He has spoken to me.
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