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
            src="/blog/an-anthology-2/9.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>warmth</h1>
          <div className={styles.text}>
            A gentle autumn sun sits in the sky
            <br />
            voices of many laughing here and by
            <br />
            the warmth on my skin envelopes me
            <br />
            warmth embraces my heart as He covers thee
            <br />
            a peace like no other
            <br />
            to rest here with Your people
            <br />
            in Your presence
            <br />
            Your creation, oh Lord!
            <br />
            How wonderful it is,
            <br />
            and how blessed am I to be able to see
            <br />
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/8" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2/10" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
