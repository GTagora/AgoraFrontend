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
            src="/blog/an-anthology-2/6.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>Living For Jesus</h1>
          <div className={styles.text}>
            Today I read a prayer/devo titled “Living for Jesus”. <br />
            <br />
            Lately it’s been hard. The idea and image of living for Jesus has
            been hard lately. I’ve been kicking myself down over it a lot,
            enough to make me hesitant to pick up His Word.
            <br />
            <br />
            Anxiety with future jobs, dreams, dating, and marriage and allowing
            the enemy to tell me that they won’t happen. Struggle with not
            turning to Him in all things. Me not reaching out to my friends. A
            lot of fears, anxieties, and just doubt in my head.
            <br />
            <br />
            The last few lines of the paper talk about how faulted and broken I
            am. That excerpt is shared here.
            <br />
            “How little have I illustrated my principles
            <br />
            &emsp;And improved my privileges!
            <br />
            How seldom I served my generation!
            <br />
            How often have I injured and not recommended
            <br />
            &emsp;My Redeemer!
            <br />
            How few are those blessed through me!
            <br />
            In many things I have offended,
            <br />
            &emsp;In all come short of thy glory;
            <br />
            Pardon my iniquity, for it is great.”
            <br />
            <br />
            “Pardon my iniquity, for it is great.”
            <br />
            <br />
            It is indeed quite great. ENORMOUS actually. What a powerful prayer
            and a reflection of how truly broken I am. I’m so broken, so full of
            brokenness. I’m trying. Trying to remind myself of <u>who</u> I am.{" "}
            <u>Whose</u> I am. <u>What</u> I am. I am so broken. Still somehow,
            by grace, I am SO loved and SO forgiven. A child of the one true
            living God.
            <br />
            <br />
            So to live for Jesus, I must remember my own iniquity. Remember why
            I am doing the things I do. Remember for who.
            <br />
            <br />
            My only desire, my approbation, may it wholly and only be devoted to
            You Lord.
            <br />
            <br />
            It’s for Your glory.
            <br />
            Your glory.
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/5" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2/7" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
