import styles from './article.module.css'
import Image from 'next/image'

export default async function BlogArticle({ params }: any) {
    const author = "Catherine Tian"
    const image = "https://firebasestorage.googleapis.com/v0/b/agora-ca31b.appspot.com/o/Piece%20Title%20Cards%2FBlog%2Fa_bench.jpeg?alt=media&token=09e1c89b-63a7-458e-b9cc-c92f130e02dc"
    const title = "a bench"
    const date = "June 19, 2024"

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <Image 
                        className={styles.image}
                        src={image}
                        width={600}
                        height={600}
                        alt='a bench'/>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
                    <h3 className={styles.date}>{date}</h3>
                    <div className={styles.text}>
                        <i>Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.<br/>
                        – James 1:17 (NIV)</i><br/><br/>

                        the familiar waft of my father <br/>
                        hits my nose<br/>
                        we drive to my old rink<br/>
                        chilly, empty<br/>
                        just a parking lot<br/>
                        and turn the ignition off<br/>
                        step outside<br/><br/>
                        
                        i stand aside, he sits ahead<br/>
                        on a bench, alone<br/>
                        staring up at the stars<br/>
                        a moment: frozen, still<br/>
                        and i see<br/>
                        an old man, sitting on a bench<br/>
                        getting older (the man and the bench)<br/>
                        the bench will most likely outlive him<br/>
                        and then i see<br/><br/>

                        a bench,<br/>
                        without a man<br/><br/>

                        he sits down, his daughter ahead<br/>
                        no longer the little girl who sat on his head<br/>
                        a moment: fleeting, just as it used to be<br/>
                        he stares up at the stars<br/>
                        then looks ahead<br/>
                        and he sees<br/>
                        his daughter, standing<br/>
                        getting older<br/>
                        his daughter will most likely outlive him<br/>
                        and he breathes<br/><br/>
                        
                        and then i see<br/>
                        a chance He has given me<br/>
                        how blessed <br/>
                        to have been given him by Him<br/>
                        a father from a Father<br/>
                        placed in this place<br/>
                        beautiful maker<br/>
                        wonderfully made<br/>
                        providers, protectors<br/><br/>

                        
                        his little girl <br/>
                        walks towards him<br/>
                        sits beside him<br/>
                        a moment.<br/>
                        they stare up at the stars<br/>
                        a Father and His children<br/>
                        placed on a bench<br/><br/>

                        Author's note:<br/>
                        <p className={styles.summary}>
                            This piece is about an experience I had during Fall break last semester. It was the first time 
                            that I had come home from college and my dad and I decided to drive around after dinner. We 
                            ended up driving to my school, church, and skating rink which just so happened to represent 
                            the three core areas of my life before I left for college. When we got to my rink, we parked 
                            in the empty parking lot. It was around 8pm and we were the only ones there. Outside of the 
                            entrance to my rink sat a wooden bench. My dad ended up sitting on the bench and just sat there 
                            for a while. I was still standing near the car when I turned and saw him sitting there. In that 
                            moment, I was hit with the reality that he would not always be there and that time was only moving 
                            faster forward. I realized I hadn’t appreciated my parents–and specifically, my dad–enough and that 
                            as much as I had to adjust to college, they also had to learn how to live with their daughter being 
                            states away, no longer being the little kid they always saw her as. It was a profound moment of 
                            gratitude for me. My dad and I are very similar in a lot of ways that will often lead to us butting 
                            heads (about what I couldn’t even tell you). Most of the arguments that arose were very pointless 
                            but occasionally we would often let our tempers get the best of us for days, leading to petty 
                            comebacks that were fueled by annoyance and anger. I think when I saw him sitting on that bench, 
                            I saw a man who only ever wanted to protect me and care for me. And while I couldn’t see it in high 
                            school, my dad was just as full of a human, created by God, as I was. He was not just my father, he 
                            too was a child of God, living his life the best he could with the gifts that God had given him. 
                            That moment really urged me to be grateful for all he was and recognize the valuable time that we 
                            had together. My hope for this piece to convey a heart of gratitude towards one of God’s many gifts 
                            for us. I love you dad.</p>

                    </div>
                </div>
            </div>
        </div>
)};
