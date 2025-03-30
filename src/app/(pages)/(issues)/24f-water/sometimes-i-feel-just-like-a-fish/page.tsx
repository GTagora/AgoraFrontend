import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Sean Kim";
  const credit = "Illustration by Lorien Cho";
  const title = "Sometimes I Feel Just Like A Fish";
  const date = "December 4, 2024";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/24f-water/sometimes-i-feel-just-like-a-fish.webp"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            Sometimes I feel just like a fish. I feel like a freshwater fish
            dropped in the middle of the Atlantic Ocean, surrounded by water,
            yet dying of dehydration. I feel like a goldfish caged within a
            glass prison, silently observing as leaves turn from green to amber,
            as days blur together, as people come and go. I feel like a fish out
            of water, thrashing against the sand, tormented by the echoes of
            comfort and safety in the rhythmic waves just inches away. Sometimes
            I wonder who am I and what am I doing and why am I here. Other times
            I wonder who should I be and what should I do and where should I be
            instead. Some days I stop to think, wake up from the trance of daily
            life, and suddenly I am lost and doubtful and struggle to do basic
            things that I’ve been doing for years and years. Other days I can’t
            seem to stop thinking, where the disappointing realities of what is
            and the haunting whispers of what could have been, what should have
            been, threaten to overwhelm me. Amidst this desperate struggle to
            get through another day, amidst the confusion of complex
            relationships and tangled emotions, amidst the exhaustion produced
            by endless doubts times countless decisions, I seek help, for I
            cannot possibly face all this alone. Since I cannot rely upon
            people, things, or even myself, I need God, my rock, my fortress, my
            salvation—my one certainty in this world of uncertainty.
            <br />
            <br />
            Sometimes I feel just like a fish. I feel like a really dumb, stupid
            fish, unaware of the water that surrounds it. How ironic; fish are
            born in water, live in water, and die in water, and still fail to
            comprehend that very same water. If so, how much more pathetic am I?
            From the second I was born to the moment I write these words, I have
            been surrounded by His presence. Never a minute passes by where I am
            not with Him. Yet how easily I forget Him! Distracted by the
            ephemeral pleasures of this world, I repeatedly draw away from God,
            returning to the idols and sins I swore I would forsake before.
            Despite seeing His hand in the gentle breeze of an autumn day, His
            love in the joyous laughter of friends, and His wisdom from the
            prayers He answers, it’s so easy for me to forget. Even demons and
            the devil himself acknowledge God’s greatness; sometimes, I don’t
            even remember He exists at all. So help me, God. Help me, with my
            limited, mortal perspective, remember your constant, infinite
            presence. Help me, with my easily distracted, fragile mind, turn
            back to you and take comfort in your warmth. And more than anything,
            help me see. Open my eyes, LORD, like you’ve done again and again in
            the past so that I can see you where you are and be reminded of your
            presence. Through triumphant times and turbulent waters, help me so
            that I do not forget the things my eyes have seen or let them fade
            from my heart. Let me not forget that you breathe life into me
            forever and always.
            <br />
            <br />
            Sometimes I feel just like a fish. I feel like a fish swimming
            furiously in a river, headed towards some faraway, unknown
            destination, propelled more by instinct and habit rather than
            passion and inspiration. Amidst the daily hustle and bustle,
            questions and doubts bombard me like rocks to the head. Where does
            this river lead? Is this the right path? Do I even want to go where
            this is headed? And maybe, I should head in another direction. This
            river is vast and wide; there are countless offshoots I could take,
            streams that will lead me elsewhere. But if I do diverge, which path
            shall I pick? How do I know whether that course is a tributary,
            flowing towards something greater, or a distributary, taking me away
            from where I want to be? But then I tear my gaze away from that
            faraway destination, that fateful ‘end’ I’ve been racing towards,
            and look around. I gaze at the birds of the air, who do not worry
            and still find food every night. I gaze at the lilies in fields that
            do not toil and yet still grow to be bright and beautiful. I gaze at
            the fish of the river who do not know where they are headed yet
            still arrive where they need to be. There is no grand destination;
            there is no grand finale. The ‘end’ I’ve been so fixated upon is
            only the farthest point my mortal eyes can see. But in the face of
            perfect design and omniscient plans, I realize where I am is where I
            am meant to be. The heart of man plans his way, but the LORD
            establishes his steps. The LORD provides for the birds, the flowers,
            and fish; then for me, who our heavenly father treasures, why should
            I worry? Do not worry about tomorrow, for tomorrow will worry about
            itself.
            <br />
            <br />
            Sometimes I feel just like a fish—small, unknowing, caught in a
            river too big for me to understand. But maybe that’s all I need to
            be—a fish, led by the current, trusting in the water surrounding it.
            For just as the fish relies on the water to carry it, so too will I
            trust in the LORD to lead me, knowing that He is the river that
            sustains me and the current that will bring me home.
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
