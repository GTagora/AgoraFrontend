import Image from 'next/image'
import styles from './page.module.css'
import Footer from '../../components/footer'
import Header from '@/app/components/header'

export default function About() {
    return (
    <main className={styles.main}>
        <div className={styles.container}>

            <h1 className={styles.page}>Mission Statement & Rationale</h1>
            
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
                
                    <h1 className={styles['section-header']}> Why &quot;Agora&quot; </h1>

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

                    <Image className={styles.logo} src={"/logo-footer.png"} width={300} height={90} alt="logo"/>

                    <p className={styles['section-text']}> Agora’s logo depicts the letters “A” and “g” as symbols; these can be interpreted as both quotation marks and commas. <br /> <br />
                        Like the Ancient Greek marketplace, Agora seeks to be a place of exchange. For us, this means the exchange of ideas, thoughts, and expressions regarding our faith; a dialogue. While we may write in pertinence to experiences from our own life, we ultimately seek to glorify God; His Word, through our words. Our logo depicted by quotation marks aims to convey these beliefs. <br /><br />
                        Whereas other punctuation marks may indicate the end of a sentence, a comma implies a continuation; Agora does not seek to be a publication that preaches ultimatums, but rather provides the start of an ongoing conversation with our audience.
                    </p>
                </div>

            </div>

            <div className={styles['acvf-container']}>
                <h1 className={styles['section-header']}> Augustine Collective & Veritas Forum </h1>

                <p className={styles['section-text']}>
                    <ul>
                        <li>The Augustine Collective (AC) is a network of student-lead, Christian thought journals on university campuses across the US and the UK. The AC operates under the Veritas Forum, a nonprofit organization that seeks to foster faith exploration and the pursuit of truth surrounding the ideas that shape our lives.</li>
                        <li>Agora is one of over thirty member journals within the AC network. While each journal shares the overarching vision of the AC, Agora platforms the unique creative perspectives from the Christian dialogue on Georgia Tech’s campus.</li>
                    </ul>
                </p>
            </div>



        </div>
        <Footer />
    </main>
    )
}
