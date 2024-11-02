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
            src="/blog/an-anthology-2/8.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>wait</h1>
          <div className={styles.text}>
            Acts 1, Jesus calls us to wait. To wait on Him. To wait on His
            promise.
            <br />
            <br />
            This “waiting” is what I feel the season I am in right now. Waiting
            for new work or to be married. Not saying that I am on hiatus until
            one of these happens, but waiting in the sense that these events are
            my new big “checkpoints.” They divide my seasons. They may be long,
            they may be short. Who knows. But what I do know is what I am called
            to do in this moment. He calls me to wait on Him. To pray, to seek,
            to chase after His presence. Praying is waiting on the Lord.
            <br />
            <br />
            Bring to Him your desires, your fears.
            <br />
            <br />
            Wait.
            <br />
            <br />
            On.
            <br />
            <br />
            Him.
            <br />
            <br />
            <br />
            Serve.
            <br />
            <br />
            Him.
            <br />
            <br />
            <br />
            Witness.
            <br />
            <br />
            Him.
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/7" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2/9" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
