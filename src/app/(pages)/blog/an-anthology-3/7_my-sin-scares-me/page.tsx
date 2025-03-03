import styles from "./article.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
	return (
		<div>
		<div className={styles.main}>
			<div className={styles.container}>
			<Link href="/blog/an-anthology-3" className={styles.breadcrumb}>
				An Anthology of Joy and Thought Vol. 3
			</Link>
			<Image
				className={styles.image}
				src="/blog/an-anthology-3/my sin scares me.jpg"
				width={600}
				height={600}
				alt="article image"
			/>
			<p className={styles.credit}>Image: Stephen Noh</p>
			<h1 className={styles.title}>my sin scares me</h1>
			<div className={styles.text}>
				One thing I’ve been thinking and realizing lately is how terrible and heavy my sin is.
				<br/><br/>
				To think, Adam sinned once and the entire world was thrown to the wrath of God, yet here I am. A broken man who sins everyday. Every second of every day, every day of the year. That’s 31,536,000 times a year. It’s not something I can even quantify to be honest. My point being is if one sin can throw the entire world into condemnation, how heavy is my daily cross?
				<br/><br/>
				The Lord’s wrath is described as one that will quake the earth, make everything go dark (Joel 2:10-11, Isaiah 13:13, etc.), one that can destroy anything and everything in its path. In many Scriptures, it is said that this wrath is poured out on the wicked and unrighteous. This is what happens when I sin, the punishment I deserve in the presence of a perfect God.
				<br/><br/>
				So if a single sin carries that much weight, how much more broken am I? How much wrath do I deserve?
				<br/><br/>
				So. Much.
				<br/><br/>
				BUT to think. There is a God who loves me SO much. SO much that He sent His OWN Son to take that weight off of me. To take each and every sin I’ve ever done. Ever thought. Ever even crossed with. He took it ALL upon that cross for me. Wow. To take that much weight. That much wrath, punishment, isolation, rejection, the list goes on and on. To take upon ALL my sin. All 693,792,000+ sins. Not only that, He did this for EVERYONE. The words spoken in Matthew 27:46 only pierce deeper into my soul.
				<br/><br/>
				“My God, my God, why have you forsaken me?”
				<br/><br/>
				How much wrath Jesus must have felt in that moment. How much pain, yet He did it out of love. That’s just how great His love is. That’s just how great His grace is.
				<br/><br/>
				So when I look back on my sin, I get scared. I’m reminded just how broken I am. How unworthy I am to sit in the presence of a perfect God. But I remember the God who gave His Son to me. I look upon that blood-ridden cross and see the Lamb. The Lamb’s blood that was spilled for me to cover me and my brokenness.
				<br/><br/>
				This life I live, I want to flee from sin. To be in constant reminder of how great my sin is. How broken I am. May I not treat this grace cheaply and seek to live in constant transformation.
			</div>

			<div className={styles.buttons}>
				<Link
				href="/blog/an-anthology-3/6_honor-and-faith"
				className={styles.href}
				>
				&lt;&nbsp; Previous
				</Link>
				<Link
				href="/blog/an-anthology-3/8_ataraxia"
				className={styles.href}
				>
				Next &nbsp;&gt;
				</Link>
			</div>
			</div>
		</div>
		</div>
	);
}
