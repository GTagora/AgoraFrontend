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
            src="/blog/an-anthology-2/1.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>to my friends...</h1>
          <div className={styles.text}>
            To my friends in all the places...
            <br />
            how do you do?
            <br />
            i hope you've been doing wonderfully and that the Lord is blessing
            you
            <br />
            life back in Dallas has been absolutely wonderful
            <br />
            it's crazy how much can happen in 4 months,
            <br />
            but if you really think about it, that's about the same length as a
            semester
            <br />
            anyways...
            <br />
            sometimes it's strange and lonely
            <br />
            to think that everyone i meet here only sees the transformed me
            <br />
            as i share my testimony and story, i am reminded of his goodness
            <br />
            His mercy
            <br />
            and His love for me <br />
            and it also makes me think of yall <br />
            to those who loved and prayed for me <br />
            who supported and cried with me <br />
            i can't wait to see you again <br />
            whether on earth or in heaven <br />
            but until then, <br />
            until then... <br />
            i hope you all continue to run after Him <br />
            and until I see you again... <br />
            may the Lord continue to bless you
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2" className={styles.href}>
              &lt;&nbsp; Contents
            </Link>
            <Link href="/blog/an-anthology-2/2" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
