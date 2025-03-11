import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Elliott Chen";
  const credit = "Illustration by Joshua Park";
  const title = "The Donkey and the Lake";
  const date = "December 4, 2024";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/24f-water/the-donkey-and-the-lake.png"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            Outside the main road, lies a little trail
            <br />
            Which leaps over boulders, and ducks under trees
            <br />
            At the end, rests a bridge, and over its rail
            <br />
            You might see a lake, whenever you please
            <br />
            <br />
            At first, when I was young, I knew only how to wail
            <br />
            My dad took me on the trail, a journey to the lake.
            <br />
            With childish glee, I splashed and sailed
            <br />
            Adventuring through worlds, my mind could make.
            <br />
            <br />
            Then, a little later, I grew a little older
            <br />I only stopped by, to honor my father.
            <br />
            For on my shoulders, sat large boulders
            <br />
            To stop running, would be a dishonor.
            <br />
            <br />
            The morning came, and I grew a bit parched
            <br />
            Lazy like an ass, took things my pace
            <br />
            Passed the bridge, to the water I marched
            <br />
            Bent over to drink, and ignored my face.
            <br />
            <br />
            Then around the main road, sprawled a desert,
            <br />I told others about the lake, in a garbled word barrage
            <br />
            But the others laughed, in a manner most unpleasant
            <br />
            “Look at this oaf, fooled by a mirage.”
            <br />
            <br />
            So I stubbornly strode on the trail, with a pride sky high
            <br />
            My steps were glib, my vindication secure.
            <br />
            But the trail I walked, became so dry
            <br />I could not find the lake, my directions obscured
            <br />
            <br />
            Discouraged and ashamed, I plod on forward,
            <br />
            Back to the main road, for to my horror
            <br />
            Some time ago, I’d become an ass.
            <br />
            The vultures mocked me, each taking a pass.
            <br />
            <br />
            But the main road grew long, and I grew tired
            <br />
            Sprawled on the ground, in dust I lay mired
            <br />
            Then I remembered, that the trail to the lake
            <br />
            Wound up and around the woods, for my sake.
            <br />
            <br />
            So I fumbled along the trail, stumbling and falling
            <br />
            Under my distress, praying and calling.
            <br />
            As I walked forward, it began to rain.
            <br />
            Stinging in my cuts, it soothes my pain.
            <br />
            <br />
            Standing before the bridge, I find the lake.
            <br />A humble treasure, a holy place
            <br />
            Holding bread and cup, given for my sake
            <br />
            The fountain of life, a gift of grace.
            <br />
            <br />
            Though I’m unworthy, Christ still chose
            <br />A donkey like me, to carry His prose.
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
