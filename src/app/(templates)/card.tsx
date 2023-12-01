
import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import articles from '../../JournalEntries.json'
import pic from 'public/test.jpg'


// export default function Card({title = "title", genre = "GENRE", image=0}) { //take in an image id
export default function Card({id=-1}) {
    const title = id === -1 ? "Article Title" : articles[id].Title
    const genre = id === -1 ? "GENRE" : articles[id]['Content Type'].toUpperCase()
    return (
        <div className={styles.card}>
            {/* if there is no article id, then display a default color block */}
            { (id === -1) && <div className={styles.cardColor} />} 
            { (id != -1) &&
                <Image 
                    className={styles.cardImage}
                    // src={articles[id].Image as any}
                    src={pic}
                    width={400}
                    height={400}
                    alt='article image'/>
            }
            <div className={styles.text}>
                <h2>{title}</h2>
                <h3>{genre}</h3>
            </div>
        </div>
)}