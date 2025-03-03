import styles from "./page.module.css";
import BlogCard from "@/app/(templates)/blog-card";

interface Article {
	id: number,
	title: string;
	genre: string;
	img: string;
	slug: string;
	date: string;
}

const articles: Article[] = [
	{
		id: 4,
		title: "An Anthology of Joy and Thought Vol. 3",
		genre: "POEM",
		img: "/blog/an-anthology-3/intermission.jpg",
		slug: "blog/an-anthology-3",
		date: "Fall 2025",
	},
	{
		id: 3,
		title: "An Anthology of Joy and Thought Vol. 2",
		genre: "POEM",
		img: "/blog/an-anthology-2/15.jpg",
		slug: "blog/an-anthology-2",
		date: "Fall 2024",
	},
	{
		id: 2,
		title: "An Anthology of Joy and Thought Vol. 1",
		genre: "POEM",
		img: "/blog/an-anthology/3.jpg",
		slug: "blog/an-anthology",
		date: "Summer 2024",
	},
	{
		id: 1,
		title: "a bench",
		genre: "POEM",
		img: "/blog/a-bench/a_bench.jpg",
		slug: "blog/a-bench",
		date: "06.19.2024",
	},
];

export default function Blog() {
	return (
		<main className={styles.main}>
			<h1 className={styles.h1}>Blog</h1>
			<div className={styles.allcards}>
				{articles.map((article) => (
					<BlogCard key={article.slug} article={article} />
				))}
			</div>
		</main>
	);
}
