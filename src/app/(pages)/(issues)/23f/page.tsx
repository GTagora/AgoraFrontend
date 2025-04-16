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
					<div>
						Dear Reader, <br /><br />  
						We are so excited and joyful to invite you to read this debut issue of our journal, <i>Agora</i>.  In this endeavor, we were reminded that even the mustard tree sprouts from the smallest of seeds; that's exactly how our journal started. God planted an idea and nurtured it through countless miracles to bring this journal to you today. A pipe dream, held in fragile human hands, was built on His strength as He provided the interest, facilities, talent, and resources that gave this vision physicality. Then He provided a name, <i>Agora</i>, a marketplace of nourishment and ideas, where each merchant’s individual wares bring diversity to the market’s offerings. Our journal embodies this image of harmony and communal provision by gathering each contributor’s unique perspective through dialogue, reflection, composition, and fellowship founded upon our faith. <br /><br />  While we didn’t establish an overarching theme for this issue, these first few months have been characterized by His provision and our gratitude. We started this journal to glorify God; His steadfast provision has magnified His presence and power on this campus. <br /><br />  And so, Reader, we invite you to step foot into our agora and partake in the fruits of His generosity. We hope and pray that our words and voices presented here will bring His glory into focus and spiritually nourish you.<br /><br />   
						With love, <br/>
						Via and Chris <br/>
						<i>Editors-in-Chief</i>
					</div>
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
