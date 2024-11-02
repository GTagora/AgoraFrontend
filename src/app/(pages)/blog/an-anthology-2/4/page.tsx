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
            src="/blog/an-anthology-2/4.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>Today</h1>
          <div className={styles.text}>
            Today I...
            <br />
            &emsp;&emsp;&emsp;&emsp;took my first PTO day
            <br />
            &emsp;&emsp;&emsp;&emsp;did QT outside at the pond in front of my
            house
            <br />
            &emsp;&emsp;&emsp;&emsp;spent time with friends at a cafe doing work
            <br />
            &emsp;&emsp;&emsp;&emsp;got caught dancing in my car and the man in
            the car next to me joined me in dance
            <br />
            &emsp;&emsp;&emsp;&emsp;enjoyed the brisk wind of the fall weather
            to come
            <br />
            &emsp;&emsp;&emsp;&emsp;went on a nice photo walk with a brother
            <br />
            &emsp;&emsp;&emsp;&emsp;saw a cute dog on the walk and a child
            learning to walk
            <br />
            &emsp;&emsp;&emsp;&emsp;spent time in prayer with the body of Christ
            <br />
            &emsp;&emsp;&emsp;&emsp;was reminded of the simple joy and beauty of
            living
            <br />
            &emsp;&emsp;&emsp;&emsp;was reminded of what I truly need
            <br />
            &emsp;&emsp;&emsp;&emsp;was reminded of His presence in all that is
            around me
            <br />
            &emsp;&emsp;&emsp;&emsp;enjoyed rest in a day with God and His
            creation
            <br />
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/3" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2/5" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
