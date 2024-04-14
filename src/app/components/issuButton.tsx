import Link from "next/link";
import styles from './issuButton.module.css'

export default  function IssuButton({ link }:any) {
    return (
        <Link href={link} target="_blank">
            <div className={styles.button}>Check out our digital print issue &#x2192;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </Link>
    );
}