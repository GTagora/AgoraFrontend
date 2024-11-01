import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'


interface Card {
    article: { [key:string]: any };
}

export default function Card({article}: Card) {
    const image = article.Image
    const title = article.Title
    const genre = String(article.Content_Type).toUpperCase()
    const issue = article.Issue
    const link = issue.toLowerCase().replaceAll(" ", "-") + "/" + title.toLowerCase().replaceAll(" ", "-").replace(/[^a-zA-Z0-9 -]/g,"")
    return (
        <Link href={link}>
        <div className={styles.card}>
            {/* if there is no article id, then display a default color block */}
            {!title && <div className={styles.cardColor} />} 
            <Image 
                className={styles.cardImage}
                src={image ? image : '/test.jpg'}
                width={400}
                height={400}
                alt='article image'/>
            <div className={styles.text}> {/* hbox containing text */}
                <h2>{title}</h2>
                <h3>{genre}</h3>
            </div>
        </div>
        </Link>
)}