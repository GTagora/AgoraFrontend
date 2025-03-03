import Image from "next/image";
import styles from "./page.module.css";
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
			<Footer />
		</div>
	);
};

export default async function Home() {
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
                    <div className="notice">
                        Hi there! Our website is currently undergoing maintenance.
                        <IssuuButton link="https://issuu.com/gtagora/docs/agora_f24" />
                    </div>
				</a>
				<Footer />
			</div>
		</>
	);
}
