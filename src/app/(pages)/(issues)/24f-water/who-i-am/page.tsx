import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Ansley Cheng";
  const credit = "Illustration by Allison Chung";
  const title = "who i am";
  const date = "December 4, 2024";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/24f-water/who-i-am.png"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            <table width="100%">
              {" "}
              <tr>
                {" "}
                <td width="33.3%">
                  {" "}
                  i. <br /> something keeps pulling me back
                  <br /> to this well of grief.
                  <br /> i could sit here for hours, maybe,
                  <br /> staring at the reflections,
                  <br /> drawing up memories to drink &ndash; <br /> tepid and
                  stale, but tasting just enough
                  <br /> of golden hours and shadowed laughter
                  <br /> that i can&apos;t stop coming back
                  <br /> for more and
                  <br /> more and
                  <br /> more.
                  <br /> i almost fall in <br /> but i don&apos;t.
                  <br /> <i>how did i even get here?</i>
                  <br /> a thousand paths, sleepwalking,
                  <br /> exhaustion and envy and loneliness
                  <br /> regret and silence and fear.
                  <br /> all it takes is an image or a word
                  <br /> and i&apos;m back, <br /> running off the path,
                  <br /> wandering through the ruins
                  <br /> of the kingdom i built him in my head,
                  <br /> collapsing at this well to drink.
                  <br /> wrong kingdom. wrong well.
                  <br /> i know it,
                  <br /> but the pain is so familiar that
                  <br /> it feels like home.
                  <br />{" "}
                  <i>
                    please,
                    <br /> i just want to be home.
                  </i>
                  <br /> is this home? this desperation?
                  <br /> scooping up what i can,
                  <br /> raising it to my chapped lips, <br /> so eager. so
                  certain that this time,
                  <br /> this time it will quench my
                  <br /> terrible terrible thirst.
                  <br /> this time i will find relief.
                  <br /> but i don&apos;t.
                  <br /> there are only the tears on my face
                  <br /> and the tears in my heart
                  <br /> and my soul falls in,
                  <br /> and i&apos;m lying there,
                  <br /> weeping at the well again.
                  <br />{" "}
                </td>{" "}
                <td width="33.3%">
                  {" "}
                  ii.
                  <br /> that&apos;s where you find me.
                  <br /> somehow
                  <br /> (i never know how)
                  <br /> you find me,
                  <br /> and you sit down beside me.
                  <br /> and i&apos;m scrubbing hard at my eyes
                  <br /> to stop the tears, but they keep coming,
                  <br /> and you take my hands in yours
                  <br /> so gently. those scarred hands.
                  <br /> and i sob out,{" "}
                  <i>
                    stop.
                    <br /> don&apos;t you see?
                    <br /> don&apos;t you know who i am?
                    <br /> don&apos;t you know how many times
                    <br /> i&apos;ve run from you? <br /> look at me,
                    <br /> i&apos;m a mess.
                    <br /> why do you keep coming back?
                    <br /> leave me alone. i&apos;m not worth it,
                    <br /> this is my exile.
                  </i>
                  <br /> and you look at me.
                  <br /> and i feel it, feel it as you see me.
                  <br /> i feel it as you take in all that i am,
                  <br /> all that i <br /> so hopelessly <br /> am not.
                  <br /> i feel it as you know me,
                  <br /> down to the depths of my bones,
                  <br /> feel it as you gather up
                  <br /> the pieces of my heart.
                  <br /> i feel it, as you pick me up &ndash; <br />{" "}
                  <i>no, please, i&apos;m too heavy,</i>
                  <br /> but when i meet your eyes
                  <br /> the strength and compassion there
                  <br /> silence me completely &ndash; <br /> i feel it as you
                  carry me in your arms
                  <br /> like a filthy ragged child,
                  <br /> as you carry me down
                  <br /> to the river.
                  <br /> somehow i&apos;m not afraid.
                  <br /> and as you walk into the waves,
                  <br /> the whole of me screams out
                  <br /> <i>i think this is what i was made for.</i>
                  <br />
                </td>{" "}
                <td width="33.3%">
                  {" "}
                  iii.
                  <br /> at first the water&apos;s so cold
                  <br /> that it steals the air from my lungs,
                  <br /> seizes all my muscles,
                  <br /> but your grip never falters
                  <br /> for a moment.
                  <br /> you speak for the first time,
                  <br /> your voice just at whisper,
                  <br /> <i>rest, child.</i>
                  <br /> and if the stars obey that voice,
                  <br /> so must i, so
                  <br /> i do. i let go, <br /> let my breath out,
                  <br /> let my limbs relax, and <br />{" "}
                  <i>
                    all at once
                    <br /> the relief pours through me
                    <br /> like nothing
                    <br /> i&apos;ve ever known.
                    <br /> there is nothing
                    <br /> but the coolness
                    <br /> of the water
                    <br /> on my lips
                    <br /> on my skin
                    <br /> cleansing me
                    <br /> refreshing me
                    <br /> these streams of mercy <br /> never ceasing
                    <br /> i feel it <br /> as they make me new.
                    <br /> once i was lost
                    <br /> but now i&apos;m surrounded,
                    <br /> over my head
                    <br /> in this deep and boundless love.
                    <br /> again, you speak.
                  </i>
                  <br /> do you see?
                  <br /> do you know who i am?
                  <br /> do you know how many times
                  <br /> i&apos;ve run after you?
                  <br /> look at me. look at my hands, my feet.
                  <br /> i love you,
                  <br /> and i&apos;ll never stop coming back.
                  <br /> my dearest one, you are never alone.
                  <br /> i am your home.
                  <br />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
