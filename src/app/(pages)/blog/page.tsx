import styles from './page.module.css'
import Link from 'next/link'
import Footer from '@/app/components/footer'
import BlogCard from '@/app/(templates)/blog-card'

async function getArticles() {
  const res = await fetch(`https://agora-backend-sxd6.onrender.com/getJournalEntries`, { cache: 'force-cache' });
  const data = res.json();
  return data;
}

export default async function Blog() {
    const articles = await getArticles();
    return (
    <main className={styles.main}>
      <h1>Blog</h1>
      {/* COMING SOON BOX
      <div className={styles.container}>
        <p>Content coming Spring &apos;24!</p>
        <Link href="/contact">
            <div className={styles.button}>&#x2192;&nbsp;&nbsp;&nbsp;&nbsp;stay up to date</div>
        </Link>
      </div> */}
      <div >
          {articles && articles.map(async (article: any) => (
                      <BlogCard key={null} article={article}></BlogCard>
                  ))}
      </div>
    </main>
    )
}
