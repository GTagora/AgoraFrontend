
import styles from './card.module.css'
import Image from 'next/image'


export default function Card({title = "title", genre = "GENRE", image=0}) { //take in an image id
    return (
        <div className={styles.card}>
            {/* if there is no image id, then display a default color block */}
            { (image == 0) && <div className={styles.cardColor} />} 
            {/* { (image != 0) &&
                <Image 
                    className={styles.cardImage}
                    src=""
                    width={400}
                    height={400}
                    alt='article image'/>
            } */}
            <p>{genre}</p>
            <h2>{title}</h2>
        </div>
)}