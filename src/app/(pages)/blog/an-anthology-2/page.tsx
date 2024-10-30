import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const contents = [
    {
        id: 1,
        title: 'to my friends...',
        href: 'an-anthology-2/1'
    },
    {
        id: 2,
        title: 'lighthouse',
        href: 'an-anthology-2/2'
    },
    {
        id: 3,
        title: 'childlike faith',
        href: 'an-anthology-2/3'
    },
    {
        id: 4,
        title: 'Today',
        href: 'an-anthology-2/4'
    },
    {
        id: 5,
        title: 'The Gardener',
        href: 'an-anthology-2/5'
    },
    {
        id: 6,
        title: 'Living for Jesus',
        href: 'an-anthology-2/6'
    },
    {
        id: 7,
        title: 'silence and solitude',
        href: 'an-anthology-2/7'
    },
    {
        id: 8,
        title: 'wait',
        href: 'an-anthology-2/8'
    },
    {
        id: 9,
        title: 'warmth',
        href: 'an-anthology-2/9'
    },
    {
        id: 10,
        title: 'simplicity',
        href: 'an-anthology-2/10'
    },
    {
        id: 11,
        title: 'a longing',
        href: 'blog/an-anthology-2/11'
    },
    {
        id: 12,
        title: 'a prayer for despieration',
        href: 'an-anthology-2/12'
    },
    {
        id: 13,
        title: "What's in a name?",
        href: 'an-anthology-2/13'
    },
    {
        id: 14,
        title: 'Kintsugi',
        href: 'an-anthology-2/14'
    },
    {
        id: 15,
        title: 'Remember when?',
        href: 'an-anthology-2/15'
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
                                src="/blog/an-anthology-2/3.jpg"
                                width={600}
                                height={600}
                                alt='article image'/>
                            <p className = {styles.credit}>Image: Stephen Noh</p>
                        </div>
                        <div className={styles.col}>
                            <h1 className={styles.title}> An Anthology of Joy and Thought Vol. 2</h1>
                            <h2 className={styles.author}>By Stephen Noh</h2>
                            <h3 className={styles.date}>FALL 2024</h3>
                        </div>
                    </div>
                    <h2 className={styles.subtitle}>Preface</h2>
                    <p className={styles.text}>
                    Hello, reader!
                    <br/><br/>
                    Welcome back to An Anthology of Joy and Thought. This is the second rendition and honestly, I feel like writing these thoughts and pieces have been such an anchor to my faith recently. They remind me to take a step back from moments, to rest and find peace in every moment. To reflect and grow.
                    <br/><br/>
                    This season is not without its troubles and trials. It’s been an overwhelming season with lots going on. Thankfully nothing with myself, but it’s been quite chaotic for those around me. With that said, finding time to read and pray has been keeping me steady and rooted while He has continued to reveal to me my brokenness but even more importantly, His grace. That is joy to me. 
                    <br/><br/>
                    Joy, to many, may seem like an emotion. I think as I’ve come to reflect, it’s more like a state of mind or a  lifestyle. I don’t think it can be limited to just the weak description of an “emotion” like happiness or sadness, etc. You can be joyful and sad. Joyful and angry. Ultimately, joy comes purely from the Lord and only when we live in this joy can our mindstate truly be transformed. It means to live with God, and in general, I feel like I’ve been inviting God to join me in more of what I’ve been doing. Seeing Him in my passenger seat on my commute to work as I sing or pray, watching me fail and fall behind in my work (gotta work on that), encouraging my next rep at the gym, or sharing in moments of fellowship I share with my newfound community. I feel God’s presence amidst it all. As I’ve invited the Lord’s presence more, I’ve felt more the weight of my own brokenness. These past couple months He’s reminded me of just how broken I am. However, just as my discipler shared with me, as I come to see the depths of my brokenness, the power and magnitude of His grace becomes ever more apparent. His grace and love truly covers all and everyday I can live confidently in that. That is where my joy comes from.
                    <br/><br/>
                    So here is a little snippet of that. The ways God has broken me, shown me His love, and shown me how much more I need Him. It’s a little darker than my previous volume, but hey, this is life. It’s never just sunshine and rainbows. It’s a journey in His joy through my thoughts. So welcome reader, to the second rendition of this anthology in this wonderful gift and walk we call life.
                    <br/><br/>
                    In His steadfast love,
                    <br/>
                    Stephen

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