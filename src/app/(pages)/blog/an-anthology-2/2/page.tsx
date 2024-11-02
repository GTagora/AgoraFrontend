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
            src="/blog/an-anthology-2/2.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>lighthouse</h1>
          <div className={styles.text}>
            The rain crashes <br />
            The thunder roars <br />
            The wind bellows <br />
            My ship turns at each crashing wave <br />
            In a seemingly never-ending storm, i am ready to sink <br />
            <br />
            I've lost my hope
            <br />
            I've lost my direction <br />
            There is nowhere else for me to belong <br />
            Lost at sea, in this storm, i sit alone <br />
            <br />
            I ready myself to lose it all <br />
            But in the distance a light appears <br />
            A beacon of hope <br />
            A ray of solace <br />
            And in the midst of the storm, i see You <br />
            <br />
            The same God who created these waters <br />
            The same God who created these roaring clouds <br />
            The same God who calms the winds <br />
            You are the lamp unto my feet <br />
            MY light in the darkness <br />
            <br />
            So guide me <br />
            Shine brighter than anything else in this storm <br />
            Pull me closer to You <br />
            And as I take these steps in these rushing waters <br />
            Remind me <br />
            <br />
            "I am always with You."
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/1" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2/3" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
