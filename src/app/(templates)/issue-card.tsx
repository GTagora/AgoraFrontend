import styles from './issue-card.module.css'
import Link from 'next/link'
import Image from 'next/image'


interface IssueCard {
    article: { [key:string]: any };
}

export default function IssueCard({article}: IssueCard) {
    const image = article.image;
    const title = article.title;
    const genre = article.genre.toUpperCase();
    const link = article.link;
    return (
        <Link href={link}>
        <div className={styles.card}>
            <div className={styles.text}>
                <h2>{title}</h2>
                <h3>{genre}</h3>
                {/* <p className={styles.preview} dangerouslySetInnerHTML={{ __html: text.replace(/\\n/g, '\n')}}></p> */}
            </div>
            <Image 
                className={styles.cardImage}
                src={image ? image : '/test.jpg'}
                width={400}
                height={400}
                alt='article image'/>
        </div>
        </Link>
)}