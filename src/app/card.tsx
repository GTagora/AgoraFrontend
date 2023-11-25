
import styles from './card.module.css'
import Image from 'next/image'
import articles from '../JournalEntries.json'
import pic from './test_gif.gif'


// export default function Card({title = "title", genre = "GENRE", image=0}) { //take in an image id
export default function Card({id=0}) {
    const title = articles[id].Title
    const genre = articles[id]['Content Type']
    return (
        <div className={styles.card}>
            {/* if there is no article id, then display a default color block */}
            {/* { (id == null) && <div className={styles.cardColor} />}  */}
            { (id != null) &&
                <Image 
                    className={styles.cardImage}
                    //src={articles[id].Image as any}
                    src={pic}
                    width={400}
                    height={400}
                    alt='article image'/>
            }
            <p>{genre}</p>
            <h2>{title}</h2>
        </div>
)}