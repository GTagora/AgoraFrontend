import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function Article() {
	const author = "Chris Moon";
	const credit = "Photo by Chris Moon";
	const title = "a letter to my Father";
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
			<p>father,</p>
			<p>
				what is it that you want from Me?
				<br />
				because I can do it, and I will
				<br />
				if what you order is just to listen
				<br />
				then here I am; silent and waiting, still
			</p>

			<p style={{ textAlign: "right" }}>
				my dear son,
				<br />
				when you ask what i want
				<br />
				it’s not something you can do
				<br />
				you wait without patience
				<br />
				every toiled endeavor, not endued
			</p>

			<p>
				Father,
				<br />
				my walls of glass shatter, and now reveal
				<br />
				what i’ve tried to hide from me, present to You
				<br />
				You are my strong fortress; You are my comforting home
				<br />
				etch Your words upon my heart, no longer stone
			</p>
		</>
	);

	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<Image
						className={styles.image}
						src="/issues/23f/Chris_A_Letter_To_My_Father.webp"
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
