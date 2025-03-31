import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Joshua Park";
  const credit = "Illustration by Joshua Park";
  const title = "Journey of the Broken";
  const date = "April 26, 2024";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/24s-cycles/jp.png"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            <i>
              “The Lord is close to the brokenhearted and saves those who are
              crushed in spirit.” <br />
              <p className={styles.rightAlign}>Psalm 34:18</p>
            </i>
            <br />
            In the depths of night, where shadows dance, <br />
            There dwells a girl in a recurring trance. <br />A soul named Aria,
            with scars so wide, <br />
            Navigating life&apos;s relentless tide. <br />
            <br />
            In cycles of hurt and condemnation&apos;s sting, <br />
            She wanders lost, a broken thing. <br />
            Her heart aches with each passing day, <br />
            Caught in the rhythm of life&apos;s disarray. <br />
            <br />
            Through relationships that ebb and flow, <br />
            Aria seeks solace, no longer to be alone. <br />
            Yet in the silence, she finds despair, <br />
            As cycles of pain ensnare. <br />
            <br />
            “In the labyrinth of my soul, I roam, <br />
            Haunted by shadows and echoes of old homes. <br />
            With trembling hands a heart laid bare, <br />
            Surrendering all my brokenness to God&apos;s care. <br />
            <br />
            The weight of expectations, a heavy chain, <br />
            Binding my spirit, causing me pain. <br />
            For in the darkness, doubt&apos;s whispers grow, <br />
            Slowly cornered by loneliness&apos; relenting tow. <br />
            <br />
            In cries for help, masked in disguise, <br />
            Afraid to be seen as attention&apos;s prize. <br />
            Beneath the facade, my pain remains, <br />
            Hidden behind a mask, silent refrains. <br />
            <br />
            Never feeling good enough, never worthy of love, <br />
            My heart burdened by shadows from below, <br />
            Despite all this, in the depths of my despair, <br />I still kneel
            to pray, for faith always finds its way” <br />
            <br />
            Trapped by the allure of solitude within, <br />
            Aria succumbs to the lonely din. <br />
            But in Christ, she finds a glimmer of grace, <br />A chance to
            escape from the darkest place. <br />
            <br />
            <br />A journey of redemption, not walked alone, <br />
            In the depths of desolation, Christ&apos;s light has shown. <br />
            Revealed that God&apos;s love and companions brings her light.{" "}
            <br />
            With their support, she finds courage to rise. <br />
            <br />
            With each step forward, she leans on His Word, <br />
            Finding solace and strength in the truth she&apos;s heard. <br />
            Delivered from emptiness, she finds peace in His Grace, <br />A new
            creation in Christ, she embraces her place <br />
            <br />
            Close to the brokenhearted, the Lord&apos;s embrace, <br />
            In Aria&apos;s journey, Her identity finds its place. <br />
            For those crushed in spirit, He offers his hand, <br />
            Guiding Aria to a brighter land. <br />
            <br />
            In the ebb and flow of human strife, <br />
            She learns the beauty of God&apos;s calling to life. <br />
            For in each dawn, a chance to start, <br />
            To mend the cycles of a broken heart.
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
