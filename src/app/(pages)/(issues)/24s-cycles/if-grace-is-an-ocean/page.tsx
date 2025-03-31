import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Esther Shen";
  const credit = "Photo by Esther Shen";
  const title = "If Grace is an Ocean";
  const date = "April 26, 2024";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/24s-cycles/esther.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            <i>Just a little further.</i> <br />
            <br />
            The ocean is within grasp. I can almost feel the waves caressing my
            fingertips as I crawl ever so slowly, ever so desperately toward the
            water. I have no strength to stand. My whole body aches. My vision
            is hazy, my head spinning, heart pound, pound, pounding to no steady
            rhythm. <br />
            <br />
            <i>Left. Right. Left. Right.</i> <br />
            <br />
            Futile as a stranded turtle, I struggle toward the sea like my life
            depends on it. Except…my life really does depend on it. My chest,
            pressed painfully against the coarse sand, hoarsely screams for a
            sip of refreshing relief. The dirt smothering my face as it clouds
            the air in my frantic hustle isn&apos;t helping at all. <br />
            <br />
            <i>Almost there…</i> <br />
            <br />
            With one final heave costing the measly remainder of my energy, I
            plunge my face into the rushing waters and inhale a deep mouthful.
            With every gulp, I thirst for more. I keep drinking. It tastes
            awfully salty but I don&apos;t care. What other option do I have?{" "}
            <br />
            <br />I pause, lifting my dripping face to catch a glimpse of the
            sun making its daily pilgrimage below the horizon. How dazzling! …Is
            what I would think if I were not at my wit&apos;s end. I sigh and
            stare longingly where the sky meets the sea, pondering the mystery
            it holds. I have reached the shore after wandering through the
            desert, but it isn&apos;t quite the oasis I had hoped for. There is
            no trace of life besides my own wretched frame, and though there is
            water, it cannot sustain me. <br />
            <br />
            Slumping down in dissatisfaction, I am suddenly overtaken by a
            flaring thought: <i>I wanna get out of here.</i> Though venturing
            through the ocean may hold many unknowns, I have already hit rock
            bottom and have nothing to lose. A small whisper in my head tells me
            I should rest before embarking on another journey, but my desperate
            heart yearns for a sense of security that staying here simply would
            not grant me. Without waiting another minute, I dive into the water
            and swim blindly in some ambiguous forward direction, not daring to
            open my eyes for fear of the stinging salt. My hands reach and reach
            and reach, for solid ground but really just for my sanity.{" "}
            <i>Left, right, left, right.</i> Stroke after uneven stroke. Hoping
            against hope that my striving will find me a new home. <br />
            <br />
            <i>Suddenly&mdash;</i> <br />
            <br />A wave crashes over me. I&apos;m caught off guard and tumble
            in its wake. Instinctively, I open my eyes to gain my bearings then
            immediately squeeze them shut, but not before the harsh bite of
            saltwater permeates my pupils. I thrash around in an extremely
            barbaric fashion, searching hysterically for breath, a million
            panicked thoughts scribbling heaping chaos onto the canvas of my
            brain each second. No one is around to save me, my cries echoing at
            a different frequency than any other. I hear alarm sirens. Thumping.
            Tick. Tock. The scribbles suffocate my mind as the water suffocates
            my lungs and all the noises start blending together in a horrific
            symphony. Where&apos;s the surface? Where, where, where… <br />
            <br />I kick furiously and my head finally bursts through to the
            open night air. A massive gasp explodes from my gaping mouth,
            sputtering helplessly but grateful for the sweet taste of oxygen.
            With my eyes finally safe to open, I look around excitedly and feel
            a wave of disappointment surge through me&mdash;rather than in view
            of a new shore, I am right back where I started.
            <i>You&apos;ve got to be kidding.</i> Refusing to accept defeat, I
            pounce back into the water as it crawls up the beach, determination
            coursing through my veins. <br />
            <br />
            Before I know it, the wave brings me back.
            <i>I didn&apos;t try hard enough.</i> Go again. <br />
            <br />
            Washed back to shore. <i>I&apos;m too weak.</i> Do it again. <br />
            <br />
            <i>A failure.</i> Again. <br />
            <br />
            <i>Insufficient.</i> Rinse. <i>Abandoned.</i> And. <i>Despised.</i>{" "}
            Repeat. <br />
            <br />
            Again. <br />
            And again. <br />
            And again and again and again. <br />
            <br />I am drained of everything but my flaming desire to escape. I
            wonder how the water hasn&apos;t put it out yet.{" "}
            <i>Just one more time,</i> I say to myself. <br />
            <br />
            One more time, I thrust my body forward. One more time, I endure the
            stinging salt and the even greater sting of my self-effacing
            mentality. I kick and pull harder than ever before, subconsciously
            bracing for the wave that is to come. <br />
            <br />
            Right on cue, it slams into my face. It&apos;s a pointless chase. I
            am in no condition to fight the waves, which cruelly hurl me back to
            square one against my will, time after time. I wonder: if I am
            doomed to be stuck here, is it worth enduring at all? I let my limbs
            drift down to my side. I feel my limp body sinking into the depths,
            and for the first time in forever, I don&apos;t try to fight. For
            the first time, I feel a strange sense of peace. <br />
            <br />
            Through the darkness, a tender voice calls out to me: “Open your
            eyes.” Perplexed, I hesitantly comply. Behold, a most beautiful
            sight meets my gaze&mdash;in the waters above me, a display of
            graceful lights transform the murky sea into a stage for glowing
            dancers, twinkling with indescribable gentleness. It pierces and
            shines through the chaos swimming in my mind. I am so mesmerized
            that I almost don&apos;t realize my eyes are now comfortably open
            underwater, unaffected by the salt I was once so afraid of. And
            miraculously, I am no longer suffocating from lack of air, but my
            lungs are filled with vigorous breath anew. It&apos;s like the
            moment I let go of control, I became free. <br />
            <br />
            “Come to me, my child,” the same voice calls out again. Then it hits
            me. The source of light, the peace that surpasses understanding, the
            breath of life&mdash;this voice, it comes from my Father. The Father
            I neglected in favor of my own pursuits. <br />
            <br />I can&apos;t see where His voice is coming from, but somehow I
            know exactly where to go. The balletic lights guide me back to
            shore, and time stands still as I pass through the waters in
            tranquility. I can&apos;t believe these were the same waters I was
            battling for my life against just moments earlier. <br />
            <br />
            Upon reaching the shore, my head bobs out of the water to witness
            the sun stretching out its rays in a serene yawn, sending streaks of
            pink, orange, and gold across the vast expanse of the sky. The shiny
            wetness of the sand extends far and wide, mirroring the extravagant
            illustration up above. As I kneel in awe, calm waves still lapping
            at my feet, the beauty of creation takes my breath away, and the
            world seems to hold its breath with me. <br />
            <br />
            Finally, I dare to take a breath, a timid inhale and exhale that
            whispers His name: “<i>Yahweh.</i>” I turn my eyes to rest upon the
            silhouette of my beloved Father, standing on the drier regions of
            sand farther upshore. He smiles warmly, eyes sparkling infinitely
            brighter than the lights I saw underwater. He opens His arms in
            invitation. I don&apos;t need to be asked twice&mdash;I run toward
            Him as fast as my weary legs will take me, soaring across the beach
            but my soul soaring faster, tears flowing and left behind in the
            wind. <br />
            <br />
            Tumbling into His arms, I let out a sigh of relief. He tightens His
            embrace. Although I am soaked through and plastered with innumerable
            grains of sand, He does not pull away in repulsion. A strange
            sensation of lightness overwhelms me as all my burdens are lifted,
            even those hidden to myself. Taken aback, I look up and He says
            softly, “Now doesn&apos;t that feel better?” I nod and feel my face
            contort uncontrollably as a sob rises from deep within my throat. My
            words choke before they have the chance to be said.{" "}
            <i>I&apos;m sorry.</i> <br />
            <br />
            <i>
              I&apos;m sorry for chasing after my own desires. I&apos;m sorry
              for being caught up in myself. I&apos;m sorry for corrupting Your
              love with my judgment. I&apos;m sorry for seeking treasures that
              can never satisfy. I&apos;m sorry for forgetting only You can
              satisfy.
            </i>
            <br />
            <br />
            Amidst the waterfalls blinding my vision, I see my Father saying
            something. “I know. And I love you all the same.” <br />
            <br />
            The tears rain heavier, if that&apos;s even possible. All this time
            I was thirsting for things of this world, but the more I drank up
            that sea, the more I grew thirsty. All this time I was trying to
            swim elsewhere to satisfy my needs, thinking I knew best, but my
            gracious Father never let me go and kept sending waves to bring me
            back. All this time I thought the beach was a barren land, but He
            was there all along, better than any oasis I could stumble upon,
            overflowing with living water that will never run dry. Despite my
            persistent disobedience, He persistently pursued me. How steadfast
            He is, more than the sun we know will rise each day, more than the
            waves with their constant push and pull. <br />
            <br />
            <i>God, why do You love me?</i> I don&apos;t deserve a single ounce
            of Your love, yet You lavish it freely. Because that&apos;s simply
            who You are, loving simply who I am. Though I am but a vase marred
            by cracks that will continue breaking under the weight of my own
            sin, You will never stop piecing me back together, over and over
            again. My broken spirit that I despise so much, oh God, You never
            will. Somehow, You call me worthy to receive Your unending streams
            of mercy, replenishing my empty soul; worthy to stand here today
            even with all my failures, redeemed by the blood of Your only Son.{" "}
            <br />
            <br />
            How wonderful it is to be fully known and loved by You! Your
            goodness is sweeter than anything I&apos;ve ever tasted, even the
            fresh air after escaping the clutches of the sea. With You, even
            when the waves crash over me, I am safer than I have ever been.{" "}
            <br />
            <br />I look up again at the rising sun. It&apos;s a new morning to
            enjoy His mercies, to be satisfied with His love. <br />
            <br />I burrow deeper into His warm embrace. <br />
            <br />
            I&apos;m home.
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
