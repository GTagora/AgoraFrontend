import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.css' // Import CSS file for styling

function socialButton(img:string, alt:string, link:string) {
    return (<a href={link} target="blank">
            <div className={styles['social-buttons']}>
                <Image 
                    className={styles['social-images']}
                    src={img}
                    width={43}
                    height={43}
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
                        src="/logo-black-footer.png"
                        width={350}
                        height={90}
                        alt='Agora logo'
                    />
                </Link>
                <div className={styles.socialRow}>
                    {socialButton("/socials/instagram_white.png", "instagram icon", "https://www.instagram.com/gt.agora/")}
                    {socialButton("/socials/facebook_white.png", "facebook icon", "https://www.facebook.com/groups/1308653603346414/")}
                    {socialButton("/socials/slack_white.png", "slack icon", "https://join.slack.com/t/agorageorgiat-eig5741/shared_invite/zt-237p10exi-TnyKfsr78OXD_FJ_vIFG7Q")}
                    {socialButton("/socials/email_white.png", "email icon", "mailto:gatechagora@gmail.com")}
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