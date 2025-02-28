import styles from "./page.module.css";
import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Footer from "@/app/components/footer";
import Image from "next/image";

// First Fix: Define the Issue interface to match the expected structure
interface Issue {
	Semester: string;
	Theme: string;
	Slug: string;
	Image: string;
	Volume: number;
	Issue: number;
}

interface IssuesProps {
	issue: Issue;
}

// Update the IssueCard component to use the proper types
// Remove 'any' to remove unforseen errors and after-affects
const IssueCard = ({ issue }: IssuesProps) => {
	const { Semester, Theme, Slug, Image: imgSrc } = issue;
	return (
		<Link href={Slug}>
			<div className={styles.card}>
				{/* TypeScript will now correctly infer the types */}
				<Image
					className={styles.img}
					src={imgSrc}
					width={300}
					height={500}
					alt="Issue cover"
				/>
				<h1>{Theme.toUpperCase()}</h1>
				<p>{Semester.toUpperCase()}</p>
			</div>
		</Link>
	);
};

// Experimental -> Fetching issues from the API with proper type annotations
async function getIssues(): Promise<Issue[]> {
	const res = await fetch("https://agora-backend-sxd6.onrender.com/getIssues", {
		cache: "no-store",
	});
	const data: Issue[] = await res.json(); // Type the returned data as an array of Issue objects
	return data;
}

export default async function Archive() {
	const issues = await getIssues();

	return (
		<div className={styles.main}>
			<h1>Past Issues</h1>
			<div className={styles.container}>
				{issues
					.sort((a, b) => b.Volume - a.Volume || b.Issue - a.Issue)
					.map((issue) => (
						<IssueCard key={issue.Slug} issue={issue} />
					))}
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
}

// Define the types for getStaticPaths and its expected return value -> removing any
export const getStaticPaths: GetStaticPaths = async () => {
	const issues = await getIssues();
	const paths = issues.map((issue) => ({
		params: { slug: issue.Slug.toLowerCase().replaceAll(" ", "-") },
	}));

	return { paths, fallback: true };
};
