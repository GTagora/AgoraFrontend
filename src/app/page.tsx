import Image from 'next/image'
import styles from './page.module.css'
import Footer from './components/footer'
import Subtitle from './components/subtitle'
import Letter from './components/letter'
import Card from './(templates)/card'
import Link from 'next/link'
import IssuuButton from './components/issuuButton'


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
                <h1>Cycles</h1>
                <h4>SPRING &apos;24 | VOL. 1 NO. 2</h4>
                <Letter/>
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
        return article.Theme === "Cycles";
    });
        return (
        <>
            <div className={styles.mobileView} ><Mobile articles={articles}/></div>
            <div className={styles.desk}>

                <div className={styles.heading}>
                    <Subtitle />
                </div>

                <a id="latest-issue" />
                <div className={styles.container}>
                    <h1>Cycles</h1>
                    <h4>SPRING &apos;24 | VOL. 1 NO. 2</h4>

                    <div className={styles.hbox}>
                        <div className={styles.feature} >
                            <Image
                                className={styles.img}
                                src="/s24.jpg"
                                width={6000}
                                height={4000}
                                alt='Issue cover'
                            />
                        </div>
                        <div className={styles.letter}>
                            <h2>Letter from the EIC</h2>
                            <p>Dear Reader, <br/><br/>
                            What a blessing it is to bring you this second issue of <i>Agora</i>! I thank God that you&apos;re here, however it is that you&apos;ve happened upon this journal. And whether He is a stranger or an old friend, just know that He sits beside you as you flip through this issue on Cycles.<br/><br/>
                            We all experience this world in a certain rhythm, as a life of constant novelty and unpredictability would be impossible to comprehend. So our lives are benchmarked by these patterns, which characterize the natural ebb and flow of the human experience: daily habits, transformation, the swell of seasons, in nature and in life. It follows that God speaks through these cycles as He shapes us, grows us, and brings us back to Him.<br/><br/>
                            This semester, our writers reflected on this theme and now offer you their take on Cycles, in hurt or condemnation, in relationships, in iterations of sin, repentance, and restoration. This writing process, though arduous, was a revelation of God&apos;s provision and a gift of fellowship, and I hope its fruit is as much a blessing to you as it was to us.<br/><br/>
                            And so, dear Reader, I invite you to take a breath, dwell here, and find nourishment in these reflections, knowing He is here with you.<br/><br/>
                            Happy reading, until we meet face to face.<br/><br/>
                            Yours in Chris,<br /> Via<br /><i>Editor-in-Chief</i>
                            </p>
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
    


