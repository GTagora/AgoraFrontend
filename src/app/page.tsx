import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Subtitle from "./components/subtitle";
import Card from "./(templates)/card";
import Link from "next/link";
import IssuuButton from "./components/issuuButton";

const Mobile = () => {
	return (
		<div className={styles.main}>
			<div className={styles.heading}>
				<Image
					className={styles.logo}
					src="/logo-black.png"
					width={100}
					height={100}
					alt="Agora logo"
				/>
				<h1>AGORA</h1>
				<h2>Georgia Tech’s Journal of Christian Thought</h2>
			</div>
            <div className={styles.container}>
                <div className={styles.notice}>
                    <h3>Hi there!</h3>
                    <p className={styles.noticeText}>Our website is currently undergoing maintenance. Please visit our blog or view our print publications via the links below. Thank you for your patience &amp; continued support!</p>
                    <Button link="/blog" />
                    <IssuuButton link="https://issuu.com/gtagora/docs/agora_f24" />
                </div>
            </div>
			<Footer />
		</div>
	);
};

export default function Home() {
	return (
		<>
			<div className={styles.mobileView}>
				<Mobile />
			</div>
			<div className={styles.desk}>
				<div className={styles.heading}>
					<Subtitle />
				</div>
				<div>
					<Link href="#latest-issue">
						<Image
							className={styles.arrow}
							src="/arrow.png"
							width={25}
							height={25}
							alt="arrow"
						/>
					</Link>
				</div>
				<a id="latest-issue" href="#latest-issue">
				</a>
                <div className={styles.container}>
                    <div className={styles.notice}>
                        <h3>Hi there!</h3>
                        <p className={styles.noticeText}>Our website is currently undergoing maintenance. Please visit our blog or view our print publications via the links below. Thank you for your patience &amp; continued support!</p>
                        <Button link="/blog" />
                        <IssuuButton link="https://issuu.com/gtagora/docs/agora_f24" />
                    </div>
                </div>
				<Footer />
			</div>
		</>
	);
}

function Button({ link }:any) {
    return (
        <Link href={link} target="_blank">
            <div className={styles.button}>Our blog &#x2192;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </Link>
    );
}
