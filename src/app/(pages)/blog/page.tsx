import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/app/components/footer'
import BlogCard from '@/app/(templates)/blog-card'

const articles = [
    {
        title: "a bench",
        genre: "POEM",
        img: "https://firebasestorage.googleapis.com/v0/b/agora-ca31b.appspot.com/o/Piece%20Title%20Cards%2FBlog%2Fa_bench.jpeg?alt=media&token=09e1c89b-63a7-458e-b9cc-c92f130e02dc",
        slug: "blog/a-bench",
        date: "06.19.2024",
    },
    {
        title: "An Anthology of Joy and Thought Vol. 1",
        genre: "POEM",
        img: "/blog/an-anthology/3.jpg",
        slug: "blog/an-anthology",
        date: "Summer 2024",
    }
]

export default async function Blog() {
    return (
    <main className={styles.main}>
        <h1 className={styles.h1}>Blog</h1>
        <div className={styles.allcards}>
            {articles.map((article:any, i:number) => (
                <BlogCard key={i} article={article} />
            ))}
        </div>
    </main>
    )
}