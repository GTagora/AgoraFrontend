import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer";
import Subtitle from "./components/subtitle";
// import Letter from "./components/letter";
import Card from "./(templates)/card";
import Link from "next/link";
import IssuuButton from "./components/issuuButton";

// Define the types for articles to remove type any
interface Article {
	Theme: string;
	// Add other properties here as needed, e.g.:
	Title: string;
	Slug: string;
}

interface MobileProps {
	articles: Article[];
}

const Introduction = () => (
	<p>
		It’s a joy and honor to bring you this third issue of <i>Agora</i>,
		enveloped and sealed in His gracious love for all of us. Each semester, we
		are astounded by God’s merciful provision of contributors, talents, time,
		and resources; the very journal you’re holding is a miracle in itself, and
		we invite you to join us in celebrating His goodness in these pages!
		<br />
		<br />
		We’d like to introduce this installation’s theme, <i>Water</i>. It’s well
		known that water is essential to life: it sustains our individual beings,
		our ecosystems, our planet. It’s so fundamental that we often forget its
		necessity; instead, it’s one of many undercurrents
	</p>
);

const Mobile = ({ articles }: MobileProps) => {
	return (
		<div className={styles.main}>
			<div className={styles.heading}>
				<Image
					className={styles.logo}
					src="/logo-black.png"
					width={100}
					height={100}
					alt="Agora logo"
				/>
				<h1>AGORA</h1>
				<h2>Georgia Tech’s Journal of Christian Thought</h2>
			</div>

			<div className={styles.container}>
				<hr />
				<h1>Water</h1>
				<h4>FALL &apos;24 | VOL. 2 NO. 1</h4>
				{/* <Letter letter={letter} /> */}
			</div>
			<div className={styles.articlesContainer}>
				{articles?.map((article) => (
					<Card key={article.Slug} article={article} />
				))}
			</div>
			<Footer />
		</div>
	);
};

interface HomeProps {
	articles: Article[];
}

async function getArticles(): Promise<Article[]> {
	const res = await fetch(
		"https://agora-backend-sxd6.onrender.com/getJournalEntries",
		{ cache: "force-cache" },
	);
	const data = await res.json();
	return data;
}

export default async function Home() {
	const articles = await getArticles();
	const waterArticles = articles.filter((article) => article.Theme === "Water");

	return (
		<>
			<div className={styles.mobileView}>
				<Mobile articles={waterArticles} />
			</div>
			<div className={styles.desk}>
				<div className={styles.heading}>
					<Subtitle />
				</div>
				<div>
					<Link href="#latest-issue">
						<Image
							className={styles.arrow}
							src="/arrow.png"
							width={25}
							height={25}
							alt="arrow"
						/>
					</Link>
				</div>
				<a id="latest-issue" href="#latest-issue">
					<span className="sr-only">Jump to the latest issue section</span>
				</a>

				<div className={styles.container}>
					<h1>Water</h1>
					<h4>FALL &apos;24 | VOL. 2 NO. 1</h4>

					<div className={styles.hbox}>
						<div className={styles.feature}>
							<Image
								className={styles.img}
								src="/covers/f24.jpg"
								width={6000}
								height={4000}
								alt="Issue cover"
							/>
						</div>
						<div className={styles.letter}>
							<h2>Letter from the EIC</h2>
							<Introduction />
						</div>
					</div>
					<div className={styles.issuu}>
						<IssuuButton link="https://issuu.com/gtagora/docs/agora_f24" />
					</div>
					<div className={styles.articlesContainer}>
						{waterArticles?.map((article) => (
							<Card key={article.Slug} article={article} />
						))}
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
