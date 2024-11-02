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
            src="/blog/an-anthology-2/10.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>simplicity</h1>
          <div className={styles.text}>
            Do do do. <br />
            Less thinking, more action
            <br />
            That is what I’m told to do everyday
            <br />
            <br />
            yet why do I feel so incomplete?
            <br />
            I do all these things
            <br />
            yet why do I still feel so suffocated?
            <br />
            I’m doing all the things I’ve been told are good
            <br />
            yet why do I continue to remain in angst?
            <br />
            <br />
            <br />
            <br />
            ah. that’s right…
            <br />
            it was never that complicated
            <br />
            it never has been
            <br />
            it never will be
            <br />
            <br />
            in simplicity is my joy found
            <br />
            the simple truth that You love me so
            <br />
            and all You desire is my love
            <br />
            so Lord, before anything i do
            <br />
            before anything i speak
            <br />
            may i just love You
            <br />
            to sit here and love You…
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/9" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2/11" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
