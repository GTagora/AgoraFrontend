
import styles from './page.module.css'
import IssueCard from '@/app/(templates)/issue-card';
import IssuuButton from '@/app/components/issuuButton';
import Footer from '@/app/components/footer';


const articles = [
    {
        title: 'article 1',
        image: '/issues/issue/test.png',
        genre: 'poem',
        issue: 'Water',
        link: '/issue/article-1'
    },
    {
        title: 'article 2 name',
        image: '/issues/issue/test.png',
        genre: 'poem',
        issue: 'Water',
        link: '/issue/article-2'
    }
]

export default async function Issue() {

    const volume = 2;
    const issue = 1;
    const semester = 'Fall 2024'
    const theme = 'Sample Issue';
    const issuu = 'https://issuu.com/gtagora/docs/agora_f24';
    // const image = '/covers/f24.jpg';

    return (
        <main className={styles.main}>
            <h1>{theme}</h1>
            <h5>{semester.toUpperCase()} | VOL. {volume}, NO. {issue}</h5>
            {issuu ? <IssuuButton  link={issuu}/> : null}
            <div className={styles.hbox}>
                <div className={styles.letter}>
                    <h3>Letter from the editors</h3>
                    <div>
                        {/* INSERT LETTER FROM EICS HERE */}
                    </div>
                </div>
                <div className={styles.articlesContainer}>
                    {articles && articles.map((article: any) => (
                        <IssueCard key={article.name} article={article}></IssueCard>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
)};