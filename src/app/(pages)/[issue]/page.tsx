import styles from './page.module.css'
import { GetStaticPaths } from 'next'
import Card from '@/app/(templates)/card';
import Image from 'next/image'
import Link from 'next/link';
import IssuButton from '@/app/components/issuButton';

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

const RenderHTML = (props:any) => (<span dangerouslySetInnerHTML={{__html:props.HTML}}></span>)


export default async function Issue({ params }: any) {
    const issues = await getIssues();
    const slug = "/" + params.issue;
    const issue = issues.find((a: any) => a.Slug === slug);
    const volume = issue.Volume;
    const iss = issue.Issue;
    const semester = issue.Semester;
    const letter = issue.Letter;
    const theme = issue.Theme;
    const issu = issue.Issu;
    const image = issue.Image;

    let articles = await getArticles()
    articles = articles.filter(function(article:any) {
        return article.Theme === theme;
    });

    return (
        <div>
            <div className={styles.container}>
                <h1>{theme}</h1>
                <h5>{semester.toUpperCase()} | VOL. {volume}, NO. {iss}</h5>
                {issu ? <IssuButton link={issu}/> : null}
                    <div className={styles.letter}>
                        <h3>Letter from the editors</h3>
                        <RenderHTML HTML={letter} />
                    </div>
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