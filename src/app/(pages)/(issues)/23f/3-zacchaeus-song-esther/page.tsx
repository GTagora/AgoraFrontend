import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function Article() {
	const author = "Esther Shen";
	const credit = "Photo by Esther Shen";
	const title = "Zacchaeus' Song";
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
				i wrestle my way through the crowd
				<br />
				oh why with small stature was i endowed
				<br />
				my lungs gasping, grasping for breath
				<br />
				still one thought fills my head
				<br />i just want to see You
			</p>
			<br />

			<p>
				this thought i hold as i clamber up the tree
				<br />
				letting go of all my precious dignity
				<br />
				for among probing eyes darkened with contempt
				<br />i will be perfectly content
				<br />
				if i can just see You
			</p>
			<br />

			<p>
				and upon the tree You see me
				<br />
				out of the darkness You pull me
				<br />
				with eyes that dance with flame
				<br />
				and words my ears have never heard
				<br />
				“I want to see you”
			</p>
			<br />

			<p>
				i, with my prideful heart
				<br />
				i, with my broken spirit
				<br />
				i, the sinner of sinners
				<br />
				hiding in the deepest of shadows
				<br />
				who am i that You would see me?
			</p>
			<br />

			<p>
				You, with glory beyond compare
				<br />
				You, with grace that never ends
				<br />
				You, the King above all kings
				<br />
				ruling from a throne of perfect love
				<br />
				who am i that You would seek me?
			</p>
			<br />

			<p>
				no, it’s not because of who i am
				<br />
				but because of who You are
				<br />
				You, who would choose to enter my house
				<br />
				and walk with me for all eternity—
				<br />
				oh what a sight, my soul stirs and sings
			</p>
			<br />

			<p>
				how many nights have i wallowed in shame?
				<br />
				thirsting for glory yet never embracing my name
				<br />
				lurking in a castle built on sand and fears
				<br />
				but You alone see all my silent tears
				<br />
				and wipe them gently from my face
			</p>
			<br />

			<p>
				as You hold my hand through these waters
				<br />
				waves of grace wash me pure
				<br />
				born again, righteous as the name i wear*
				<br />
				to dwell in Your house, now my one desire
				<br />
				to seek Your face all the days of my life
			</p>
			<br />

			<p>
				my heart longs for assurance
				<br />
				in bright eyes, indulging words
				<br />
				ephemeral glints in a desert world
				<br />
				but You are the well that never runs dry
				<br />
				so may Your eyes be the only ones that satisfy
			</p>
			<br />

			<p>
				though i am small and weak
				<br />
				may my weakness magnify Your majesty
				<br />
				may my little lungs burst!
				<br />
				unbridled delight in Your presence
				<br />
				as i gaze upon my beautiful Savior
			</p>
			<br />

			<p>
				every breath You’ve gifted to me
				<br />
				every breath i pour in melody
				<br />
				to my dearest friend
				<br />
				to my loving Father
				<br />
				to the One who saw me in that tree
			</p>
			<br />

			<i>
				And Jesus said to him, “Today salvation has come to this house, since he
				also is a son of Abraham. For the Son of Man came to seek and to save
				the lost.” ~Luke 19:9-10
			</i>

			<p>
				<em>* Zacchaeus’ name means “pure” or “righteous”</em>
			</p>
		</>
	);

	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<Image
						className={styles.image}
						src="/issues/23f/Esther_Zacchaeus_Song.webp"
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
