import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function Article() {
	const author = "Abel Chen";
	const credit = "Photo by Chris Moon";
	const title = "Q&A with a Sinner: Is It Good?";
	const date = "December 8, 2023";

	/*
		Follows React and Next.js best practices
			- JSX-Based Formatting -> instead of embedding raw HTML in a string
			- Component Structure -> JSX structure cleanly separates content from layout, avoiding messy string concatenation or dangerouslySetInnerHTML.
			- CSS Modules for Styling -> Styles imported from page.module.css, ensuring scope and reduce risk of global CSS conflicts
			- Next.js Image Optimization -> Using <Image /> which next.js automatically optimizes images for performance instead of <img> tag.
	*/
	const formattedText = (
		<>
			<p>
				<strong>Part 1: What I Hate About You</strong>
			</p>
			<p>
				<em>Is it good to be purposeful with every action?</em>
			</p>
			<p>
				In the beginning, I simply thought, “I want to live with the purpose God
				gave me!”
			</p>
			<p>
				<em>What happened in the end?</em>
			</p>
			<p>
				Someone told me, “You know what I hate about you? I hate that everything
				you do needs to have a purpose. You always need a reason to do every
				little action.”
			</p>
			<p>
				<em>What reflections did you have?</em>
			</p>
			<p>I had to ask myself, “Why am I doing these actions?”</p>
			<p>
				<em>And?</em>
			</p>
			<p>I had to admit that I was doing this to justify myself.</p>
			<p>
				<em>Where is God in all this?</em>
			</p>
			<p>
				The Father is purposeful in lavishing love upon His creation. That’s
				good.
			</p>
			<br />

			<p>
				<strong>Part 2: The House of Sand</strong>
			</p>
			<p>
				<em>Is it good to do what a godly person would do?</em>
			</p>
			<p>
				In the beginning, I simply thought, “I want to do what Jesus would do!”
			</p>
			<p>
				<em>What happened in the end?</em>
			</p>
			<p>
				I believed godliness to be a means of gain, a persona I had to build and
				uphold to keep my house of sand from crumbling. I showed my faith to
				bask in affirmation from others without accepting where I was truly at.
			</p>
			<p>
				<em>What reflections did you have?</em>
			</p>
			<p>
				I had to ask myself, “Why am I trying so hard to emulate the perceived
				‘godly’ person?”
			</p>
			<p>
				<em>And?</em>
			</p>
			<p>
				I had to admit that I was creating my own image of what a godly person
				would do and chased after that.
			</p>
			<p>
				<em>Where is God in all this?</em>
			</p>
			<p>
				The Son lived a self-sacrificial life in obedience to chase after the
				Father. That’s good.
			</p>
			<br />

			<p>
				<strong>Part 3: A Vine and Two Eagles</strong>
			</p>
			<p>
				<em>Is it good to have a growth mindset?</em>
			</p>
			<p>
				In the beginning, I simply thought, “I want to grow as a vine that
				abides in Christ!”
			</p>
			<p>
				<em>What happened in the end?</em>
			</p>
			<p>
				Just as we repeat the footsteps of the Israelites, I was the wandering
				vine*: I thought that growth always means progress.
			</p>
			<p>
				<em>What reflections did you have?</em>
			</p>
			<p>I had to ask myself, “Why am I seeking to grow?”</p>
			<p>
				<em>And?</em>
			</p>
			<p>
				I had to admit that I sought my comfort and security in the motions of
				making progress as a Christian.
			</p>
			<p>
				<em>Where is God in all this?</em>
			</p>
			<p>
				The Holy Spirit grows us to bear good fruit for our Vinedresser. That’s
				good.
			</p>

			<p>
				<small>
					*Ezekiel 17 contains a parable about a vine and two eagles. In this
					parable, a great eagle represents Babylon and another eagle symbolizes
					Egypt. The vine refers to the kingdom of Judah. The chapter describes
					how the vine was planted by the Babylon eagle in a bountiful place but
					foolishly stretched out its roots toward the eagle of Egypt. The
					stretching roots represent the Judeans' allegiance with Egypt in
					opposition to Babylon. This was in direct rebellion with God’s command
					to settle down and prosper in Babylon.
				</small>
			</p>
		</>
	);

	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<Image
						className={styles.image}
						src="/issues/23f/Abel_Is_It_Good.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>{credit}</p>
					<h1 className={styles.title}>{title}</h1>
					<h2 className={styles.author}>By {author}</h2>
					<h3 className={styles.date}>{date}</h3>
					<div className={styles.text}>{formattedText}</div>
				</div>
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
}
