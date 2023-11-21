
import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function Card({title = "title", genre = "GENRE", image = "", preview = "" }) { //take in an image id
    return (
        <Link href="/" className={styles.card}>
            {/* if there is no image id, then display a default color block */}
            { (image === "") && <div className={styles.cardColor} />} 
            { (image !== "") &&
                <Image 
                    className={styles.cardImage}
                    src={image}
                    width={400}
                    height={400}
                    alt='article image'/>
            }
            <div className={styles.text}>
                <h2>{title}</h2>
                <h3>{genre}</h3>
            </div>
            { (preview !== "") && <p>{preview}</p> }
            <p className={styles.readmore} >Read more</p>
        </Link>
)}