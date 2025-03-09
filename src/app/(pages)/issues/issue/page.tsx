
import styles from './page.module.css'
import { GetStaticPaths } from 'next'
import IssueCard from '@/app/(templates)/issue-card';
import IssuuButton from '@/app/components/issuuButton';
import Footer from '@/app/components/footer';

async function getArticles() {
    const res = await fetch(`https://agora-backend-sxd6.onrender.com/getJournalEntries`, { cache: 'no-store' });
    const data = res.json();
  
    return data;
}

const articles = [
    {
        title: 'article 1 name',
        image: '/issues/issue/test.png',
        genre: 'poem',
        issue: 'Water',
        link: '24f-water/article-1-name'
    },
    {
        title: 'article 2 name',
        image: '/issues/issue/test.png',
        genre: 'poem',
        issue: 'Water',
        link: '24f-water/article-2-name'
    }
]

export default async function Issue() {

    const volume = 2;
    const issue = 1;
    const semester = 'Fall 2024'
    const theme = 'Sample Issue';
    const issuu = 'https://issuu.com/gtagora/docs/agora_f24';
    const image = '/covers/f24.jpg';

    return (
        <main className={styles.main}>
            <h1>{theme}</h1>
            <h5>{semester.toUpperCase()} | VOL. {volume}, NO. {issue}</h5>
            {issuu ? <IssuuButton  link={issuu}/> : null}
            <div className={styles.hbox}>
                <div className={styles.letter}>
                    <h3>Letter from the editors</h3>
                    <div>
                        Dear Reader,<br/><br/> 
                        It’s a joy and honor to bring you this third issue of <i>Agora</i>, enveloped and sealed in His gracious love for all of us. Each semester, we are astounded by God’s merciful provision of contributors, talents, time, and resources; the very journal you’re holding is a miracle in itself, and we invite you to join us in celebrating His goodness in these pages!<br/><br/> We’d like to introduce this installation’s theme, <i>Water</i>. It’s well known that water is essential to life: it sustains our individual beings, our ecosystems, our planet. It’s so fundamental that we often forget its necessity; instead, it’s one of many undercurrents that support our interests, obligations, and priorities. It’s only in seasons of drought that we realize how precious water is, how life-giving, and how frail we become without proper hydration. <br/><br/> We sometimes fall into a similar rhythm in our relationship with Christ, especially amidst the busyness and distraction of this world. Water, then, in its many forms can emulate our relationship with the Father, through both gentle streams and violent hurricanes. This semester, our writers meditated on water in its multidimensionality, especially as it has reflected God’s character and presence in their lives. Through their witness and His grace, we’ve seen the evidence of God’s love overflow onto these pages.<br/><br/> So take a moment, grab your favorite drink, and spend some time with these pieces. And as you dwell, may He fill your cup and nourish you with His precious living water.<br/><br/> 
                        Yours in Christ,<br/> 
                        Catherine Tian & Olivia Hu
                    </div>
                </div>
                <div className={styles.articlesContainer}>
                    {articles && articles.map((article: any) => (
                        <IssueCard key={null} article={article}></IssueCard>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
)};