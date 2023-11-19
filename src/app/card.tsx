
import styles from './page.module.css'


export default function Card({title = "title", genre = "genre"}) {
    return (
        <div className={styles.card}>
            <p>{genre}</p>
            <h2>{title}</h2>
        </div>
)}