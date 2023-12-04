import styles from './staff.module.css'
import Image from 'next/image';
import Footer from '@/app/components/footer'

type MemberProps= {
    name: string;
    roles: string[];
    img: string;
}

function Member( { name, roles, img}:MemberProps) {
    const roleString = roles.join(', ');
    return (
        <div className={styles.memberCard}>
            <Image
                className={styles.headshot}
                src={img}
                width={75}
                height={75}
                alt={name + ' headshot'}
            />
            <h1>{name}</h1>
            <h2>{roleString}</h2>
        </div>
    )
}

export default function Staff() {
    let roles=["EIC", "Writer"]
    return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.pageHeader}>Staff & Contributors</h1>

        <h2 className={styles.sectionHeader}>Executive Staff</h2>
        <div className={styles.section}>
            <Member name="Chris Moon" roles={["EIC", "Writer"]} img=""/>
        </div>

        <h2 className={styles.sectionHeader}>Contributing Staff</h2>
        <div className={styles.section}>
            <Member name="Chris Moon" roles={roles} img=""/>
        </div>

        <h2 className={styles.sectionHeader}>Web Development Team</h2>
        <div className={styles.section}>
            <Member name="Chris Moon" roles={roles} img=""/>
        </div>

      </div>
      <Footer />
    </main>
)}