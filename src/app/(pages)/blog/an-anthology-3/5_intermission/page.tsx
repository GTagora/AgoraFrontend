import styles from "./article.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Link href="/blog/an-anthology-3" className={styles.breadcrumb}>
            An Anthology of Joy and Thought Vol. 3
          </Link>
          <Image
            className={styles.image}
            src="/blog/an-anthology-3/ataraxia.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>ataraxia</h1>
          <div className={styles.text}>
            short breaths
            <br />
            a tight heart
            <br />
            a sense of unease
            <br />
            <br />
            in the stillness
            <br />
            i see a cross
            <br />
            “Look to me”, i hear
            <br />
            <br />
            the brokenness of my flesh
            <br />
            the stresses of this world
            <br />
            the attacks of the enemy
            <br />
            <br />
            anxiety ambushes me
            <br />
            flooding over me
            <br />
            staining my peace
            <br />
            <br />
            on the mount of Your cross,
            <br />
            the place of ataraxia,
            <br />
            there, will my peace be found
            <br />
            <br />
            my flesh brings me down
            <br />
            “you&rsquo;re not good enough”
            <br />
            “you will keep falling short”
            <br />
            <br />
            so, what?
            <br />
            only in the light of Your cross
            <br />
            my brokenness is made whole
            <br />
            <br />
            the world asserts its pleasures
            <br />
            “you are always behind”
            <br />
            “you will never achieve success”
            <br />
            <br />
            what is success?
            <br />
            for if i am one step closer to the cross
            <br />
            what worldly stress means anything in eternity
            <br />
            <br />
            the enemy spreads his lies
            <br />
            “it felt good, didn&rsquo;t it?”
            <br />
            “it&rsquo;s just one little sin”
            <br />
            <br />
            back away!
            <br />
            to follow you is to follow trouble! to follow death!
            <br />
            your attacks mean nothing in the face of my Lord!
            <br />
            <br />
            i am broken
            <br />
            i am weak
            <br />
            i am troubled
            <br />
            <br />
            even still,
            <br />
            i take step forward
            <br />
            in You do i find that strength
            <br />
            <br />
            a step up the mount
            <br />
            to the place of ataraxia
            <br />
            to sit at the foot of Your cross
            <br />
            <br />
            no matter how many mountains,
            <br />
            no matter how many trials
            <br />
            You&rsquo;ve already moved them all
            <br />
            <br />
            the highest place i will ever be
            <br />
            is right here at Your feet Lord
            <br />
            what more do i need
            <br />
            <br />
            to be a servant of the Highest One
            <br />
            to sit here at Your feet
            <br />
            in the place of ataraxia
            <br />
            <br />
            in the stillness
            <br />
            i see a cross
            <br />
            and all else becomes clear
            <br />
            <br />
            ataraxia (n) - calmness untroubled by mental or emotional disquiet
          </div>

          <div className={styles.buttons}>
            <Link
              href="/blog/an-anthology-3/4_a-merciful-God-in-a-harsh-wilderness"
              className={styles.href}
            >
              &lt;&nbsp; Previous
            </Link>
            <Link
              href="/blog/an-anthology-3/6_honor-and-faith"
              className={styles.href}
            >
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
