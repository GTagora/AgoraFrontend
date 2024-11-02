import styles from "./article.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Link href="/blog/an-anthology-2" className={styles.breadcrumb}>
            An Anthology of Joy and Thought Vol. 2
          </Link>
          <Image
            className={styles.image}
            src="/blog/an-anthology-2/13.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>What&apos;s in a name?</h1>
          <div className={styles.text}>
          Lately, I’ve been thinking a lot about names. The meaning of names, their significance and what they represent in one’s journey. Like in the book of Ruth where Ruth means <q>friend.</q> Naomi also means <q>pleasant</q> and in chapter 1, Naomi even goes to change her name to Mara, which means <q>bitter,</q> after the events of her husband and sons passing. David means <q>well-beloved</q> and we can see that, as he is quite literally known as the <q>man after God’s own heart.</q> Jacob is renamed Israel after wrestling with God in Genesis 32:22-32. We even see the renaming of Peter, meaning <q>rock,</q> from Simon, and Paul from Saul in Acts in support of his mission. All this to say that names have such a large significance in the Bible in both meaning and how they determine the futures of these people.
          <br/><br/>
          So why have I been thinking about this lately? Mostly because of my own name. Stephen. My parents purposely named me after the same Stephen in Acts 6 and 7, as they really loved his character. Stephen, which means <q>crown</q> or <q>crowned,</q> was known as one of the first deacons of the church, the first martyr, <q>a man full of faith and of the Holy Spirit,</q> and a man <q>full of grace and power</q> (Acts 6:5; Acts 6:8). How Stephen lived and how he lived for God is what I often think about.
          <br/><br/>
          To give a brief summary, in Acts 6, we see the apostles struggling to balance serving the church and teaching, so deacons were formed to take the role of serving the body of Christ more directly in wisdom and guiding/teaching while the apostles could focus purely on preaching the Word of God. We see that Stephen was continuously doing good works and signs and that angered the priests. In Acts 7, we see Stephen deliver a striking sermon on the divinity of Jesus and how He is the Son of God. He wasn’t trying to defend himself, but he ultimately gave the strongest defense as he simply spoke truth. He concluded this sermon with a rebuke, calling the priests a <q>stiff-necked people, uncircumcised in heart and ears</q> (Acts 7:51). This infuriated them even more and they dragged Stephen away to be stoned. In Acts 7:56, Stephen looked up and saw Jesus standing at the right hand of God. This is the only time where Jesus is mentioned standing instead of sitting next to God. There are many interpretations as to why, but ultimately, Stephen’s death was significant and honorable enough for Jesus to stand.
          <br/><br/>
          When I think about the character of Stephen, I see a man full of grace and power, standing strong in humility while also confidently standing in truth. Someone who willingly and lovingly served the church and its body before himself. He was a man full of wisdom and of the Holy Spirit, meaning he was practically and spiritually minded and wise. In Acts 7, we get a picture of his boldness and firmness, as he would not back down in truth. Stephen fully understood what is true and stood firm in it, refusing to back down, knowing that there is nothing else as important. He was a forgiving and gracious man who did not even curse the people stoning him, and through all of this, the Son and the Father found delight in him and how he lived.
          <br/><br/>
          So back to Stephen Noh. Me. I was named after this same man through my parents&apos; admiration of his character, and I’ve thought and meditated a lot on him. I want to be a man of character, a man who also can model the same ways that Stephen lived in how he chose to worship, serve, and live for Christ. When I think about how God has been shaping me, I feel like I’ve begun to see similar paths. My desire is that one day, Christ would be my EVERYTHING to the point where I would be even willing to give up my own life to stand up for truth. I don’t want to back down in fear of the world and I don’t want to be a man who cowers in fear in darkness. Just as the man Stephen, I want to be someone who is practically and spiritually minded. Someone who is bold, full of faith, grace, power, the Spirit, and wisdom. Whenever I reread Acts 6 and 7, in a way I picture myself standing in those same shoes and wondering to myself, <q>am I someone who is following in this name I’ve been given?</q>
          <br/><br/>
          So what’s in a name?
          <br/><br/>
          I’m honestly not too sure, but that’s a story that writes itself everyday.

          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/12" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2/14" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
