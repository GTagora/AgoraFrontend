import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Shirley Lin";
  const credit = "Photo by Shirley Lin";
  const title = "For a daisy to bloom, He is the source.";
  const date = "April 26, 2024";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/24s-cycles/shirley.png"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            A flower that is <b>fragile</b>. <br />
            <br />
            <i>Trust.</i> <br />
            But I&apos;m scared. <br />
            My knees have buckled under the weight that seems to pile on, as it
            increases more and more. Seemingly unending. I look out towards what
            is in front, but it appears that I have lost my ground. Being
            knocked down once again, it has become harder to stand. Except this
            time, the heaviness that I feel from the weight has come down on me,
            for it&apos;s become difficult to breathe. <br />
            My soul has grown weary. <br />
            <i>Trust in me.</i> <br />I hear, but the sound of fear becomes
            louder. <br />A worry that began as a seed has taken root. My soul
            has become restless. <br />
            For God, I know that all things not from You will be uprooted, but
            this man-made fear has come to cloud my eyes and shield my heart
            from You. <br />
            <br />A flower that is <b>drying out</b>. <br />
            <br />
            Like an overgrown weed stretching its roots and taking the nutrients
            that were meant to sustain me, fear has trapped me in a loop that
            seems to have no end as it goes round and round again. <br />
            Another day now becomes another cycle of restlessness, of which this
            worry seems to be sucking my life from the inside out over and over
            again. <br />
            Repeatedly. <br />
            Tirelessly. <br />
            <i>I am left with nothing.</i> <br />
            <br />A flower that is <b>dying</b>. <br />
            <br />
            For it overwhelms me when weakness has tipped me over. Pulling me
            down to a bottom that seems to have no end. Sinking deep with arms
            outstretched, it has become hard to pull myself back up. I cannot by
            my own strength. <br />
            <i>How do I move?</i> <br />
            <br />A flower that is <b>withered</b>. <br />
            <br />
            On good days, I have found a peace that comforts my soul, but on the
            bad days I am left curled in a ball. For the angst in my heart has
            weaved its way back and is rooting itself into the crevices of the
            pieces of my heart. It grows in the broken parts, beyond a repair
            that I could do on my own. <br />
            <i>Help me God, for I am weak.</i> <br />
            <br />A flower under His <i>covering; a daisy.</i> <br />
            <br />I cry, and He hears. Thoughts unspoken, yet still known.
            <br />
            He shields and protects me, for my thoughts have been contained. His
            presence calms me as it draws me in like a refuge. <br />
            Abundant because He is the source. <br />
            Shackles that had imprisoned me, debilitated. <br />
            Broken to pieces, so I may be made new. <br />I feel light as the
            heaviness subsides, for He is the Lord over my heart. <br />
            It is in this cycle, where I am healed, born, and renewed. Life that
            had been closed at the bleakness of night, begins to bloom when
            morning rises. For I have found joy that encircles me with warm
            hands. It does not fade. <br />
            His covering is safe and it is in His arms where I am met with
            everlasting grace and boundless mercy. <br />
            <br />A flower that has <i>faith.</i> <br />I make a prayer that is
            unceasing. <br />
            Unceasing because even if everything else in this world is left in
            ruins, He is constant. <br />
            Constant in a cycle, it goes on and on. <br />I see Him all the more
            working in this life of mine, with a heart that has been washed, and
            a soul that is renewed in Spirit. <br />I shall not be afraid, for
            what more could this world destroy? For He is constant in His
            character, compassionate at heart, and faithful beyond time. The
            warmth of His embrace encircles me in an unending loop. I am not
            afraid, because my God brings joy to a day&apos;s toils. <br />
            <i>So I trust.</i> <br />
            What does fear amount to when trust has won over it all? A victory
            that is ever so present through the surrendering of my will. I no
            longer fear, for the battles that are fought have already been
            decided. <br />
            <br />A flower that is <b>small</b>. <br />
            <br />A daisy, because of its simplicity, for it grows in the fields
            and meadows. <br />
            Yet a creation that not even Solomon dressed in all his glory could
            compare against. <br />A daisy blossoms under His light, for He
            offers a love that does not let go. <br />I am small and simple: a
            daisy. <br />
            He cared, cares, and will care for me like no other. <br />
            In God I trust.
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
