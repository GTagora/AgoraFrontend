import styles from './page.module.css'
import { GetStaticPaths } from 'next'
import IssueCard from '@/app/(templates)/issue-card';
import IssuuButton from '@/app/components/issuuButton';
import Footer from '@/app/components/footer';

interface Issue {
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

export const getStaticPaths: GetStaticPaths = async () => {
    const issues = await getIssues();
    // const paths = issues.map((i: any) => ({
    //     params: { issue: i.Slug.toLowerCase().replaceAll(" ", "-") }
    // }));
    const paths = [
        { params: { issue: "spring-24" } },
        { params: { issue: "fall-23" } },
    ]
    return { paths, fallback: false };
};

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
        <main className={styles.main}>
            <h1>{theme}</h1>
            <h5>{semester.toUpperCase()} | VOL. {volume}, NO. {iss}</h5>
            {issuu ? <IssuuButton  link={issuu}/> : null}
            <div className={styles.hbox}>
                <div className={styles.letter}>
                    <h3>Letter from the editors</h3>
                    <RenderHTML HTML={letter} />
                </div>
                <div className={styles.articlesContainer}>
                    {articles && articles.map(async (article: any) => (
                            <IssueCard key={null} article={article}></IssueCard>
                        ))}
                </div>
            </div>
            <Footer />
        </main>
)};