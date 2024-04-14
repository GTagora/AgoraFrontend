import Link from "next/link";
import styles from './issuButton.module.css'

export default  function IssuButton({ link }:any) {
    return (
        <div className={styles.issu}>
            <Link href={link} target="_blank">
                <div className={styles.button}>check out our print issue online! &#x2192;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </Link>
        </div>
    );
}