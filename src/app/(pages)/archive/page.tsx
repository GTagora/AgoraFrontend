import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/app/components/footer";
import Image from "next/image";

type Issue = {
	semester: string;
	theme: string;
	slug: string;
	image: string;
	volume: number;
	issue: number;
}

// Update the IssueCard component to use the proper types
const Card = ({ issue }: any ) => { //figure out how to change this from any type
	return (
		<Link href={issue.slug}>
			<div className={styles.card}>
				{/* TypeScript will now correctly infer the types */}
				<Image
					className={styles.img}
					src={issue.image}
					width={300}
					height={500}
					alt="Issue cover"
				/>
				<h1>{issue.theme.toUpperCase()}</h1>
				<p>{issue.semester.toUpperCase()}</p>
			</div>
		</Link>
	);
};

const issues = [
	{
		semester: 'Fall 2024',
		theme: 'Water',
		slug: '/24f-water',
		image: '/covers/f24.webp',
		volume: 2,
		issue: 1,
	},
	{
		semester: 'Spring 2024',
		theme: 'Cycles',
		slug: '/24s-cycles',
		image: '/covers/s24.webp',
		volume: 1,
		issue: 2,
	},
	{
		semester: 'Fall 2023',
		theme: 'Fall 2023',
		slug: '/23f',
		image: '/covers/f23.webp',
		volume: 1,
		issue: 1,
	}
]

export default async function Archive() {
	return (
		<div className={styles.main}>
			<h1>Past Issues</h1>
			<div className={styles.container}>
				{issues
					.map((issue) => (
						<Card key={issue.slug} issue={issue} />
					))}
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
}
