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
						src="/blog/an-anthology-3/quiet monotony.jpg"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>quiet monotony</h1>
					<div className={styles.text}>
						Quiet monotony. It is exactly how it sounds. A quiet life. A
						monotonous life. In many ways, it’s not the life we want to live. We
						want to live extravagant, explosive lives filled with non-stop
						memories and fun. Maybe that’s not you, but for me, that’s how I
						envisioned my so-called 20s to be. Many people talk about how the
						20s are your years of discovery. The years where you mess around,
						have fun, and make as many memories as possible before the “burdens”
						of settling down become a reality. They say that quiet monotony
						means you’re boring.
						<br />
						…
						<br />
						…
						<br />
						…
						<br />I guess that means I’m boring.
						<br />
						<br />
						The reality of my 20s has begun to settle-in that most of my days
						from this point on will be spent in this quiet monotony. To grow in
						this season is to understand that. It is to see beauty in the
						so-called “monotonous” rhythms of life. Many days, I wish that I
						could live this lavish and explosive life the world offers. But for
						what will that last? For what god will that serve?
						<br />
						<br />
						The Lord asks us to surrender ALL our life to Him, not just the
						moments we are in mission or ministering to our community or
						worshipping on a Sunday. In the quiet monotony, the rhythms of life,
						we can find beauty. It’s in the inbetweens of His mercies I have
						found true excitement and joy. It’s in the meals I share with loved
						ones. The runs where I can see glimpses of His creation. His glory
						that is revealed in His word. In the drives to work as I pray or
						worship. The songs I get to sing with brothers and sisters. The
						masterfully painted patterns of the clouds on a warm Texas day. The
						walks I take in a local park. The small dances I partake in as I
						vacuum my room. The gentle swing of my knife as I prepare
						ingredients to cook. He is in the midst of it all, and in the
						silence and solitude, the quiet monotonous moments, we are given a
						chance to step back and see that glory.
						<br />
						<br />
						Why do we want such exciting lives? Why do we feel like every moment
						of our life needs to feel like a movie scene? This excitement is
						blinding. They say slow and steady wins the race, right? So why do
						we try to rush? Why do we seek our own timing? In a personal
						admission, it’s because of my own pride. It’s because I want to be
						king of my life. But in reality, it was never my life. It was always
						His, a gift that He gave to me.
						<br />
						<br />
						In the quiet monotony, in the rhythms of life. He is present. He is
						present in it all. If the God who loves us and sent His son for us
						is present in it all, then in reality, no moment is quiet. He is
						always speaking to us. Whether it be a gentle whisper or a crashing
						thunder, every moment is an opportunity to listen. How could any
						moment then be monotonous? Every moment is another opportunity for
						Him to display His grace, His mercy. His love. It’s paradoxical
						really. People see our lives as quiet and monotonous, but only the
						ears of the Christian are those that can truly hear, and only the
						lives of the Christian are those that are eternally exciting. We
						call it quiet monotony, but to live with God is so far from being
						quiet and monotonous. Our mercies are new every single day. So in
						actuality, no day is ever quiet or monotonous. What a privilege and
						blessing that is.
					</div>

					<div className={styles.buttons}>
						<Link href="/blog/an-anthology-3/1" className={styles.href}>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-3/3_quite_monotony_pt2"
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
