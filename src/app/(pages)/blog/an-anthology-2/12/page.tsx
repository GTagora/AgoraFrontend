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
            src="/blog/an-anthology-2/12.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>a prayer of desperation</h1>
          <div className={styles.text}>
          Lord, You have broken me <br/>
          You have shown my weakness <br/>
          my failures <br/>
          a glimpse of the depth of my sin <br/>
          and it has broken me! <br/>
          <br/>
          As this world and what i’ve built seems to crumble down <br/>
          to think, in the world’s eyes, i have lost so little <br/>
          Job lost everything <br/>
          David fled his pursuers to save his life <br/>
          Elijah had no will to live <br/>
          <br/>
          Oh, Lord, in comparison to these men, how little have i lost! <br/>
          <br/>
          Yet even in my lack, You have shown me my weakness <br/>
          <br/>
          i have lost things of the world <br/>
          yet i still feel so broken <br/>
          How great was my dependence on this world <br/>
          if losing this little meant so much, how weak i am! <br/>
          how much more i am in need of You <br/>
          You have shown my faults <br/>
          my iniquity <br/>
          my need for a savior <br/>
          <br/>
          i am weak <br/>
          i have nothing <br/>
          i am nothing <br/>
          <br/>
          Yet still i can rejoice <br/>
          Yet still i can praise Your name <br/>
          Yet still i can say, <q>i am free</q> <br/>
          Because You cover me <br/>
          <br/>
          For true freedom comes from surrender <br/>
          and in every step You have shown me Your love <br/>
          so Lord, continue to grow my desperation <br/>
          to show me everyday that i need You <br/>
          for You are all i need <br/>
          and will You help me never forget that <br/>
          <br/>
          Amen <br/>
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/11" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2/13" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
