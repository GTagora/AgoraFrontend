import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Catherine Tian";
  const credit = "Illustration by Catherine Tian";
  const title = "Canyon";
  const date = "December 4, 2024";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/24f-water/canyon.webp"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            <i>“Jesus wept.” - John 11:35</i>
            <br />
            <br />i wonder
            <br />
            if the ocean roars because it longs for us to hear it
            <br />
            to finally respond to its waves as it reaches for us
            <br />
            crashing, tumbling, longing…
            <br />
            it cries out day and night
            <br />
            yet we have become so accustomed to its voice
            <br />
            that it now lulls us to sleep with its melody.
            <br />
            the great I Am
            <br />
            how will You calm this sea that I am in
            <br />
            when I <i>am</i> the sea?
            <br />
            <br />
            the essence of life
            <br />
            tainted with a saltiness.
            <br />
            You say to be the salt of the Earth
            <br />
            how?
            <br />
            when the salt runs in this endless race
            <br />
            reaching for a finish line it never finds
            <br />
            pulled by a gravity that rivals the weight of my sin.
            <br />
            falling into the shape of hieroglyphics only You can read
            <br />
            these tears finish the sentences that my throat begins
            <br />
            painting Your robes of white with dark marks.
            <br />a reflection of my sorrow
            <br />
            now too your sorrow
            <br />
            You willingly invite
            <br />
            <br />
            they say rivers erode rock over time
            <br />
            the Grand Canyon molded by unending toil.
            <br />i wonder
            <br />
            if it felt pain as the sediment was lifted by a relentless stream
            <br />
            if it knew what it would become.
            <br />
            perhaps one day
            <br />i will find a canyon
            <br />
            carved through this heart as well
            <br />a revelation of Your beauty.
            <br />
            for You stand in the canyon beside me
            <br />
            as the river that formed it
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
