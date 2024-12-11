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
            src="/blog/an-anthology-2/15.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>Remember when?</h1>
          <div className={styles.text}>
            Sometimes it’s easy to forget. Easy to forget His faithfulness and
            how much He has been providing and watching over me. In the midst of
            all that, remember. Remember what He has done, remember that He is
            working, remember that His promises and plans are good.
            <br />
            <br />
            Remember when you would leave the house to play in the playground?
            <br />I can just imagine my Father watching me on that slide.
            <br />
            <br />
            Remember when you would go on trips with your family? <br />
            Sometimes those were hard, but You gave a family who loves me so
            much.
            <br />
            <br />
            Remember when you played the viola? <br />
            The day I fell in love with music and came to love the sense of
            hearing You have given me.
            <br />
            <br />
            Remember when you lost your first friend? <br />
            How much more did you mourn for that soul lost than I, Lord.
            <br />
            <br />
            Remember when you graduated high school? <br />
            You walked that stage with me, celebrating something I never thought
            I’d live to see.
            <br />
            <br />
            Remember when you made it to Georgia Tech? <br />
            God, You showed me that it was definitely not a safety school, but I
            see now how You prepared the grounds for the next four years.
            <br />
            <br />
            Remember when you would cry out in loneliness? Or maybe the nights
            when you would look off the edge of the parking deck wanting to jump
            off? <br />
            Desperately, I see You holding me back even in those moments.
            <br />
            <br />
            Remember when you prayed for healing? <br />
            Even now I cannot forget the feeling of warmth Your hands had upon
            me.
            <br />
            <br />
            Remember when you served? <br />
            Lord, You placed so many people in my life who blessed me more than
            they could ever know.
            <br />
            <br />
            Remember when you were freed from your depression? <br />
            From a near decade of struggle, You freed me, showed me Your love,
            and I’ll never turn back.
            <br />
            <br />
            Remember when you returned to Dallas? <br />
            God, everyday You show me why You wanted me to come back.
            <br />
            <br />
            Remember when you were blessed? <br />
            God, everyday You bless me. Help me to see that more and more…
            <br />
            <br />
            Remember. Remember. There is so much to remember. I see You in every
            moment. Moments of joy. Moments of sorrow. Moments when You would
            carry me. You did so much for me. I would fail to see it in the
            moment, but now I look back and see You were always there. So let’s
            live in remembrance, in constant memory of what He has done…
            <br />
            <br />
            and get excited for what more He will do
            <br />
            <br />
            and one day you’ll look back and tell yourself,
            <br />
            <br />
            <q>Hey, remember when…</q>
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/14" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2" className={styles.href}>
              Contents &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
