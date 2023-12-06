import styles from './article.module.css'
import { GetStaticPaths, GenerateStaticParams } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Footer from '@/app/components/footer'
import pic from 'public/test.jpg'

interface Articles {
    article: { [key:string]: any };
}

async function getArticles() {
    const res = await fetch(`https://agora-backend-sxd6.onrender.com/getJournalEntries`, { cache: 'no-store' });
    const data = res.json();
  
    return data;
}

export default async function Article({ params }: any) {
    const articles = await getArticles()
    const slug = params.issue + "/" + params.article
    const article = articles.find((a: any) => a.Slug === slug);
    const author = String(article.Author)
    const image = article.Image
    const title = article.Title
    const date = article.Date
    const text = article.Text

    return (
        <div>
            <div className={styles.main}>
                <Image 
                    className={styles.image}
                    src={image ? image : pic}
                    width={600}
                    height={600}
                    alt='article image'/>
                <h1 className={styles.title}>{title}</h1>
                <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
                <h3 className={styles.date}>{date}</h3>
                <div className={styles.text}>{text.replace(/\\n/g, '\n')}</div>
            </div>
            {/* <div className={styles.footer}><Footer/></div> */}
        </div>
)};

export const getStaticPaths: GetStaticPaths = async () => {
    const articles = await getArticles();
    const paths = articles.map((article: any) => ({
        params: { article: article.Title.toLowerCase().replaceAll(" ", "-").replace(/[^a-zA-Z0-9 -]/g,"").toString(),
                  issue: article.Issue.toLowerCase().replaceAll(" ", "-")
                }
    }));
  
    return { paths, fallback: true };
  };