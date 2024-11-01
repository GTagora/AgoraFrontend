"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Footer from '../../components/footer'

function socialButton(name:string, img:string, alt:string, link:string) {
    return (<a href={link} target="blank">
            <div className={styles['social-buttons']}>
                    <Image 
                        className={styles['social-images']}
                        src={img}
                        width={43}
                        height={43}
                        alt={alt}
                    />
                <p className={styles['social-text']}>{name}</p>
            </div>
    </a>)
}

export default function Contact() {

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Contact</h1>
                    <p>For inquiries regarding content, submissions, or otherwise, <br /> email us at <a href="mailto:gatechagora@gmail.com"><u>gatechagora@gmail.com.</u></a></p>
                </div>

                <div className={styles['contact-email-container']}>
                
                    <div className={styles['contact-email-container-text']}>
                        <p className={styles['paragraph-spacing']}>If you’d like to get involved with <i>Agora</i>, please enter your email below and we’ll be in touch!</p>             
                    </div>

                    <div className={styles['contact-email-container-input']}>
                        <input 
                            className={styles['email-input']}
                            type="text"
                            placeholder="email@example.com"
                        />
                    </div>  
                    <div className={styles['email-button']}>Submit</div>
                </div>
                    
                <div className={styles.header}> <h1> Our Socials</h1></div>
                <div className={styles['social-container']}>
                    {socialButton("Instagram", "/socials/instagram.png", "instagram icon", "https://www.instagram.com/gt.agora/")}
                    {socialButton("Facebook", "/socials/facebook.png", "facebook icon", "https://www.facebook.com/groups/1308653603346414/")}
                    {socialButton("Slack", "/socials/slack.png", "slack icon", "https://join.slack.com/t/agorageorgiat-eig5741/shared_invite/zt-237p10exi-TnyKfsr78OXD_FJ_vIFG7Q")}
                    {socialButton("Email", "/socials/email.png", "email icon", "mailto:gatechagora@gmail.com")}
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>

        </div>
    )
}
