import styles from './page.module.css'
import { GetStaticPaths } from 'next'
import Card from '@/app/(templates)/card';
import Image from 'next/image'

interface Article {
    theme: string
}
  
async function getIssues() {
const res = await fetch(`https://agora-backend-sxd6.onrender.com/getIssues`, { cache: 'no-store' });
const data = res.json();

return data;
}

async function getArticles() {
    const res = await fetch(`https://agora-backend-sxd6.onrender.com/getJournalEntries`, { cache: 'no-store' });
    const data = res.json();
  
    return data;
}


export default async function Issue({ params }: any) {
    const issues = await getIssues();
    const slug = "/" + params.issue;
    const issue = issues.find((a: any) => a.Slug === slug);
    const volume = issue.Volume;
    const iss = issue.Issue;
    const semester = issue.Semester;
    const letter = issue.Letter;
    const theme = issue.Theme;
    const image = issue.Image;

    let articles = await getArticles()
    articles = articles.filter(function(article:any) {
        return article.Theme === theme;
    });

    return (
        <div>
            <div className={styles.main}>
                <p>semester: {semester}</p>
                <p>volume {volume} | issue {iss}</p>
                <div className={styles.letter} dangerouslySetInnerHTML={{ __html: letter.replace(/\\n/g, '\n')}}></div>
                <div className={styles.articlesContainer}>
                    {articles && articles.map(async (article: any) => (
                            <Card key={null} article={article}></Card>
                    ))}
                </div>
            </div>
        </div>
)};

export const getStaticPaths: GetStaticPaths = async () => {
    const issues = await getIssues();
    const paths = issues.map((i: any) => ({
        params: { issue: "",
                  slug: i.Slug.toLowerCase().replaceAll(" ", "-") }
    }));
  
    return { paths, fallback: true };
  };