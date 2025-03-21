import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function Article() {
	const author = "Stephen Noh";
	const credit = "Photo by Stephen Noh";
	const title = "The One who will Never Leave";
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
			<p>As Autumn left and the leaves had withdrawn</p>
			<p>
				All value and glamour had gone
				<br />
				Lifeless and loathed, a tree stands alone and small
				<br />
				Its identity and beauty gone at a lone winter’s call
			</p>
			<br />

			<p>
				All that remained was a snag of wood covered in frost
				<br />
				The same wood that laid Him nailed to that cross
				<br />
				Oh, woe is thee, I am a sinner with no worth
				<br />
				One that had wished was never given birth
			</p><br/>

			<p>
				What hope could be found as it cried out in agony?
				<br />
				Alone and sorrowful as it grew disdain for reality
				<br />
				As it thought it lost all peace, joy, and tranquility,
				<br />
				There descended The Dove, coming down to rest in thee
			</p><br/>

			<p>
				And there it heard a voice speaking to appease
				<br />
				“You are my Son, whom I love; with You I am well pleased”
				<br />
				In this dry and barren land, You have sent to me the Son
				<br />
				And He has given me worth when I felt I had none
			</p><br/>

			<p>
				I will remain in Your love throughout all the uncertainty
				<br />
				As we walk hand-in-hand through joys and adversities
				<br />
				In hopeful tunes and gleeful worship, I burst out singing
				<br />
				Cheerful for I know that this is a new beginning
			</p><br/>

			<p>
				Spring came, and The Dove remained in me all the same
				<br />I became excited to see what fruit I would sustain
				<br />
				You have given me purpose and given me life,
				<br />
				And in You I have found all my marvelous delight
			</p><br/>

			<p>
				The Dove built its home and lay with me till rest
				<br />
				Identity refound and beauty to attest
				<br />
				That I am Broken, but alive, standing with certainty
				<br />
				For He has sown me in good soil to live for eternity
			</p>
		</>
	);

	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<Image
						className={styles.image}
						src="/issues/23f/Stephen_The_One_Who_Will_Never_Leave.webp"
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
