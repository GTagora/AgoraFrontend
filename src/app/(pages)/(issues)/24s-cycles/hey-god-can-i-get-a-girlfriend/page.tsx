import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Raph Cheng";
  const credit = "Photo by Stephen Noh";
  const title = "Hey God, Can I Get a Girlfriend?";
  const date = "April 26, 2024";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/24s-cycles/raph.jpg"
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
              Dear God, <br />
              <br />
              Thank you for this day that you have made. Thank you for the ways
              in which you have worked and continue to work in my life. I pray
              that your Spirit can move in me and transform me to be more like
              Christ. At this time Lord, I just pray for this one request… God,
              pleeeease help me find a girlfriend.
              Yet-not-my-will-but-yours-be-done. <br />
              <br />
              Amen.
            </i>{" "}
            <br />
            <br />
            Look, I&apos;ll be honest. This is something I&apos;ve prayed for…
            more than once. Actually, more than I&apos;m willing to admit. Call
            me foolish or desperate or whatever, but I&apos;ll still be huffing
            that Mark 11:24 hopium in between every breath of prayer. And I
            wouldn&apos;t be surprised if the majority of people, at least once,
            have done the same. I mean, it&apos;s natural. We pray for what we
            desire. I&apos;m at the point in my life where I&apos;ve almost got
            my master&apos;s degree, I have a job lined up, a good church
            community and friend group… There's only one thing missing, so
            that&apos;s what I pray for. <br />
            <br />
            For all the sad, lonely people who are already regretting their
            decision to read this piece, don&apos;t worry. I won&apos;t be
            flaming the desire to be in a relationship. Then I&apos;d just be
            flaming myself&mdash;not cool. Instead, I want to talk about what it
            means to desire, and where this comes from: to desire in general,
            not for anything in particular. But in order to do that, I&apos;m
            going to start from a really long time ago. Like, 2004. <br />
            <br />
            Enter three-year-old me: already a little walking menace to society.
            My dad is finishing up his PhD in physical therapy and my mom just
            gave birth to my sister, so they already have their hands full of
            responsibilities. I don&apos;t personally remember what I was like
            back then, but I know from both my parents that I was&mdash;as the
            kids these days would say&mdash;a certified yapper. Like most
            children, what I desired most was attention: the attention of my
            parents, or the aunties and uncles at church, or strangers in the
            grocery store. Obviously, I was too young to pray for that, but I
            think if I&apos;d been able to back then, I would have. <br />
            <br />
            Skip another three years, and now I&apos;m in elementary
            school&mdash;first grade. Our family had just moved, which meant I
            was switching schools. As a new student at Indian Trace (okay but
            why is that name kind of insensitive?), I really only had one
            desire: friends. I remember this was what I would pray for at night
            before bed, earnestly asking God for friends so I wouldn&apos;t
            become some edgy emo kid. <br />
            <br />
            Fast forward to me as an edgy emo kid in middle school&mdash;but
            don&apos;t worry, it&apos;s just a phase. Growing up in a typical
            Asian household, the importance of grades and academic excellence
            were drilled into me from a young age&mdash;so you can guess what I
            started to pray for then. I think you can see where this is going
            now. <br />
            <br />
            In high school, I prayed for my robotics team to do well. I prayed
            for my class rank. I prayed for college acceptances. In college, I
            prayed for interviews, then internship offers, then full-time jobs.
            And now we&apos;re all caught up. <br />
            <br />
            In every season of my life I had some prayer, some desire that I
            raised to God. They started out small&mdash;attention,
            grades&mdash;and gradually became larger as I got older and asked
            for career opportunities, a job, and now&mdash;well, you read the
            title. The thing is, everything that I wanted was for myself: my
            grades, my job, my relationship. It&apos;s not like they&apos;re bad
            things to pray for&mdash;I mean, God says to be fruitful and
            multiply, right?&mdash;but I think there is a danger in this cycle
            of pursuit. <br />
            <br />
            Now I&apos;m not writing this to tell people not to pray for things.
            I joked about Mark 11, but it&apos;s not the only verse that talks
            about God answering prayers&mdash;look at Philippians 4:6, or Romans
            8:26, Ephesians 6:18… there&apos;s a lot. We&apos;re supposed to
            lift our requests up to God, and He does say He will
            provide&mdash;not always in the ways that we want, but in the way
            that He decides. So by all means, pray for what it is that you want,
            as long as it&apos;s not something illegal like drugs, or the book
            of Judas. <br />
            <br />
            It&apos;s perfectly fine to pray for things. But why do I never seem
            to have enough? Why is it that as soon as God answers my prayer, I
            move on to the next thing on the list? Once I got into college, I
            prayed for an internship. Once I got internships, I prayed for a
            job. And now that I have a job, I&apos;m once again praying for the
            next item on my checklist, so to speak. Is this cycle going to keep
            on repeating until I die? Will I pray for a wife, a new car, a kid,
            a house, a kid, another kid, on and on forever? <br />
            <br />
            Well, the TLDR is, yes. Yes I will. But it&apos;s a bit more nuanced
            than that. <br />
            <br />I think the danger I see for myself is when my desires become
            the reason for my prayers, and the reason for my thankfulness to
            God. When I pray because I&apos;m requesting something from God, and
            not because I want to talk to God, He stops being God and starts
            becoming a genie - and that&apos;s not the relationship we&apos;re
            supposed to build with Him. I start to pray, not for God, but for
            myself. It seems like the best way to overcome this is to just never
            desire anything then, right? <br />
            <br />
            The problem is, I&apos;m human. I&apos;m also not Buddhist, so that
            whole detachment from desires thing? Yeah, I&apos;m good. I will
            naturally look towards the next goal, the next milestone in life
            that I&apos;m reaching for. Is that unhealthy? I don&apos;t think
            desiring what is to come is unhealthy, but maybe that continual
            pursuit, over and over, is. I mean, we pray and pray for something
            to happen. Then when it does, what do we do? Maybe we&apos;re
            thankful for a while, but eventually something new comes up, and we
            pray and pray again. That&apos;s not how we&apos;re supposed to live
            out our life. <br />
            <br />
            So how do I break out of this pattern of desire? This is something
            I&apos;m still struggling with today, and honestly I&apos;m not sure
            if it&apos;s one I'll ever overcome. But I&apos;ll try. I know that
            what I pursue, first and foremost, cannot be my worldly desire.
            Every time I&apos;ve done this I&apos;ve been left unsatisfied no
            matter the result. Instead, breaking the cycle of pursuit requires
            me to pursue God above all. If you think about it, that makes sense.
            I&apos;ll never reach God&mdash;not on earth, anyways. So I&apos;ll
            always be reaching towards Him, running to Him, but never coming
            even close to God. It&apos;s no longer a cycle, because it
            can&apos;t be one if it never repeats, am I right? <br />
            <br />
            Then the question becomes, what <i>is</i> the pursuit of God? What
            does it look like? And to that, I say… I don&apos;t know. Or rather,
            I don&apos;t know the full scope of it all. It means to put Him
            first. It means to seek to become more like Christ. It means that in
            everything we do God should be the reason, and the way. And it means
            so much more that I just don&apos;t know. How is it possible to do
            all that, to be all that? Well, like the incredibly based Jesus
            said, “With man this is impossible, but with God all things are
            possible” (Matthew 19:26). <br />
            <br />I guess pursuing God is a daily process&mdash;one I&apos;m
            still trying to figure out. That&apos;s kind of its own cycle in
            itself, except I&apos;m always reaching towards the same goal. I
            still desire the things that I want, and I still pray to God about
            them. But I hope to reach the point where I&apos;m lifting up my
            requests in prayer <i>because</i> I am talking to God, and not the
            other way around. It&apos;s like what Jesus said in the sermon on
            the mount: “Seek first His kingdom and His righteousness, and all
            these things will be given to you as well” (Matthew 6:33). Only then
            can I break out of this cycle of worldly pursuit and instead pursue
            God. With a heart desiring Him and my eyes focused on Christ, I will
            once again ask: <br />
            <br />
            Hey God, can I get a girlfriend? <br />
            <br />
            Amen.
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
