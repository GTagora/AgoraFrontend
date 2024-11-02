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
            src="/blog/an-anthology-2/7.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>silence and solitude</h1>
          <div className={styles.text}>
            Silence and solitude.
            <br />
            <br />
            Those are two words that I’ve been thinking about a lot lately. I
            think they’re words that really do encapsulate very important
            aspects of the faith and, in many ways, important ideas about how we
            grow in Christ.
            <br />
            <br />
            For the majority of our time here on earth, we live distracted. Ads
            bombard us everywhere, tiny computers in our pockets wrestle for our
            attention and tempt us to mindlessly scroll away. I’m no stranger to
            this,as I succumb daily to the distractions of this world and am
            constantly fed lies that I am not living as I should. As these
            voices and these hindrances battle for my attention, I am reminded
            that we need to practice silence and solitude, and, in this silence
            and solitude, to listen. To sit still through all the noise and
            listen…
            <br />
            <br />
            I think as of late, I’ve been constantly surrounded by people, a
            great blessing that I do not take for granted. In many ways, though,
            it has caused me to neglect my private quiet time with God. Having
            this silence and solitude is so important. How else can you grow a
            relationship with someone if you don’t spend time privately with
            them?
            <br />
            <br />
            So in the midst of all the noise, the distractions, sit still with
            Him alone and talk to Him.
            <br />
            <br />
            In a sermon I heard a couple years back, I remember about the stages
            of progression in our relationship with God.
            <br />
            <br />
            <p className={styles.centered}>
              <i>Talk to God → Talk with God → Listen to God → Be with God</i>
            </p>
            <br />
            Learning to be with God is to sit with Him. In the solitude,
            enjoying His presence. It’s like sitting with someone you love
            dearly. Sometimes, you don’t need to say something to each other to
            really enjoy and treasure the moment. Simply being with them is
            enough. Only in silence and solitude can I really be with God.
            <br />
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/6" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2/8" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
