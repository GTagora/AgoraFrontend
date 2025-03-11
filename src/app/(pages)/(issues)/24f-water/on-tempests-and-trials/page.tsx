import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Katherine Leasure";
  const credit = "Photo by Stephen Noh";
  const title = "On Tempests and Trials";
  const date = "December 4, 2024";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/24f-water/on-tempests-and-trials.png"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            Reader,
            <br />I am so glad you’re here.
            <br />I have something to tell you. Come, sit. Lean in close, and
            listen hard.
            <br />
            He who has ears to hear, let him hear.
            <br />
            <br />
            <h3>i. The Bad</h3>
            <br />
            They never tell you why hurricanes are good. They only ever tell you
            why hurricanes are bad. Destructive winds, tearing the roof off of
            that childhood home you loved so hard, whipping the insides until
            you don’t even know what it looked like to begin. Immense flooding,
            the kind that soaks into your bones and seeps into your soul, the
            kind that fills you up, burning, water churning, lungs screaming for
            just a moment of relief. And your favorite stuffed animal on the
            shelf of your purple painted room? The book your dad used to read to
            you every night before bed? I hate to be the one to tell you, but
            they’re gone now, swept away, torn apart. Damaged goods. That’s what
            we become in a hurricane. This, see, is what the world wants us to
            know: destruction. damage. hurt. pain. Swallowed whole by a
            torrential rain, swept into floods too deep to swim out on our own,
            churned down debris-ridden rapids, terrified to hit our heads,
            terrified of the murky dark, terrified to stop. But it doesn’t stop.
            The rain keeps pounding, the water keeps rising till it’s truly all
            you can think, all you can know, all you’ve ever known. That's what
            it is.
            <br />
            <br />
            Why do bad things happen to good people? It's all bad. At least,
            that’s what the world wants us to know.
            <br />
            <br />
            <h3>ii. The Good</h3>
            <br />
            Yet they still never tell you why the hurricanes are good. No one
            ever talks about the things that come from a raging hurricane, from
            a storm so monstrous, so massive, so monumental. Because here’s the
            thing. Hurricanes don’t hit everyone the same. To some, they are but
            rain, a sprinkling of water, a light passing mist. To others, they
            are storms, they are lightning strikes and thunder claps and flashes
            across a darkened sky. But to some, to the ones that live in the
            category fives, hurricanes are hurricanes, and we already know what
            the world tells us of those. But what they don’t tell you is that
            these people, in these places, are the ones who know how to fight.
            How to rebuild. How to stand strong, unmovable even when the wind
            howls and the rain hammers and thunder roars louder than the voices
            in their heads screaming <i>run!</i> But child, I tell you, there is
            this good. There is a perfect endurance, a perfect maturity, a
            perfect response, a perfect story hidden in the rolling clouds.
            There is resilience, there is joy, there is strength in the
            challenge, the hardship, the fight.
            <br />
            <br />
            <h3>iii. The Peace</h3>
            <br />
            But despite the good, hurricanes are heavy. They demand to be met,
            they demand to be seen. And the floods still sweep their path clean
            through and the rapids still twist and churn around you, and the
            rain is a wall that you cannot break, but the Lord your God is there
            as you shake. He holds you. He has you. For in the midst of the
            darkness, there is light, and the light is good. In the midst of
            chaos, there is stillness, and the stillness is good. In the midst
            of rage, there is peace, and the peace, the peace is good. A rope
            will be thrown to you, drowning in the flood. One more drop, and the
            rapids are done, a slow, soft river. The storm will pass, and the
            rain will be perfect for dancing. You of little faith, why did you
            doubt? The world doesn’t want you to know, but I’m here to tell you
            this secret. They never tell you why hurricanes are good. They never
            tell you that <i>trials</i> are good.
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
