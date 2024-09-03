import styles from './article.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                <Link href="/blog/an-anthology" className={styles.breadcrumb}>An Anthology of Joy and Thought Vol. 1</Link>
                    <Image 
                        className={styles.image}
                        src='/blog/an-anthology/11.jpg'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>Image: Stephen Noh</p>
                    <h1 className={styles.title}>two sparrows</h1>
                    <div className={styles.text}>
                        As I sat here in a park in Boston, I saw these two sparrows hopping around and scavenging for food together. I thought back to some of my favorite passages. Psalm 84, Matthew 6:25-34, and Matthew 10:26-33.
                        <br/><br/>
                        Birds are some of my favorite animals. I mean it’s so interesting in how they’re able to fly and all the strange habits they have from migration to regurgitation of food lol. Every spring this family of sparrows would come to our backyard and start the next generation of their family in the nest right above our backyard door. They started off as pests to us, but as the years continued on and as they returned every year, I grew quite fond of them and loved watching the hatchlings grow. I looked forward to the day I wouldn’t see them sitting there in the morning because it meant they had outgrown their nest. Since leaving for college, I’m not sure if they still return but I look forward to the upcoming spring and hopefully seeing them once again.
                        <br/><br/>
                        Anyways, back to the point. I saw these two lovely sparrows together and I was reminded of when Jesus speaks.
                        <br/><br/>
                        “Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on. Is not life more than food, and the body more than clothing? Look at the birds of the air: they neither sow nor reap nor gather into barns, and yet your heavenly Father feeds them. Are you not of more value than they? - Matthew 6:25-26 ESV
                        <br/><br/>
                        “And do not fear those who kill the body but cannot kill the soul. Rather fear him who can destroy both soul and body in hell. Are not two sparrows sold for a penny? And not one of them will fall to the ground apart from your Father. But even the hairs of your head are all numbered. Fear not, therefore; you are of more value than many sparrows.” - Matthew 10:28-31 ESV
                        <br/><br/>
                        The context of these passages are kind of different, with Matthew 6 addressing our worries and anxieties of the world and Matthew 10 addressing to have no fear of the enemy for even God covers all. To me, these messages very much coincide in this season of life.
                        <br/><br/>
                        I’ve felt a lot of anxiety and worry going into this young adult season. Working full time and wondering where my career will go. I don’t enjoy my job and it's been hard to come to terms with and trust that this is ultimately not where I belong. I think the enemy has been feeding me so many lies and trying to increase my fear as I set out into what I feel God has called me to.
                        <br/><br/>
                        When I think about those two sparrows together, I’m reminded that God is always watching over me. Just like me watching over these birds, He is watching over me. Making sure that I have what I need and guiding me in His glory. For if even the sparrows, the most “insignificant” and “weak” of all birds, are seen as loved and worthy, how much more does He love us? Those who He created in His <b><i>own</i></b> image. It’s a constant wrestle for me and a constant reminder of His goodness and His provision. I’ll conclude this little reflection with my favorite psalm, psalm 84. Verse 3 touches beautifully on the sparrow and how much He provides for even the smallest and weakest of birds.

                        <br/><br/><br/>
                        <b>psalm 84</b><br/>
                    </div>
                    <div className={styles.psalm}>
                        1 How lovely is your dwelling place, <br/>
                        &emsp;&emsp;O Lord of hosts! <br/>
                        2 My soul longs, yes, faints <br/>
                        &emsp;&emsp;for the courts of the Lord; <br/>
                        my heart and flesh sing for joy <br/>
                        &emsp;&emsp;to the living God. <br/>
                        3 Even the sparrow finds a home, <br/>
                        &emsp;&emsp;and the swallow a nest for herself, <br/>
                        &emsp;&emsp;where she may lay her young, <br/>
                        at your altars, O Lord of hosts, <br/>
                        &emsp;&emsp;my King and my God. <br/>
                        4 Blessed are those who dwell in your house, <br/>
                        &emsp;&emsp;ever singing your praise! Selah <br/>
                        5 Blessed are those whose strength is in you, <br/>
                        &emsp;&emsp;in whose heart are the highways to Zion. <br/>
                        6 As they go through the Valley of Baca <br/>
                        &emsp;&emsp;they make it a place of springs; <br/>
                        &emsp;&emsp;the early rain also covers it with pools. <br/>
                        7 They go from strength to strength; <br/>
                        &emsp;&emsp;each one appears before God in Zion. <br/>
                        8 O Lord God of hosts, hear my prayer; <br/>
                        &emsp;&emsp;give ear, O God of Jacob! Selah <br/>
                        9 Behold our shield, O God; <br/>
                        &emsp;&emsp;look on the face of your anointed! <br/>
                        10 For a day in your courts is better <br/>
                        &emsp;&emsp;than a thousand elsewhere. <br/>
                        I would rather be a doorkeeper in the house of my God <br/>
                        &emsp;&emsp;than dwell in the tents of wickedness. <br/>
                        11 For the Lord God is a sun and shield; <br/>
                        &emsp;&emsp;the Lord bestows favor and honor. <br/>
                        No good thing does he withhold <br/>
                        &emsp;&emsp;from those who walk uprightly. <br/>
                        12 O Lord of hosts, <br/>
                        &emsp;&emsp;blessed is the one who trusts in you! <br/>

                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/blog/an-anthology" className={styles.href}>&lt;&nbsp; Contents</Link>
                    <Link href="/blog/an-anthology/12" className={styles.href}>Next &nbsp;&gt;</Link>
                </div>
            </div>
        </div>
)};