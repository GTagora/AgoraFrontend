import styles from './staff.module.css'
import Image from 'next/image';
import Footer from '@/app/components/footer'
import defaultimg from 'public/npc.png'

type MemberProps= {
    name: string;
    roles: string[];
    img: string; //TYPE DEPENDS ON HOW IMG ID IS READ FROM DATABASE
}

async function getStaff() {
    const res = await fetch(`https://agora-backend-sxd6.onrender.com/contacts/getStaff`, { cache: 'force-cache' });
    const data = res.json();
    return data;
}

function Member( { name, roles, img}:MemberProps) {
    const roleString = roles.join(', ');
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

export default async function Staff() {
    const staff = await getStaff();
    return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.pageHeader}>Staff & Contributors</h1>

        <h2 className={styles.sectionHeader}>Executive Staff</h2>
        <div className={styles.section}>
            {staff && staff.map(async (person: any) => {
                    if (person.Active && person.Title === "Chief Staff") {
                        return <Member key={null} name={person.Name} roles={person.Roles} img={person.Image}/>
                    }
                })}
        </div>

        <h2 className={styles.sectionHeader}>Contributing Staff</h2>
        <div className={styles.section}>
            {staff && staff.map(async (person: any) => {
                    if (person.Active && person.Title === "Contributor") {
                        return <Member key={null} name={person.Name} roles={person.Roles} img={person.Image}/>
                    }
                })}
        </div>

      </div>
      <Footer />
    </main>
)}