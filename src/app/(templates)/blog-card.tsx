import styles from './blog-card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import pic from 'public/test.jpg'


interface BlogCard {
    article: { [key: string]: any };
}

export default function BlogCard({ article }: BlogCard) {
    const image = article.Image
    const title = article.Title
    const genre = String(article.Content_Type).toUpperCase()
    const issue = article.Issue
    const link = issue.toLowerCase().replaceAll(" ", "-") + "/" + title.toLowerCase().replaceAll(" ", "-").replace(/[^a-zA-Z0-9 -]/g, "")
    return (
        <Link href={link}>
            <div className={styles.card}>
                {/* if there is no article id, then display a default color block */}
                {!title && <div className={styles.cardColor} />}
                {<Image
                    className={styles.cardImage}
                    src={image ? image : pic}
                    width={400}
                    height={400}
                    alt='article image' />
                }
                <div className={styles.text}> {/* hbox containing text */}
                    <h2>{title}</h2>
                </div>
                <h3>{genre}</h3>
                <h4><i>02.20.24</i></h4>
            </div>
        </Link>
    )
}