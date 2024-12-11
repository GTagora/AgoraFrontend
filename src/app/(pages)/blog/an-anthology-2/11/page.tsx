import styles from './article.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
            src="/blog/an-anthology-2/11.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>a longing</h1>
          <div className={styles.text}>
            9.20.24 <br />
            It’s been a while since I’ve written <br />
            &emsp;&emsp;a while since I’ve read <br />
            &emsp;&emsp;a while since I’ve spoken to You <br />
            Yet my heart longs desperately for You <br />
            &emsp;&emsp;longs desperately to hear Your voice <br />
            &emsp;&emsp;longs desperately to be with You <br />
            Why is it so hard? <br />
            &emsp;&emsp;so hard to seek You <br />
            &emsp;&emsp;so hard to come to You in my brokenness <br />
            But Lord You make it so easy <br />
            &emsp;&emsp;so easy as You reach to me <br />
            &emsp;&emsp;so easy that You love me endlessly <br />
            Lord i know that all You desire is me <br />
            &emsp;&emsp;i don’t need to prepare <br />
            &emsp;&emsp;i don’t need to look nice <br />
            so Lord, call me back home <br />
            &emsp;&emsp;into Your arms <br />
            &emsp;&emsp;and may i be reminded, that You are always waiting{' '}
            <br />
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/10" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2/12" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
