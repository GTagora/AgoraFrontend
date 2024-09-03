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
                        src='/blog/an-anthology/13.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>prune</h1>
                    <div className={styles.text}>
                        One day I was on one of my daily walks and I saw this tree in my neighborhood with a dying branch. I noticed many trees in my area have had trees like this in recent times. Maybe it’s the summer heat or other reasons, but it was always one singular branch that was like this. This reminded me a lot of a sermon and a passage I heard a while back on John 15. This message talked about pruning and remaining in Him.
                        <br/><br/>
                        For a little background, go outside and look at a tree. Look carefully at its branches or trunk. You’ll notice those little tiny branches with some tiny leaves. Those are known as tree suckers. These tree suckers suck up life and nutrients to the tree but end up amounting to nothing. In a gardener’s perspective, they also prevent certain plants from bearing fruit, as they drain all the nutrients. Then comes a process of pruning. This process involves completely removing this tree sucker by cutting it off the tree. Realistically, this tree sucker is a branch of the tree and is still a part of the tree as much as any other healthy branch. Sometimes I think about the passage in Matthew 5:27-30 about lust. I know the context here is not the same but with the same idea of tearing out your eyes, I see the concept of pruning to be similar as if you’re getting a body part torn from you. That’s how painful I see pruning to be. Yet, these trees, (not by choice, of course, while we have a choice) go through this process to hopefully one day bear wonderful fruit.
                        <br/><br/>
                        This concept of pruning has been something I’ve been reflecting on a lot lately as I’ve really been dwelling on this newly started young adult life and the reasons why God has called me to Dallas. In this time period of struggling to understand where my future will be, and understanding that the dreams I have may not come to fruition, I’ve begun to ask myself, “What fruits does God have planned for me to bear this season? Is this even a season for me to bear fruit?” It’s been something I’ve been wrestling with for a little bit.
                        <br/><br/>
                        What things in my life right now is God trying to prune from me? What am I struggling to let go of? If I were to be honest, there are plenty to name. I won’t go into depth here, but it’s hard. It’s hard to let go and trust when I want full control of my life, yet if I continue to let these tree suckers remain in my life, I’ll end up more weary and destroyed by the end of it.
                        <br/><br/>
                        So where does this take me? Well, right back to John 15 actually. Jesus teaches us that we are simply branches as a part of the vine of The Son. The Father is our vinedresser, carefully and meticulously taking care of the branches (us) and pruning us of any tree suckers. He eagerly awaits for our fruit bearing season for those beautiful vibrant fruits to be produced. However, He teaches us that in order for this pruning to occur, we must remain in Him.
                        <br/><br/>
                        “Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me. I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.” - John 15:4-5 ESV
                        <br/><br/>
                        More than my ambition or my dreams or my desires, God simply desires me. My obedience. He wants me to remain in Him and trust in the fruits that I will come to bear. It’s a painful process, this process of pruning and sanctification, but at the end lies an eternity of beauty.
                        <br/><br/>
                        As I think back to that tree, I come to wonder. Although I know it’s a tree that isn’t planted to bear fruit but is more a display piece of greenery, I do wonder, who will prune this tree? Who will take care and prune this huge tree sucker? It’s a big one for sure, but our wonderful Gardener in Heaven doesn’t even miss the smallest of ones. How painful would it be for the tree to remove something so parasitic and large? Who knows really. But most importantly, how much more beautiful and green could this tree be if its nutrients weren’t being sucked away? Prune me Lord, show me Your glory and may I one day bear beautiful fruit.
                        <br/><br/>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology" className={styles.href}>&lt;&nbsp; Contents</Link>
                    <Link href="/blog/an-anthology/14" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};