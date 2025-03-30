import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function Article() {
	const author = "Olivia Hu";
	const credit = "";
	const title = "you";
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
				<i>"For now we see in a mirror dimly, but then face to face"</i> — 1
				Corinthians 13:12 (ESV)
			</p>
			<br />
			<br />
			<p>
				i’m surrounded by you
				<br />
				in mirrors, in windows, every glancing surface
				<br />
				you haunt the glass
				<br />i look at you, scrutinize, and curdle with reproach
				<br />
				yet,
				<br />
				you are mesmerizing
				<br />
				you mirror my movements and meet my eyes;
				<br />
				you preoccupy me
				<br />
				when i look closely,
				<br />
				the glass is opaque with your burdens and desires—
				<br />a distraction
			</p>

			<br />

			<p>
				i’m surrounded by you
				<br />
				in voices, bodies, outstretched hands
				<br />
				together you’re my parachute, but still furled; your vibrant breadth
				undiscovered
				<br />i look at you from behind glass walls
				<br />
				my ghostly reflection, superimposed
				<br />a film of grime and conceit, obscuring your beauty
				<br />
				but,
				<br />
				if i look closely, if i forget myself,
				<br />
				the glass vanishes,
				<br />
				and we are face to face (finally)
				<br />
				i’m falling, hands touch, and
				<br />
				your colors unfurl across the sky
			</p>

			<br />

			<p>
				i’m surrounded by You
				<br />
				in morning glory, the sunrise; in pure, unruffled air
				<br />
				Your presence is breathable, fragrant, yet breathtaking
				<br />i look at this world, unveiled by Your light,
				<br />
				at creation, which blushes with reverent joy
				<br />
				and,
				<br />
				my reflection, a mere memory, glimmers and fades
				<br />
				children laugh and embrace, Your Ghost dwelling among them
				<br />
				as i look closely,
				<br />
				bodies and barriers disappear; Your radiance shines through
				<br />
				like blooming parachutes, You fill up the sky
			</p>

			<br />

			<p>and i’m mesmerized, again</p>
		</>
	);

	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<Image
						className={styles.image}
						src="/issues/23f/Olivia_You.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>{credit}</p>
					<h1 className={styles.title}>{title}</h1>
					<h2 className={styles.author}>BY {author.toUpperCase()}</h2>
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
