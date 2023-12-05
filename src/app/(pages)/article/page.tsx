import styles from './article.module.css'
import Link from 'next/link'
import Image from 'next/image'
import articles from '../../../JournalEntries.json'
import Footer from '@/app/components/footer'
import pic from 'public/pantheon.jpg'

export default function Article({id=-1}) {
    const title = id === -1 ? "Article Title" : articles[id].Title
    const issue = id === -1 ? "" : articles[id].Issue
    const author = id === -1 ? "author name" : articles[id].Author
    const date = "12.08.23";
    const link = id === -1 ? "" : "/" + issue.toLowerCase().replaceAll(" ", "-") + "/" + title.toLowerCase().replaceAll(" ", "-").replace(/[^a-zA-Z0-9 -]/g,"")
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum tellus blandit urna placerat, a cursus lorem aliquet. Ut tincidunt vitae neque vel pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce feugiat, nisl viverra semper egestas, erat libero consequat mauris, blandit vulputate nisi ipsum eget massa. Cras ac vehicula ligula, vel elementum odio. Quisque vel mauris vitae orci mattis condimentum. Sed quis dignissim ligula. Donec et augue facilisis, condimentum quam vitae, pharetra quam. Nunc vel enim a mauris pretium commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eros mi, fringilla ut dolor eu, placerat sagittis erat. Nam mauris felis, auctor eu odio sed, bibendum ullamcorper enim. Donec in elit id sapien dapibus consequat. Suspendisse tellus eros, efficitur eget gravida id, molestie ac neque. Ut accumsan efficitur purus, id molestie magna maximus vitae. Donec imperdiet vel mauris in luctus. Curabitur eleifend velit vitae urna accumsan, sed aliquet massa faucibus. Donec maximus leo in lacus consectetur, et imperdiet dui vestibulum. Sed tempus dui et sapien ultrices pulvinar. Pellentesque convallis mauris sit amet turpis laoreet porttitor. Integer mollis ultrices justo vitae euismod. Nullam placerat leo eget magna tempus, vel fringilla sem feugiat. Vivamus quis lorem id mauris convallis efficitur. Ut a vehicula lorem, at egestas dui. Donec et felis vitae justo vehicula eleifend nec ac nisl. In laoreet gravida magna, ac cursus arcu interdum sit amet. Ut a ornare ligula."

    return (
        <div>
            <div className={styles.main}>
                <h1 className={styles.title}>{title}</h1>
                <Image 
                    className={styles.image}
                    src={pic}
                    width={600}
                    height={600}
                    alt='article image'/>
                <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
                <h3 className={styles.date}>{date}</h3>
                <p className={styles.text}>{text}</p>
            </div>
            {/* <div className={styles.footer}><Footer/></div> */}
        </div>
)}