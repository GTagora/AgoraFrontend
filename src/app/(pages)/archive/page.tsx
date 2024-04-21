
import styles from './page.module.css'
import { GetStaticPaths } from 'next'
import Link from 'next/link'
import Footer from '@/app/components/footer'

interface Issues {
  slug: string;
}

async function getIssues() {
  const res = await fetch(`https://agora-backend-sxd6.onrender.com/getIssues`, { cache: 'no-store' });
  const data = res.json();

  return data;
}

const IssueCard = ({ issue } : any ) => {
    const semester = issue.Semester;
    const theme = issue.Theme;
    const slug = issue.Slug;
    return (<Link href={slug}>
        <div className={styles.card}>
            <p>{theme}</p>
            <p>{semester}</p>
        </div>
    </Link>);
}

export default async function Archive({ params }: any) {
    const issues = await getIssues();
    
    return (
    <main className={styles.main}>
        <h1>Past Issues</h1>
        <div>{issues.map((issue:any, i:number) => (
            <IssueCard issue={issues[i]} />))}
        </div>
        <div className={styles.footer}>
            <Footer />
        </div>
    </main>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const issues = await getIssues();
    const paths = issues.map((issue: any) => ({
        params: { slug: issue.Slug.toLowerCase().replaceAll(" ", "-") }
    }));
  
    return { paths, fallback: true };
  };

  
{/* 
OLD ARCHIVE PAGE IMPLEMENTATION
<div className={styles.container}>
    <h1>Archive page</h1>
    <p>No archive yet, as this is our debut issue!</p>
    <p>Check back in next semester!</p>
    <Link href="/#fall-23-release">
        <div className={styles.button}>&#x2192;&nbsp;&nbsp;&nbsp;&nbsp;Fall &apos;23 Release</div>
    </Link>
</div> */}