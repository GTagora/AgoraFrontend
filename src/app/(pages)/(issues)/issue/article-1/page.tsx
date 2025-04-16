import styles from './page.module.css'
import Image from 'next/image'
import Footer from '@/app/components/footer'


export default async function Article() {
    const author = 'author name';
    const credit = 'Photo by someone';
    const title = 'Article 1';
    const date = 'Month 01, Year';

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    {/* <iframe className={styles.video} src='VIDEO LINK HERE'/> */}
                    <Image 
                    className={styles.image}
                    src='/issues/issue/test.png'
                    width={600}
                    height={600}
                    alt='article image'/>
                    <p className = {styles.credit}>{credit}</p>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
                    <h3 className={styles.date}>{date}</h3>
                    <div className={styles.text}>
                        {/* REPLACE TEXT HERE */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
)};
