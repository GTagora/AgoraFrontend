import Image from 'next/image'
import styles from './page.module.css'
import Footer from './components/footer'
import Subtitle from './components/subtitle'
import Card from './(templates)/card'

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
    <main className={styles.main}>

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
    </main>

  )
}
