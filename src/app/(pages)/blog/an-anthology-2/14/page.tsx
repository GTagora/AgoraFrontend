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
            src="/blog/an-anthology-2/14.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>Kintsugi</h1>
          <div className={styles.text}>
            <b>Kintsugi</b> &ndash; <i>The Japanese art of repairing broken pottery by meticulously joining pieces back together and filling cracks with lacquer dusted with powdered gold, silver, or platinum, thereby highlighting the flaws in the mended object. Also in extended use: an aesthetic or world view characterized by embracing imperfection and treating healing as an essential part of human experience. Frequently as a modifier.</i><br/>
            <br/>
            from dirt and clay You have made me<br/>
            formed in love, and shaped in Your glory<br/>
            <br/>
            You are my potter<br/>
            and i Your clay<br/>
            <br/>
            You have called me Your vessel<br/>
            Your lovely vase<br/>
            Your lovely creation<br/>
            <br/>
            yet in my sin i have broken apart<br/>
            Your pot has shattered<br/>
            <br/>
            my pieces lie scattered<br/>
            and Your beautiful creation destroyed<br/>
              (is what i think!)<br/>
            <br/>
            yet You pick up the pieces<br/>
            You embrace them<br/>
            <br/>
            carefully and lovingly You piece me back together<br/>
            in beautiful gold You mend me<br/>
            You remind me i am so much more than just pieces<br/>
            <br/>
            <br/>
            i am renewed in You<br/>
            a beautiful creation now stands<br/>
            in my brokenness You have remade me<br/>
            <br/>
            like a beautiful piece of kintsugi<br/>
            full of flaws, imperfections, sin<br/>
            yet all the more i am more beautiful than before<br/>
            because the gold of Your Son’s blood has covered me<br/>
            filled the cracks of my soul<br/>
            and i am made all the more beautiful in You<br/>
            <br/>
            <br/>
            in my imperfections, brokenness, weakness, does Your glory and mercy shine brightest<br/>
            so Lord, continue to do Your work in me<br/>
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/13" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2/15" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
