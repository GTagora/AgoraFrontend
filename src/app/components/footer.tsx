import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.css' // Import CSS file for styling

function socialButton(img:string, alt:string, link:string) {
    return (<a href={link} target="blank">
            <div className={styles['social-buttons']}>
                <Image 
                    className={styles['social-images']}
                    src={img}
                    width={34}
                    height={34}
                    alt={alt}
                />
            </div>
    </a>)
}

const Footer = () => {
    return (
        <div className={styles.box}>
            <div className={styles.column}>
                <Link href="/">
                    <Image
                        className={styles.logo}
                        src="/logo-footer.png"
                        width={205}
                        height={60}
                        alt='Agora logo'
                    />
                </Link>
                <div className={styles.socialRow}>
                    {socialButton("/socials/instagram.png", "instagram icon", "https://www.instagram.com/gt.agora/")}
                    {socialButton("/socials/facebook.png", "facebook icon", "https://www.facebook.com/groups/1308653603346414/")}
                    {socialButton("/socials/slack.png", "slack icon", "https://join.slack.com/t/agorageorgiat-eig5741/shared_invite/zt-237p10exi-TnyKfsr78OXD_FJ_vIFG7Q")}
                    {socialButton("/socials/email.png", "email icon", "mailto:gatechagora@gmail.com")}
                </div>
            </div>
            <div className={styles.footerContainer}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <a href="/about" className={styles.heading}>About</a>
                        <a className={styles.footerLink} href="/about">
                            Mission
                        </a>
                        <a className={styles.footerLink}  href="/about/staff">
                            Staff
                        </a>
                    </div>
                    <div className={styles.column}>
                        <a href="/archive" className={styles.heading}>Archive</a>
                        <a className={styles.footerLink} href="/#current-issue">
                            Spring &apos;24
                        </a>
                        <a className={styles.footerLink}  href="/archive">
                            Past Issues
                        </a>
                    </div>
                    <div className={styles.column}>
                        <a href="/contact" className={styles.heading}>Contact</a>
                        <a className={styles.footerLink}  href="https://linktr.ee/gtagora" target="_blank">
                            Linktree
                        </a>
                        <a className={styles.footerLink}  href="https://www.instagram.com/gt.agora/" target="_blank">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;