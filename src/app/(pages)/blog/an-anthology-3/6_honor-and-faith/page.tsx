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
            src="/blog/an-anthology-3/honor and faith.JPG"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>honor and faith</h1>
          <div className={styles.text}>
            Legacy.
            <br />
            <br />
            That is a word I&rsquo;ve been thinking a lot about lately.
            It&rsquo;s been a little over a year since my grandfather passed
            away and I visited his grave very recently on a weekend in
            California with my extended family.
            <br />
            <br />
            On his gravestone reads the text, “A Man of Honor and Faith.”
            Typically, you see these gravestones with “father” or “husband,” but
            no. For my grandfather, my family chose to remember him as “A Man of
            Honor and Faith.” That is the legacy he left behind to his children
            and their children.
            <br />
            <br />
            I&rsquo;ve been reflecting and dwelling a lot on what it means to be
            a man of God. A man that can be a light to Christ to those around
            me, but also a man who can lead His family in Christ. I&rsquo;m more
            than blessed to say that my entire family pursues after the Lord, a
            blessing that I do not take for granted and a blessing I seldom
            hear. In the midst of that, when I looked upon my grandfather's
            grave, I couldn&rsquo;t help but be brought to tears. I had nothing
            but gratitude to the Lord for using him to lead three generations of
            my family in Christ.
            <br />
            <br />
            In my family, I&rsquo;m the eldest son to carry the last name. I
            think it&rsquo;s more of a korean culture thing and quite honestly,
            besides my grandparents, the rest of my family doesn&rsquo;t think
            too much about it (I think?). For myself though, I can&rsquo;t deny
            the label has shaped my thinking. In turn, being called the “eldest
            son” has added a certain weight and pressure that I am to be the
            next to “lead” my family. This status has never weighed extremely
            heavy necessarily, but it makes me consider that my family hopes me
            to be someone who can also lead as my grandfather did.
            <br />
            <br />
            The idea of legacy and what you leave behind is an interesting
            concept. Riches, status, power, what do all those matter in the face
            of the Kingdom of Heaven? Nothing honestly. But just as 3 John 1:4
            says, “I have no greater joy than to hear my children are walking in
            the truth.” How comforting and joyful is that? To know that that is
            the legacy you will leave behind as you know you approach the
            presence of the Lord. Besides the cross, what greater joy could
            there be in life? I&rsquo;m sure that joy is exactly what my
            grandfather felt as he went to join the Father. What a peace I hope
            to experience as well.
            <br />
            <br />
            So, as I pray, as I reflect, I ask myself. What kind of legacy do I
            want to leave behind? What words would I want my family to remember
            me by? I&rsquo;m not sure what those exact words will be. More than
            anything, I pray that as my grandfather, the legacy I leave behind
            is a family of sons and daughters who faithfully pursue after Him
            and choose to run the good race. A humble sinner, that they too may
            see me as a man of honor and faith.
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-3/5_intermission" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link
              href="/blog/an-anthology-3/7_my-sin-scares-me"
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
