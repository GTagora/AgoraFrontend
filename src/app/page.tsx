import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { EB_Garamond, Playfair_Display_SC, Cormorant_Garamond } from '@next/font/google'

const eb_garamond = EB_Garamond( {
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-ebgaramond',
  display: 'swap'
})

const playfair = Playfair_Display_SC({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap'
})

export default function Home() {
  return (
    <html className={`${eb_garamond.variable} ${playfair.variable} ${cormorant.variable}`}>
  <main className={styles.main}>
        <div className={styles.heading}>
          <Image
            className={styles.logo}
            src="/logo-black-box.png"
            width={100}
            height={100}
            alt='Agora logo'
          />
          <h1>AGORA</h1>
          <h2>Georgia Tech’s Journal of Christian Thought</h2>
        </div>

        {/* <div className={styles.grid}>
          <Link href="/About" className={styles.card}>
            <h2>
              About <span>-&gt;</span>
            </h2>
            <p>Placeholder Text</p>
          </Link>

          <Link href="/Blog" className={styles.card}>
            <h2>
              Blog <span>-&gt;</span>
            </h2>
            <p>Placeholder Text</p>
          </Link>
        </div> */}
      </main>
    </html>
    
  )
}
