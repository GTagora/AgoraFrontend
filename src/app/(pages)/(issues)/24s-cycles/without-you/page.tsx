import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Simon Ruiz";
  const credit = "Illustration by Allison Chung";
  const title = "Without you...";
  const date = "April 26, 2024";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/24s-cycles/simon.png"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            <b>Without you…</b>
            <br />
            <br />
            Every morning I sit at our table <br />
            Looking out the window <br />
            Drinking a cup of coffee <br />
            <br />
            I instinctively reach my hand towards yours <br />
            Only to be met with nothing <br />
            Remembering, that you&apos;re not here <br />
            <br />
            …Was the world always this empty? <br />
            <br />
            Every afternoon I come home <br />
            Weary from a long day of work <br />
            I open the door and walk in <br />
            <br />
            I instinctively await your hug <br />
            Only for it never to arrive <br />
            Remembering, that you&apos;re gone <br />
            <br />
            …Was this room always so cold? <br />
            <br />
            Every evening I cook the same meal <br />
            Making a bit too much <br />
            Thinking about how it was your favorite <br />
            <br />
            I instinctively grab two plates <br />
            Only to put one back <br />
            Remembering, that I&apos;m alone now <br />
            …What&apos;s the point without you? <br />
            <br />
            Every night I get ready for bed <br />
            Surrounded by my emptiness <br />
            Bombarded by memories of you <br />
            <br />
            I instinctively turn to face you <br />
            Only to see no one <br />
            Remembering, that this is my life now <br />
            <br />
            …How do I do this again tomorrow? <br />
            <br />
            We were supposed to visit your parents for Christmas <br />
            Do I still go? <br />
            How are they dealing with it? <br />
            What do I even say to them? <br />
            <br />
            Your friends keep reaching out <br />
            I fake my strength <br />
            I tell them I&apos;m doing fine, or I&apos;m busy <br />
            Because seeing them still hurts <br />
            <br />
            God… why did You take her away? <br />
            She loved You dearly <br />
            She lit up every room she entered <br />
            She cared for everyone <br />
            But I&apos;m here in a dark room <br />
            <br />
            God… why wasn&apos;t it me instead? <br />
            She would know how to do this <br />
            She would lean on You <br />
            She would comfort our friends and family <br />
            But I&apos;m here hiding away <br />
            <br />
            God… what now? <br />
            I&apos;m a mess without her <br />
            I&apos;m so empty <br />
            I&apos;m not able to handle this <br />
            But I&apos;m supposed to continue everyday without her? <br />
            <br />
            God… I can&apos;t <br />
            The world is moving too fast <br />
            While each moment is painfully long <br />
            This is all too much for me <br /> <br />
            <hr /> <br />
            <b>
              With<s>out</s> you…
            </b>{" "}
            <br />
            <br />
            Everytime I wake up <br />
            I hope this nightmare is over <br />
            But everything is the same <br />
            <br />
            How long do I wait? <br />
            They say You&apos;re always working <br />
            And that I should trust You <br />
            <br />
            Why is nothing changing? <br />
            <br />
            Every time I eat <br />
            I expect her to pray <br />
            But no prayers come <br />
            <br />
            Should I pray? <br />
            I&apos;m too afraid <br />
            Because it didn&apos;t work for her <br />
            <br />
            Why didn&apos;t You answer my prayers? <br />
            <br />
            Everytime I see a couple <br />
            I think of the plans we had <br />
            They&apos;re all gone now <br />
            <br />
            Your ways are higher right? <br />
            You work all things for my good <br />
            I should probably submit to Your will <br />
            <br />
            Why did You take her? <br />
            <br />
            Every time I&apos;m alone <br />
            I&apos;m consumed by my thoughts <br />
            A crippling whirlpool <br />
            <br />
            Unable to escape <br />
            With You in the center <br />
            Waiting calmly <br />
            <br />
            Why are You just standing there?! <br />
            <br />
            Can You do something for once? <br />
            I&apos;m drowning in this sorrow <br />
            While You do nothing <br />
            Are You enjoying this? <br />
            <br />
            This is all Your fault <br />
            You ruined everything <br />
            While I suffer <br />
            Please just fix something <br />
            <br />
            You could&apos;ve saved her! <br />
            Unless You&apos;re not all powerful <br />
            Or maybe You don&apos;t care <br />
            Either way, she&apos;s gone <br />
            Are You even hearing me? <br />
            <br />
            You could&apos;ve made a different plan! <br />
            Your ways don&apos;t seem better <br />
            All You do is bring pain <br />
            And somehow that gives You glory? <br />
            Are You even worth following? <br />
            <br />
            You could&apos;ve changed anything! <br />
            Unless You&apos;re too busy to notice <br />
            You are God after all <br />
            Why bother with us? <br />
            Are You even loving? <br />
            <br />
            You could help me… <br />
            Yet You haven&apos;t <br />
            Still, I can&apos;t save myself <br />
            Where else could I even go? <br /> <br />
            <hr /> <br />
            <b>
              <s>Without</s> You…
            </b>
            <br />
            <br />
            Every day You watch over me <br />
            Willingly taking my curses and insults <br />
            Because You know my pain <br />
            <br />
            You felt it too <br />
            But You also know the healing <br />
            AndSo You remain a stronghold <br />
            <br />
            How can You put up with me? <br />
            <br />
            Every week You comfort me <br />
            When it all seems too much <br />
            You are here giving me strength <br />
            <br />
            You see my battles <br />
            But You also know the victories <br />
            So You remain a refuge <br />
            <br />
            How can You still love me? <br />
            <br />
            Every month You rejoice over my growth <br />
            Even when I see none <br />
            You notice every step <br />
            <br />
            You see where I&apos;ve been <br />
            But You also know where I&apos;ll be <br />
            So You remain a guide <br />
            <br />
            How can You still hope in me? <br />
            <br />
            Every year You are patient with me <br />
            Despite my faithlessness <br />
            You have never abandoned me <br />
            <br />
            You knew the journey <br />
            But You also know the glory it brings <br />
            So You remain my Father <br />
            <br />
            How can You be so faithful? <br />
            <br />
            Although it hurts now <br />
            You are still good <br />
            When it all seems unchangeable <br />
            You are still powerful <br />
            <br />
            Although You feel distant now <br />
            You are still present <br />
            When it all seems unknown <br />
            You are omniscient <br />
            <br />
            You were there at the creation of the universe <br />
            You watched every rise and fall <br />
            You endured Your Son on the cross <br />
            You rejoiced when He rose <br />
            And You partook in our lives <br />
            <br />
            You were there when we met <br />
            You watched as we fell in love <br />
            You bore through every nervous date <br />
            You celebrated our wedding <br />
            And You partook in our joy <br />
            <br />
            You were there when she died <br />
            You watched every tear fall <br />
            You heard every desperate prayer <br />
            You felt every heartbreak <br />
            And You partook in our grief <br />
            <br />
            You will be there through the restoration <br />
            You will be there when the pain blesses Your people <br />
            You will be there when the growth glorifies You <br />
            You will be there when I sing Hallelujah <br />
            And You will partake in our worship
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
