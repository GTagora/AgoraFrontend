import styles from "./article.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Link href="/blog/an-anthology-2" className={styles.breadcrumb}>
            An Anthology of Joy and Thought Vol. 2
          </Link>
          <Image
            className={styles.image}
            src="/blog/an-anthology-2/5.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>Image: Stephen Noh</p>
          <h1 className={styles.title}>The Gardener</h1>
          <div className={styles.text}>
            <i>
              The Gardener walks through His garden and sees a branch struggling
              to bear fruit
              <br />
              <br />
              “My dear plant, why do you fret?”, asks the Gardener
            </i>
            <br />
            <br />
            “I feel tired. Drained. Loathe to do anything. I want to bear
            beautiful fruit, but I can’t do anything,” said the plant.
            <br />
            <br />
            <i>“What is bothering you?”</i>
            <br />
            <br />
            “No matter how hard I try, no matter how many nutrients I receive, I
            don’t see any fruits.”
            <br />
            <br />
            <i>
              “When I see you, I see one struggling to get by on his own power.
              I see a branch overwhelmed with treesuckers.
              <br />
              <br />
              My dear plant, I am your Gardener. Why do you feel the need to
              provide your own nutrients?”
            </i>
            <br />
            <br />
            “I want to be seen as a beautiful branch. One that bears so many
            sweet and beautiful fruits.”
            <br />
            <br />
            <i>
              “One cannot bear fruits in the wrong season nor with all your
              nutrients being sucked away. You try to do so many things and
              forget the one who remains in control.”
            </i>
            <br />
            <br />
            “But Father, even if you take care of me, where do we even begin?”
            <br />
            <br />
            <i>
              “Slowly, we must prune those treesuckers from you. They overwhelm
              and sap away at you. They harbor pests and diseases and prevent
              your fruits.”
            </i>
            <br />
            <br />
            “But Father, those are a part of my branches. Won’t that hurt?”
            <br />
            <br />
            <i>
              “Unless you abide in me, as I in you, you will struggle to bear
              such fruits. Pruning is not easy and it will hurt.”
            </i>
            <br />
            <br />
            “Father, how will I know when I am pruned?”
            <br />
            <br />
            <i>
              “When I become your life. Your only one. When obedience becomes
              greater than your ambition.”
            </i>
            <br />
            <br />
            “But Father, if I am pruned, when will I bear fruit?”
            <br />
            <br />
            <i>
              “My child, why are you in such a hurry? Be patient, for your fruit
              comes in seasons. Even when the branches around you are
              blossoming, trust in me and that your fruits will come. Remain in
              me. Soak in my presence, and may you fill those around you more
              abundantly.”
            </i>
            <br />
            <br />
            “Then teach me to trust in You. To remain in You in this pruning. I
            can’t do this alone. I need You. I’m so scared.”
            <br />
            <br />
            <i>
              “My child, you were never alone and you never will be. Until the
              day you see those fruits, remain in me.”
            </i>
            <br />
            <br />
            <b>Inspired by John 15:1-11</b>
          </div>

          <div className={styles.buttons}>
            <Link href="/blog/an-anthology-2/4" className={styles.href}>
              &lt;&nbsp; Previous
            </Link>
            <Link href="/blog/an-anthology-2/6" className={styles.href}>
              Next &nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
