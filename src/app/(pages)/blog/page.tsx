import styles from './page.module.css'
import Link from 'next/link'
import Footer from '@/app/components/footer'
import BlogCard from '@/app/(templates)/blog-card'

async function getBlogArticles() {
    const res = await fetch(`https://agora-backend-sxd6.onrender.com/getBlogEntries`, { cache: 'force-cache' });
    const data = res.json();
    return data;
}

export default async function Blog() {
    const articles = await getBlogArticles();
    return (
    <main className={styles.main}>
        <h1>Blog</h1>
        <div className={styles.allcards}>
            {articles && articles.map(async (article: any) => (
                <BlogCard key={null} article={article}></BlogCard>
            ))}
        </div>
    </main>
    )
}


{/* COMING SOON BOX
<div className={styles.comingsoon}>
    <h1>Blog</h1>
    <p>Content coming summer &apos;24!</p><br/>
    <p>The blog features pieces outside the scope of semesterly issue themes and are published intermittently throughout the year.</p>
    <Link href="/contact">
        <div className={styles.button}>&#x2192;&nbsp;&nbsp;&nbsp;&nbsp;stay notified</div>
    </Link>
</div>  */}

{/* CONTENT 
<main className={styles.main}>
    <h1>Blog</h1>
    <div className={styles.allcards}>
        {articles && articles.map(async (article: any) => (
            <BlogCard key={null} article={article}></BlogCard>
        ))}
    </div>
</main> */}