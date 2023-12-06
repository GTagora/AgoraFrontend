import Image from 'next/image'
import styles from './page.module.css'
import Footer from '../../components/footer'
import Header from '@/app/components/header'

import logo from "../../../../public/logo-white-full.png";

export default function About() {
    return (
    <main className={styles.main}>
    <Header />
        <div className={styles.container}>
            
            <div className={styles['mission-container']}>
                
                <h1 className={styles['section-header']}> Mission Statement </h1>
                <p className={styles['section-text']}> Agora seeks to <b> glorify God </b> as an ecumenical forum and journal of Christian thought. By creating and curating pieces that reflect the vibrant beauty of God’s nature, we offer a collective Christian perspective to the campus dialogue. </p>

            </div>

            <div className={styles['vision-container']}> 

                <h1 className={styles['section-header']}>
                    Vision Statement </h1>

                <p className={styles['section-text']}>
                <ul>
                    <li>
                    We hope to provide a space for Christians to navigate curiosities, doubts, or moments of awe in their relationship with God
                    </li>
                    <li>
                    In writing or dialogue, Agora promotes solidarity amongst Christians across ministries and denominations.
                    </li>
                    <li>
                        Ultimately, through our journal, we strive to bring aspects of God’s beauty into focus through various creative mediums.
                    </li>
                    </ul>
                </p>    

            </div>

            <div className={styles['why-and-logo-container']}>
                
                <div className={styles['why-container']}> 
                
                    <h1 className={styles['section-header']}> Why "Agora" </h1>

                    <p className={styles['section-text']}> <b> agora </b> (n): a gathering place, a market </p>

                    <p className={styles['section-text']}> In ancient Greece, an agora (ἀγορά) was a public open space used for assemblies and markets. By naming our journal after this historical artifact, we hope to realize a few of its qualities:
                    
                    <ul>
                        <li>A gathering place for dialogue, reflection, composition, and fellowship</li>
                        <li>Instead of goods and produce, ideas and spiritual food</li>
                        <li>Refreshment & spiritual sustenance </li>
                    </ul>

                     </p>

                </div>

                <div className={styles['logo-container']}>

                    <h1 className={styles['section-header']}> Our Logo </h1>

                    <Image src={logo} width={300} height={112} alt="logo"/>

                    <p className={styles['section-text']}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

            </div>

            <div className={styles['acvf-container']}>
                <h1 className={styles['section-header']}> Augustine Collective & Veritas Forum </h1>

                <p className={styles['section-text']}>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    </ul>
                </p>
            </div>



        </div>
        <Footer />
    </main>
    )
}
