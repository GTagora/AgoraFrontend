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
            src="/blog/an-anthology-3/im proud of you.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>“i&rsquo;m proud of you”</h1>
          <div className={styles.text}>
            The other day, my mom shared about her coworker who was joyfully
            humming at work one day. She went over to her coworker in curiosity
            and asked “What&rsquo;s your joy?” To which her coworker responded,
            “Jesus!” My mom was so encouraged to hear as her coworker was
            someone who came to know Christ recently. To see her coworker
            continue to live in Christ and His joy blessed my mom. The coworker
            then threw the question back at my mom, to which my mom answered “my
            son.” She said “I&rsquo;m so proud of him.” She proceeded to share a
            little bit of how Jesus healed and transformed me and became my
            ultimate joy to her coworker. After my mom told this story to me,
            she told me “영준 (my korean name), I&rsquo;m proud of you.”
            <br />
            <br />
            In the past few months, I have never heard that phrase more in my
            life. “I&rsquo;m proud of you.”
            <br />
            <br />
            As a kid, it&rsquo;s always something you want to hear from your
            parents. It&rsquo;s a sign of love, an acknowledgement, in a way,
            that what you are doing and where you are is good. Frankly, in my
            childhood years, I didn&rsquo;t hear that very often. Hearing it now
            is not only a reflection and testament of my parents&rsquo; growth
            but my own as well. It shows my parents can visibly see and be
            encouraged by what He has done in my life and what more He will
            continue to do.
            <br />
            <br />
            I think my parents have more faith in what God will do for me than I
            have faith in what God will do for me. It is encouraging and
            heartwarming to know I have such people by my side.
            <br />
            <br />
            When I think about the phrase “I&rsquo;m proud of you,” I think
            about the Father. Imagine going to Heaven and meeting the Father for
            the first time. Many times, in my own iniquity and brokenness, I
            imagine the first thing He will do is rebuke and reprimand me for
            all the sins and mistakes I made in my time here, but that
            isn&rsquo;t who He is. He is merciful, just, and most of all
            loving—otherwise He wouldn&rsquo;t have given us His son. I think
            the first thing He&rsquo;d do is, like the father and the prodigal
            son (Luke 15:11-32), greet us with open arms and hug us and say,
            “welcome, home.” We&rsquo;ll work through all my brokenness later,
            but the first thing He would do is welcome me home with a warm,
            loving embrace and say, “I&rsquo;m proud of you.”
            <br />
            <br />
            He is the Father who takes pride and joy in the ways that we seek
            and grow in Him in this broken world. He loves us more than we could
            ever love ourselves, and He awaits the day to embrace us and welcome
            us home.
            <br />
            <br />
            So I think often about my time here. About what I do. Ultimately, to
            be fueled by His love and live in His love is what He has commanded
            me to do, and no matter what pain, what hardship I go through, I
            look forward to everyday. Just like my parents who love me so fully,
            I know and look forward to the day I see the Father. To run up those
            steps at the end of the race into His loving arms, and in the warmth
            of His embrace, hear His gentle voice whisper, “I&rsquo;m proud of
            you.”
          </div>

          <div className={styles.buttons}>
            <Link
              href="/blog/an-anthology-3/a-testimony"
              className={styles.href}
            >
              &lt;&nbsp; Previous
            </Link>
            <Link
              href="/blog/an-anthology-3/a-merciful-God-in-a-harsh-wilderness"
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
