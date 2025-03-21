import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function Article() {
	const author = "Simon Ruiz";
	const credit = "Photo adapted by Simon Ruiz";
	const title = "Why love";
	const date = "December 8, 2023";

	/*
		Follows React and Next.js best practices
			- JSX-Based Formatting -> instead of embedding raw HTML in a string (Avoid issues with escaping, parsing, and rendering)
			- Component Structure -> JSX structure cleanly separates content from layout, avoiding messy string concatenation or dangerouslySetInnerHTML.
			- CSS Modules for Styling -> Styles imported from page.module.css, ensuring scope and reduce risk of global CSS conflicts
			- Next.js Image Optimization -> Using <Image /> which next.js automatically optimizes images for performance instead of <img> tag.
	*/
	const formattedText = (
		<>
			<div
				style={{ display: "flex", flexDirection: "row", textAlign: "center" }}
			>
				<div style={{ width: "50%" }}>
					<b>Why do You love me?</b>
					<p>Why do You love me?</p>
					<p>
						It doesn’t make much sense
						<br />
						You’re an almighty God
						<br />
						I’m an ordinary person
						<br />
						Yet You love me
					</p>
					<br />
					<p>
						I just don’t think I’m worthy
						<br />
						I’m not all that great
						<br />I fail at everything
						<br />
						And I can’t escape sin
						<br />
						Yet You choose me
					</p>
					<br />
					<p>
						I don’t give You enough time
						<br />I fall asleep during sermons
						<br />
						Get distracted when I pray
						<br />
						And I ignore You
						<br />
						Yet You value our time
					</p>
					<br />
					<p>
						We want different things
						<br />I want comfort
						<br />I want to hold grudges
						<br />I want to focus on me
						<br />
						Yet You want my heart
					</p>
					<br />
					<p>
						We’re not very compatible
						<br />
						You never give me what I want
						<br />
						You always try to change me
						<br />
						And You never speak to me
						<br />
						Yet You desire me
					</p>
					<br />
					<p>
						This love doesn’t make sense
						<br />
						I’ve cursed You
						<br />
						I’ve run away from You
						<br />
						I’ve hated You
						<br />
						Yet You died for me
					</p>
				</div>

				<div>
					<b>Why do I love You?</b>
					<p>Why do I love You?</p>
					<p>
						It doesn’t make much sense
						<br />
						You’re something I can’t see
						<br />
						I’m not even sure You exist
						<br />
						Yet I love You
					</p>
					<br />
					<p>
						I just don’t think You’re worth it
						<br />
						You’re not what I thought
						<br />
						You expect so much
						<br />
						And You have so many rules
						<br />
						Yet I choose You
					</p>
					<br />
					<p>
						I give You so much time
						<br />
						All these church gatherings
						<br />
						Spiritual disciplines
						<br />
						And surrendering my life
						<br />
						Yet I value our time
					</p>
					<br />
					<p>
						We want different things
						<br />I don’t want to be generous
						<br />I don’t want to forgive
						<br />I don’t want to build Your kingdom
						<br />
						Yet I want Your heart
					</p>
					<br />
					<p>
						We’re not very compatible
						<br />I never follow Your commands
						<br />
						I’m not who You want me to be
						<br />
						And I can’t hear You
						<br />
						Yet I desire You
					</p>
					<br />
					<p>
						This love doesn’t make sense
						<br />
						You bring hardship
						<br />
						You make me sacrifice
						<br />
						You turn the world against me
						<br />
						Yet I live for You
					</p>
				</div>
			</div>
		</>
	);

	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<Image
						className={styles.image}
						src="/issues/23f/Simon_Why_Love.webp"
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
