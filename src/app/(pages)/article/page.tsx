import styles from './article.module.css'
import Link from 'next/link'
import Image from 'next/image'
import articles from '../../../JournalEntries.json'
import pic from 'public/test.jpg'

export default function Article({id=-1}) {
    const title = id === -1 ? "Article Title" : articles[id].Title
    const issue = id === -1 ? "" : articles[id].Issue
    const link = id === -1 ? "" : "/" + issue.toLowerCase().replaceAll(" ", "-") + "/" + title.toLowerCase().replaceAll(" ", "-").replace(/[^a-zA-Z0-9 -]/g,"")

    return (
        <div></div>
)}