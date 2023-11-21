
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/app/components/header'

export default function Contact() {
    return (
        <main className={styles.main}>
        <Header />
        <div className={styles['contact-header']}>
            <h1>Contact</h1>
        </div>

        {/* the first big green rectangle */}
        <div className={styles['contact-email-container']}>
        
            <div className={styles['contact-email-container-text']}>
                <p className={styles['paragraph-spacing']}>Hi there!</p>
                <p className={styles['paragraph-spacing']}>If you’d like to get involved with Agora, please enter your email below and we’ll be in touch!</p>             
            </div>

            <div className={styles['contact-email-container-input']}>
                <input 
                    className={styles['email-input']}
                    type="text"
                    placeholder="email@example.com"
                />
            </div>

            <div className={styles['contact-email-container-button']}> 
                <button className={styles['email-button']}>
                    Submit
                </button>
            </div>            
                
        </div>

        <div className={styles['connect-container']}>

            <div className={styles['connect-header']}> <h1>Connect</h1> </div>
            <div className={styles['connect-text']}>
                <p>For inquiries regarding content, submissions, or otherwise, email us at gatechagora@gmail.com.</p>
            </div>

        </div>

        <div className={styles['social-container']}>

            <div className={styles['social-header']}> 
                <h1> Our Socials</h1>
            </div>

            <a href="https://www.instagram.com/gt.agora/" target="blank">
                <div className={styles['social-buttons']}>
                    <Image 
                        className={styles['social-images']}
                        src="/socials/instagram.png"
                        width={50}
                        height={50}
                        alt='instagram icon'
                    />
                    <p className={styles['social-text']}>Instagram</p>
                </div>
            </a>
            <a href="https://www.facebook.com/groups/1308653603346414/" target="blank">
                <div className={styles['social-buttons']}>
                    <Image 
                        className={styles['social-images']}
                        src="/socials/facebook.png"
                        width={50}
                        height={50}
                        alt='facebook icon'
                    />
                    <p className={styles['social-text']}>Facebook</p>
                </div>
            </a>
            <a href="https://join.slack.com/t/agorageorgiat-eig5741/shared_invite/zt-237p10exi-TnyKfsr78OXD_FJ_vIFG7Q" target="blank">
                <div className={styles['social-buttons']}>
                    <Image 
                        className={styles['social-images']}
                        src="/socials/slack.png"
                        width={50}
                        height={50}
                        alt='slack icon'
                    />
                    <p className={styles['social-text']}>Slack</p>
                </div>
            </a>
            <a href="mailto:gatechagora@gmail.com" target="blank">
                <div className={styles['social-buttons']}>
                    <Image 
                        className={styles['social-images']}
                        src="/socials/email.png"
                        width={50}
                        height={50}
                        alt='email icon'
                    />
                    <p className={styles['social-text']}>Email</p>
                </div>
            </a>

        </div>


        </main>
    )
}
