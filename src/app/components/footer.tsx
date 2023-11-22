import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.css' // Import CSS file for styling
 
const Footer = () => {
    return (
        <div className={styles.box}>
            <div className={styles.column}>
                <Link href="/">
                    <Image
                        className={styles.logo}
                        src="/logo-black-footer.png"
                        width={350}
                        height={90}
                        alt='Agora logo'
                    />
                </Link>
                <div className={styles.socialRow}>
                    <img className={styles.socialImages} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Minecraft_missing_texture_block.svg/32px-Minecraft_missing_texture_block.svg.png"></img>
                    <img className={styles.socialImages} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Minecraft_missing_texture_block.svg/32px-Minecraft_missing_texture_block.svg.png"></img>
                    <img className={styles.socialImages} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Minecraft_missing_texture_block.svg/32px-Minecraft_missing_texture_block.svg.png"></img>
                </div>
            </div>
            <div className={styles.footerContainer}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <p className={styles.heading}>About</p>
                        <a className={styles.footerLink} href="about">
                            Mission Statement
                        </a>
                        <a className={styles.footerLink}  href="about">
                            Staff
                        </a>
                        <a className={styles.footerLink}  href="about">
                            Contributers
                        </a>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.heading}>Archive</p>
                        <a className={styles.footerLink} href="archive">
                            Fall '23
                        </a>
                        <a className={styles.footerLink}  href="archive">
                            Past Issues
                        </a>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.heading}>Contact</p>
                        <a className={styles.footerLink} href="contact">
                            Form
                        </a>
                        <a className={styles.footerLink}  href="contact">
                            Instagram
                        </a>
                        <a className={styles.footerLink}  href="contact">
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;