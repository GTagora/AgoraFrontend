import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/app/components/footer'
import BlogCard from '@/app/(templates)/blog-card'

const articles = [
    {
        title: "a bench",
        genre: "POEM",
        img: '/blog/a-bench/a_bench.jpg',
        slug: "blog/a-bench",
        date: "06.19.2024",
    },
    {
        title: "An Anthology of Joy and Thought Vol. 1",
        genre: "POEM",
        img: "/blog/an-anthology/3.jpg",
        slug: "blog/an-anthology",
        date: "Summer 2024",
    },
    {
        title: "An Anthology of Joy and Thought Vol. 2",
        genre: "POEM",
        img: "/blog/an-anthology-2/3.jpg",
        slug: "blog/an-anthology-2",
        date: "Fall 2024",
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