import styles from "./page.module.css";
import IssueCard from "@/app/(templates)/issue-card";
import IssuuButton from "@/app/components/issuuButton";
import Footer from "@/app/components/footer";

// Properly typed Article interface instead of any typing
interface Article {
	title: string;
	image: string;
	genre: string;
	issue: string;
	link: string;
}

const articles: Article[] = [
	{
		title: "Q&A with a Sinner: Is It Good?",
		image: "/issues/23f/Abel_Is_It_Good.webp",
		genre: "Personal Essay",
		issue: "Fall 23",
		link: "/23f/1-is-it-good-abel",
	},
	{
		title: "a letter to my Father",
		image: "/issues/23f/Chris_A_Letter_To_My_Father.webp",
		genre: "Poem",
		issue: "Fall 23",
		link: "/23f/2-a-letter-to-my-father-chris",
	},
	{
		title: "Zacchaeus' Song",
		image: "/issues/23f/Esther_Zacchaeus_Song.webp",
		genre: "Poem",
		issue: "Fall 23",
		link: "/23f/3-zacchaeus-song-esther",
	},
	{
		title: "you",
		image: "/issues/23f/Olivia_You.webp",
		genre: "Poem",
		issue: "Fall 23",
		link: "/23f/4-you-olivia",
	},
	{
		title: "God + Sin: The Problem of Evil",
		image: "/issues/23f/Raphael_God_Sin.webp",
		genre: "Academic Essay",
		issue: "Fall 23",
		link: "/23f/5-god-sin-raphael",
	},
	{
		title: "Why love",
		image: "/issues/23f/Simon_Why_Love.webp",
		genre: "Poem",
		issue: "Fall 23",
		link: "/23f/6-why-love-simon",
	},
	{
		title: "The One who will Never Leave",
		image: "/issues/23f/Stephen_The_One_Who_Will_Never_Leave.webp",
		genre: "Poem",
		issue: "Fall 23",
		link: "/23f/7-the-one-who-will-never-leave-stephen",
	},
];

export default async function Issue() {
	const volume = 2;
	const issue = 1;
	const semester = "Fall 2024";
	const theme = "Debut";
	const issuu = "https://issuu.com/gtagora/docs/agora_f24";

	return (
		<main className={styles.main}>
			<h1>{theme}</h1>
			<h5>
				{semester.toUpperCase()} | VOL. {volume}, NO. {issue}
			</h5>
			{issuu && <IssuuButton link={issuu} />}
			<div className={styles.hbox}>
				<div className={styles.letter}>
					<h3>Letter from the editors</h3>
					<div>{/* INSERT LETTER FROM EICS HERE */}</div>
				</div>
				<div className={styles.articlesContainer}>
					{articles?.map((article) => (
						<IssueCard key={article.title} article={article} />
					))}
				</div>
			</div>
			<Footer />
		</main>
	);
}
