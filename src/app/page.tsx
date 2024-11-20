import Image from 'next/image'
import styles from './page.module.css'
import Footer from './components/footer'
import Subtitle from './components/subtitle'
import Letter from './components/letter'
import Card from './(templates)/card'
import Link from 'next/link'
import IssuuButton from './components/issuuButton'

// UPDATE FOR EACH ISSUE
const letter = "<p>It’s a joy and honor to bring you this third issue of <i>Agora</i>, enveloped and sealed in His gracious love for all of us. Each semester, we are astounded by God’s merciful provision of contributors, talents, time, and resources; the very journal you’re holding is a miracle in itself, and we invite you to join us in celebrating His goodness in these pages!<br/><br/>We’d like to introduce this installation’s theme, <i>Water</i>. It’s well known that water is essential to life: it sustains our individual beings, our ecosystems, our planet. It’s so fundamental that we often forget its necessity; instead, it’s one of many undercurrents that support our interests, obligations, and priorities. It’s only in seasons of drought that we realize how precious water is, how life-giving, and how frail we become without proper hydration. <br/><br/>We sometimes fall into a similar rhythm in our relationship with Christ, especially amidst the busyness and distraction of this world. Water, then, in its many forms can emulate our relationship with the Father, through both gentle streams and violent hurricanes. This semester, our writers meditated on water in its multidimensionality, especially as it has reflected God’s character and presence in their lives. Through their witness and His grace, we’ve seen the evidence of God’s love overflow onto these pages.<br/><br/>So take a moment, grab your favorite drink, and spend some time with these pieces. And as you dwell, may He fill your cup and nourish you with His precious living water.<br/><br/>Yours in Christ,<br /> Catherine &amp; Via<br /><i>Co-Editors-in-Chief</i></p>";

function Mobile( { articles }:{ articles:Array<any> } ) {
    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <Image
                    className={styles.logo}
                    src="/logo-black.png"
                    width={100}
                    height={100}
                    alt='Agora logo' />
                <h1>AGORA</h1>
                <h2>Georgia Tech’s Journal of Christian Thought</h2>
            </div>

            <div className={styles.container}>
                <hr />
                <h1>Water</h1>
                <h4>FALL &apos;24 | VOL. 2 NO. 1</h4>
                <Letter letter={letter}/>
            </div>
            <div className={styles.articlesContainer}>
                {articles && articles.map(async (article: any) => (
                            <Card key={null} article={article}></Card>
                        ))}
            </div>
            <Footer />
        </div>
)}

interface Home {
  articles: Array<any>;
}

async function getArticles() {
  const res = await fetch(`https://agora-backend-sxd6.onrender.com/getJournalEntries`, { cache: 'force-cache' });
  const data = res.json();
  return data;
}

export default async function Home() {
    let articles = await getArticles()
    articles = articles.filter(function(article:any) {
        return article.Theme === "Water";
    });
        return (
        <>
            <div className={styles.mobileView} ><Mobile articles={articles}/></div>
            <div className={styles.desk}>

                <div className={styles.heading}>
                    <Subtitle />
                </div>
                <div>
                    <Link href="#latest-issue">
                        <Image
                                className={styles.arrow}
                                src="/arrow.png"
                                width={25}
                                height={25}
                                alt='arrow'
                            />
                    </Link>
                </div>
                <a id="latest-issue" />
                <div className={styles.container}>
                    <h1>Water</h1>
                    <h4>FALL &apos;24 | VOL. 2 NO. 1</h4>

                    <div className={styles.hbox}>
                        <div className={styles.feature} >
                            <Image
                                className={styles.img}
                                src="/covers/f24.jpg"
                                width={6000}
                                height={4000}
                                alt='Issue cover'
                            />
                        </div>
                        <div className={styles.letter}>
                            <h2>Letter from the EIC</h2>
                            <p dangerouslySetInnerHTML={{ __html: letter.replace(/\\n/g, '\n')}} />
                        </div>
                    </div>
                    <div className={styles.issuu}><IssuuButton link="https://issuu.com/gtagora/docs/agora_s24"/></div>
                    <div className={styles.articlesContainer}>
                        {articles && articles.map(async (article: any) => (
                                <Card key={null} article={article}></Card>
                            ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
)}
    


