import styles from './article.module.css'
import { GetStaticPaths } from 'next'
import Image from 'next/image'
import Footer from '@/app/components/footer'

interface Articles {
    article: { [key:string]: any };
}

async function getBlogArticles() {
    const res = await fetch(`https://agora-backend-sxd6.onrender.com/getBlogEntries`, { cache: 'no-store' });
    const data = res.json();
  
    return data;
}

export default async function BlogArticle({ params }: any) {
    const articles = await getBlogArticles()
    const slug = "blog/" + params.article;
    const article = articles.find((a: any) => a.Slug === slug);
    const author = String(article.Author)
    const image = article.Image;
    const title = article.Title
    const date = article.Date
    const text = article.Text
    const video = article.Video
    // const audio = [{
    //     title: article.Title,
    //     artist: String(article.Author),
    //     color: '#E5ECE7',
    //     image: article.Image,
    //     audioSrc: article.Audio
    // }]

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    {video ? <iframe className={styles.video} src={video}/> :
                        image == "" ? "" : 
                            <Image 
                            className={styles.image}
                            src={image}
                            width={600}
                            height={600}
                            alt='article image'/> }
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
                    <h3 className={styles.date}>{date}</h3>
                    <div className={styles.text} dangerouslySetInnerHTML={{ __html: text.replace(/\\n/g, '\n')}}></div>
                </div>
            </div>
            <Footer />
        </div>
)};

export const getStaticPaths: GetStaticPaths = async () => {
    const articles = await getBlogArticles();
    const paths = articles.map((article: any) => ({
        params: { article: article.Title.toLowerCase().replaceAll(" ", "-").replace(/[^a-zA-Z0-9 -]/g,"").toString(),
                  issue: article.Issue.toLowerCase(), }
    }));
  
    return { paths, fallback: true };
  };