import styles from './page.module.css'
import { GetStaticPaths } from 'next'
import Card from '@/app/(templates)/card';
import Image from 'next/image'
import Link from 'next/link';
import IssuuButton from '@/app/components/issuuButton';
import Footer from '@/app/components/footer';

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
    const issuu = issue.Issuu;
    const image = issue.Image;

    let articles = await getArticles()
    articles = articles.filter(function(article:any) {
        return article.Theme === theme;
    });

    return (
        <div className={styles.container}>
            <h1>{theme}</h1>
            <h5>{semester.toUpperCase()} | VOL. {volume}, NO. {iss}</h5>
            {issuu ? <IssuuButton  link={issuu}/> : null}
                <div className={styles.letter}>
                    <h3>Letter from the editors</h3>
                    <RenderHTML HTML={letter} />
                </div>
            <div className={styles.articlesContainer}>
                {articles && articles.map(async (article: any) => (
                        <Card key={null} article={article}></Card>
                    ))}
            </div>
            <div className={styles.footer}>
                <Footer />
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