
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

            <div className={styles['social-buttons']}>
                <img className={styles['social-images']} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Minecraft_missing_texture_block.svg/32px-Minecraft_missing_texture_block.svg.png"></img>
                <p className={styles['social-text']}>Instagram</p>
            </div>
            <div className={styles['social-buttons']}>
            <img className={styles['social-images']} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Minecraft_missing_texture_block.svg/32px-Minecraft_missing_texture_block.svg.png"></img>
                <p className={styles['social-text']}>Facebook</p>
            </div>
            <div className={styles['social-buttons']}>
            <img className={styles['social-images']} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Minecraft_missing_texture_block.svg/32px-Minecraft_missing_texture_block.svg.png"></img>
                <p className={styles['social-text']}>Email</p>
            </div>

        </div>


        </main>
    )
}
