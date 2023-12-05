import styles from './staff.module.css'
import Image from 'next/image';
import Footer from '@/app/components/footer'
import defaultimg from 'public/npc.png'

type MemberProps= {
    name: string;
    roles: string[];
    img: string; //TYPE DEPENDS ON HOW IMG ID IS READ FROM DATABASE
}

function Member( { name, roles, img}:MemberProps) {
    const roleString = roles.join(', ').toUpperCase();
    return (
        <div className={styles.memberCard}>
            <Image
                className={styles.headshot}
                src={img === "" ? defaultimg : img}
                width={450}
                height={450}
                alt={name + ' headshot'}
            />
            <h1>{name}</h1>
            <h2>{roleString}</h2>
        </div>
    )
}

export default function Staff() {
    return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.pageHeader}>Staff & Contributors</h1>

        <h2 className={styles.sectionHeader}>Executive Staff</h2>
        <div className={styles.section}>
            <Member name="Chris Moon" roles={["Editor-In-Chief"]} img=""/>
            <Member name="Olivia Hu" roles={["Editor-In-Chief"]} img=""/>
        </div>

        <h2 className={styles.sectionHeader}>Contributing Staff</h2>
        <div className={styles.section}>
            <Member name="Alex Hom" roles={["Writer"]} img=""/>
            <Member name="Abel Chen" roles={["Writer", "Editor", "Web Development"]} img=""/>
            <Member name="Brandon Choi" roles={["Editor"]} img=""/>
            <Member name="Esther Shen" roles={["Writer", "Editor", "Web Development"]} img=""/>
        </div>

      </div>
      <Footer />
    </main>
)}