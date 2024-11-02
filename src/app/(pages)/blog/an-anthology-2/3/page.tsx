import styles from "./article.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Link href="/blog/an-anthology-3" className={styles.breadcrumb}>
            An Anthology of Joy and Thought Vol. 2
          </Link>
          <Image
            className={styles.image}
            src="/blog/an-anthology-2/3.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>childlike faith</h1>
          <div className={styles.text}>
            <b>Who Is the Greatest?</b>
            <br />
            At that time the disciples came to Jesus, saying, “Who is the
            greatest in the kingdom of heaven?” And calling to him a child, he
            put him in the midst of them and said, “Truly, I say to you, unless
            you turn and become like children, you will never enter the kingdom
            of heaven. Whoever humbles himself like this child is the greatest
            in the kingdom of heaven.
            <br />
            <br />
            Matthew 18:1-4 ESV <br />
            <br />
            <b>Let the Children Come to Me</b> <br />
            Then children were brought to him that he might lay his hands on
            them and pray. The disciples rebuked the people, but Jesus said,
            “Let the little children come to me and do not hinder them, for to
            such belongs the kingdom of heaven.” And he laid his hands on them
            and went away. <br />
            <br />
            Matthew 19:13-15 ESV <br />
            <br />
            <br />
            Childlike faith has been a concept I’ve reflected a lot on in life.
            In recent times, children have been quite present in my life,
            whether it be taking care of a baby, watching some toddlers, hearing
            kids laugh as they play at the playground, or simply talking to
            them. I love being around them, both because they are so adorable
            and fun to play with, but also because observing them has revealed
            more to me of this childlike faith.
            <br /> <br />
            When I observe them, I try to learn more and more about what it
            means to have childlike faith. There is childish faith but that is
            quite different from childlike faith. To be childish means to be
            selfish, acting rashly or emotionally to fulfill your own desires.
            When those things don’t come to fruition, we complain, we pout, and
            we throw a tantrum (whatever that looks like as an adult). When I
            think of being childlike, I see children and their honesty. They are
            trusting, dependent on their parents. Trusting that their parents
            know best and that their words are being spoken to protect them.
            They are honest. Children wear their emotions on their sleeves. They
            think they can hide it, but let’s be honest, when a kid is sad,
            angry, happy, or in pain, it is quite obvious. Finally, children are
            observant and curious. They are constantly learning, constantly
            questioning and wondering why. They take in the information from
            their senses about their surroundings and they absorb it, like
            sponges.
            <br />
            <br />
            Looking at Matthew 18, we can see instances of Jesus sharing on how
            we must be like children to enter the kingdom. In Matthew 19 we see
            Jesus welcoming and blessing the children despite how they may have
            been acting. For the disciples to rebuke it, the children must have
            been distracting haha. But Jesus saw the heart of these children.
            That childlike heart. I wonder what Jesus saw in these children.
            Jesus was probably the ultimate child. In the eyes of the Lord, He
            was the ultimate child that belonged in heaven. The embodiment of
            what it meant to have a “childlike faith” in the presence of The
            Father.
            <br />
            <br />
            Jesus saw that children see and understand more than adults seem to
            give credit for. Recently, a friend talked to me about his recent
            switch to serving in youth at his home church. One scary thing he
            learned is that kids are way smarter and way more observant than
            adults think. There would be other youth servants who would teach
            and serve them on Sundays, but then live worldly lives indulging in
            sin all the other days. Many times it’s easy to think that we can
            hide this lifestyle, but he shared how the kids already knew this
            about those teachers. As role models and teachers to the younger
            generation, we need to be more cautious in how we live. We are being
            watched more often than we think. This doesn’t mean putting on a
            facade. That will never work, and it will only tire you out. Rather,
            be transformed in Christ. Live out the same very words that we tell
            our children daily. Don’t they say, “actions speak louder than
            words?” So live out in action because these children—the next
            generation—they are always observing and learning from our actions.
            <br />
            <br />
            So back to childlike faith. As we grow older, the world wears us
            down. Those same wonders we once felt as children begin to fade,
            and, in the same ways, sometimes our awe for the Lord begins to wane
            as well. Children are open about their emotions, they are creative,
            joyful, playful, trusting, easily forgiving (with some 3rd-party
            convincing sometimes), energetic, always see the best in people, and
            are always willing to grow and challenge themselves. As an adult,
            how often have I refused to forgive? Become jaded at the world? Lost
            my awe and wonder at the beauty of His creation? Held a grudge
            against someone?
            <br />
            <br />
            Being childlike never meant we lose our wisdom or understanding. I
            think to me, being childlike means that we
            <br />
            <ul className={styles.list}>
              <li>
                trust God unwaveringly, knowing that, just like a parent, He
                knows what’s best for us and wants what’s best for us.
              </li>
              <li>
                are honest with Him, wear our emotions on our sleeve in His
                presence, for there is nothing to hide from Him.
              </li>
              <li>
                have awe in life, the sunset, the gentle breeze. Embrace it all,
                never forget the awe and wonder of His creation and sacrifice.
              </li>
              <li>
                let our joy be contagious. Who doesn’t smile when a baby is
                laughing or smiling? Let that same childlike joy be even more
                contagious than a baby’s smile or laugh
              </li>
              <li>
                watch and observe how Jesus lived in The Word. Learn from it,
                soak it like a sponge and let it shape the ways we live
              </li>
              <li>
                love. Love those around us just as He loves us. We are His
                children and everyone else is too!
              </li>
              <li>
                live just as Jesus, the embodiment of “childlike faith,” lived
              </li>
            </ul>
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/2" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2/4" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
