import styles from './issue-card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import pic from 'public/test.jpg'


interface IssueCard {
    article: { [key:string]: any };
}

export default function IssueCard({article}: IssueCard) {
    const image = article.Image
    const title = article.Title
    const genre = String(article.Content_Type).toUpperCase()
    const text = article.Text
    const issue = article.Issue
    const link = issue.toLowerCase().replaceAll(" ", "-") + "/" + title.toLowerCase().replaceAll(" ", "-").replace(/[^a-zA-Z0-9 -]/g,"")
    return (
        <Link href={link}>
        <div className={styles.card}>
            <div className={styles.text}>
                <h2>{title}</h2>
                <h3>{genre}</h3>
                <p className={styles.preview} dangerouslySetInnerHTML={{ __html: text.replace(/\\n/g, '\n')}}></p>
            </div>
            <Image 
                className={styles.cardImage}
                src={image ? image : pic}
                width={400}
                height={400}
                alt='article image'/>
        </div>
        </Link>
)}