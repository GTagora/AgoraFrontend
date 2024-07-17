import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
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
        <h1 className={styles.h1}>Blog</h1>
        <div className={styles.allcards}>
            {/* {articles && articles.map(async (article:any, i:number) => (
                <BlogCard key={i} article={article}></BlogCard>
            ))} */}
            <Link href={"blog/a-bench"}>
                <div className={styles.card}>
                    <Image 
                        className={styles.cardImage}
                        src="https://firebasestorage.googleapis.com/v0/b/agora-ca31b.appspot.com/o/Piece%20Title%20Cards%2FBlog%2Fa_bench.jpeg?alt=media&token=09e1c89b-63a7-458e-b9cc-c92f130e02dc"
                        width={400}
                        height={400}
                        alt='article image'/>
                    <div className={styles.box}>
                        <div className={styles.hbox}>
                            <h2>a bench</h2><h3>POEM</h3>
                        </div>
                        <h4>06.19.2024</h4>
                    </div>
                    {/* <p className={styles.preview} dangerouslySetInnerHTML={{ __html: styles.text.replace(/\\n/g, '\n')}}></p> */}
                    
                </div>
            </Link>
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