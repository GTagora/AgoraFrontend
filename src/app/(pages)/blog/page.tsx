import styles from "./page.module.css";
import BlogCard from "@/app/(templates)/blog-card";

<<<<<<< HEAD
const articles = [
    {
        title: "a bench",
        genre: "POEM",
        img: '/blog/a-bench/a_bench.jpg',
        slug: "blog/a-bench",
        date: "06.19.2024",
    },
    {
        title: "An Anthology of Joy and Thought Vol. 1",
        genre: "POEM",
        img: "/blog/an-anthology/3.jpg",
        slug: "blog/an-anthology",
        date: "Summer 2024",
    },
    {
        title: "An Anthology of Joy and Thought Vol. 2",
        genre: "POEM",
        img: "/blog/an-anthology-2/15.jpg",
        slug: "blog/an-anthology-2",
        date: "Fall 2024",
    },
    {
        title: "An Anthology of Joy and Thought Vol. 3",
        genre: "POEM",
        img: "/blog/an-anthology-3/intermission.jpg",
        slug: "blog/an-anthology-3",
        date: "Spring 2025",
    }
]
=======
interface Article {
	title: string;
	genre: string;
	img: string;
	slug: string;
	date: string;
}
>>>>>>> jp_anthology3

const articles: Article[] = [
	{
		title: "a bench",
		genre: "POEM",
		img: "/blog/a-bench/a_bench.jpg",
		slug: "blog/a-bench",
		date: "06.19.2024",
	},
	{
		title: "An Anthology of Joy and Thought Vol. 1",
		genre: "POEM",
		img: "/blog/an-anthology/3.jpg",
		slug: "blog/an-anthology",
		date: "Summer 2024",
	},
	{
		title: "An Anthology of Joy and Thought Vol. 2",
		genre: "POEM",
		img: "/blog/an-anthology-2/15.jpg",
		slug: "blog/an-anthology-2",
		date: "Fall 2024",
	},
	{
		title: "An Anthology of Joy and Thought Vol. 3",
		genre: "POEM",
		img: "/blog/an-anthology-2/15.jpg",
		slug: "blog/an-anthology-3",
		date: "Fall 2025",
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
