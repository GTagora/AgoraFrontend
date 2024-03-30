import styles from './article.module.css'
import { GetStaticPaths } from 'next'
import Card from '@/app/(templates)/card';
import Image from 'next/image'

interface Issues {
    slug: string;
}

async function getIssues() {
    const res = await fetch(`https://agora-backend-sxd6.onrender.com/getIssues`, { cache: 'no-store' });
    const data = res.json();
  
    return data;
}

// async function getArticles() {
//     const res = await fetch(`https://agora-backend-sxd6.onrender.com/getArticles`, { cache: 'no-store' });
//     const data = res.json();
  
//     return data;
// }


export default async function Issue({ params }: any) {
    // const articles = await getArticles()
    const issues = await getIssues();
    const slug = "/fall-23";
    const issue = issues.find((a: any) => a.Slug === slug);
    const volume = issue.Volume;
    const iss = issue.Issue;
    const semester = issue.Semester;
    const letter = issue.Letter;
    const theme = issue.Theme;
    const image = issue.Image;

    return (
        <div>
            <div className={styles.main}>
                <p>semester: {semester}</p>
                <p>volume {volume} | issue {iss}</p>
                
                <div className={styles.letter} dangerouslySetInnerHTML={{ __html: letter.replace(/\\n/g, '\n')}}></div>
                <div className={styles.articlesContainer}>
                    {/* {articles && articles.map(async (article: any) => (
                            <Card key={null} article={article}></Card>
                    ))} */}
                </div>
            </div>
        </div>
)};

export const getStaticPaths: GetStaticPaths = async () => {
    const issues = await getIssues();
    // const articles = await getArticles();
    // const paths = issues.map((issue: any) => ({
    //     params: { slug: issue.Slug.toLowerCase().replaceAll(" ", "-") }
    // }));
    const paths = issues.map((article: any) => ({
        params: { article: article.Title.toLowerCase().replaceAll(" ", "-").replace(/[^a-zA-Z0-9 -]/g,"").toString(),
                  issue: article.Issue.toLowerCase().replaceAll(" ", "-")
                }
    }));
  
    return { paths, fallback: true };
  };