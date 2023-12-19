import Image from 'next/image'
import styles from './page.module.css'
import mobile from './mobile.module.css'
import Footer from './components/footer'
import Subtitle from './components/subtitle'
import Letter from './components/letter'
import Card from './(templates)/card'


function Mobile( { articles }:{ articles:Array<any> } ) {
    return (
        <div className={mobile.main}>
            <div className={mobile.heading}>
                <Image
                    className={mobile.logo}
                    src="/logo-black.png"
                    width={100}
                    height={100}
                    alt='Agora logo' />
                <h1>AGORA</h1>
                <h2>Georgia Tech’s Journal of Christian Thought</h2>
            </div>

            <div className={mobile.container}>
                <hr />
                <h1>Fall &apos;23 Release</h1>
                <Letter />
            </div>
            <div className={mobile.articlesContainer}>
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
    const articles = await getArticles();
        return (
        <>
            <div className={styles.mobileView} ><Mobile articles={articles}/></div>
            <div className={styles.desk}>

                <div className={styles.heading}>
                    <Subtitle />
                </div>

                <a id="fall-23-release"></a>
                <div className={styles.container}>
                    <h1>Fall &apos;23 Release</h1>

                    <div className={styles.hbox}>
                        <div className={styles.feature} >
                            <Image
                                className={styles.img}
                                src="/pantheon.jpg"
                                width={6000}
                                height={4000}
                                alt='Agora logo'
                            />
                        </div>
                        <div className={styles.letter}>
                            <h2>Letter from the editors:</h2>
                            <p>Dear Reader, <br /><br />
                                We are so excited and joyful to invite you to read this debut issue of our journal, <i>Agora</i>. 
                                In this endeavor, we were reminded that even the mustard tree sprouts from the smallest of seeds; that&apos;s exactly how our journal started. God planted an idea and nurtured it through countless miracles to bring this journal to you today. A pipe dream, held in fragile human hands, was built on His strength as He provided the interest, facilities, talent, and resources that gave this vision physicality. Then He provided a name, <i>Agora</i>, a marketplace of nourishment and ideas, where each merchant&apos;s individual wares bring diversity to the market&apos;s offerings. Our journal embodies this image of harmony and communal provision by gathering each contributor&apos;s unique perspective through dialogue, reflection, composition, and fellowship founded upon our faith. <br /><br />

                                While we didn&apos;t establish an overarching theme for this issue, these first few months have been characterized by His provision and our gratitude. We started this journal to glorify God; His steadfast provision has magnified His presence and power on this campus. <br /><br />

                                And so, Reader, we invite you to step foot into our agora and partake in the fruits of His generosity. We hope and pray that our words and voices presented here will bring His glory into focus and spiritually nourish you.<br /><br />
                                </p>
                            <h5>With love, <br /> Chris & Via <i>Editors-in-Chief</i></h5>
                        </div>
                    </div>

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
    


