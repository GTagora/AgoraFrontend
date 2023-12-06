import Image from 'next/image'
import styles from './page.module.css'
import mobile from './mobile.module.css'
import Footer from './components/footer'
import Subtitle from './components/subtitle'
import Card from './(templates)/card'
import { isMobile } from 'react-device-detect';


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
                <h1>Fall '23 Release</h1>
                <div className={mobile.letter}>
                    <h2>Letter from the editors:</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                    <h5>With love, <br /> Chris & Via</h5>
                </div>
            </div>
            <div className={mobile.articlesContainer}>
                {articles && articles.map(async (article: any) => (
                        <Card article={article}></Card>
                ))}
            </div>

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
        return isMobile ? 
        <Mobile articles={articles}/> : (
        <div className={styles.main}>

            <div className={styles.heading}>
                <Subtitle />
            </div>

            <div className={styles.container}>
                <h1>Fall '23 Release</h1>

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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                        <h5>With love, <br /> Chris & Via</h5>
                    </div>
                </div>

                <div className={styles.articlesContainer}>
                    {articles && articles.map(async (article: any) => (
                            <Card article={article}></Card>
                        ))}
                </div>
            </div>
            <Footer />
        </div>
)}
    


