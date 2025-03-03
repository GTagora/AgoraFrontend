import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const contents = [
	{
		id: 1,
		title: "a testimony",
		href: "an-anthology-3/1_a_testimony",
	},
	{
		id: 2,
		title: "quiet monotony",
		href: "an-anthology-3/2_quiet_monotony",
	},
	{
		id: 3,
		title: "quiet monotony pt.2",
		href: "an-anthology-3/3_quiet_monotony_pt2",
	},
	{
		id: 4,
		title: "A merciful God in a harsh wilderness",
		href: "an-anthology-3/4_a-merciful-God-in-a-harsh-wilderness",
	},
	{
		id: 5,
		title: "intermission",
		href: "an-anthology-3/5_intermission",
	},
	{
		id: 6,
		title: "honor and faith",
		href: "an-anthology-3/6_honor-and-faith",
	},
	{
		id: 7,
		title: "my sin scares me",
		href: "an-anthology-3/7_my-sin-scares-me",
	},
	{
		id: 8,
		title: "ataraxia",
		href: "an-anthology-3/8_ataraxia",
	},
	{
		id: 9,
		title: "\"I\'m proud of you\"",
		href: "an-anthology-3/9_im-proud-of-you",
	},
];

export default function Page() {
	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<div className={styles.hbox}>
						<div className={styles.col}>
							<Image
								className={styles.image}
								src="/blog/an-anthology-3/intermission.jpg"
								width={600}
								height={600}
								alt="article image"
							/>
							<p className={styles.credit}>Image: Stephen Noh</p>
						</div>
						<div className={styles.col}>
							<h1 className={styles.title}>
								{" "}
								An Anthology of Joy and Thought Vol. 3
							</h1>
							<h2 className={styles.author}>By Stephen Noh</h2>
							<h3 className={styles.date}>SPRING 2025</h3>
						</div>
					</div>
					<h2 className={styles.subtitle}>Preface</h2>
					<p className={styles.text}>
						Hello, reader!
						<br />
						<br />
						It’s been a little bit, hasn’t it? Life has both picked up and
						slowed down a lot. I’ve been taking a lot more time to spend and
						grow alongside the community the Lord has blessed me with back home
						here in Dallas. I’ve also been spending a lot of time (and worry,
						haha) in what exactly I want to do with the next steps of my life.
						I’ve been so so blessed lately though as the Lord continues to
						reveal His goodness to me in the midst of all my weakness.
						<br />
						<br />
						To live a life with God is the aim of everything. It is all we need
						and should be doing on this earth, isn’t it? To pursue and desire
						worldly things will only bring about anxiety and worry. Yet, I find
						myself constantly wrestling with this and in a season of what I
						would call my desert. As a pastor put it for me, he sees me in my
						plowing season. I found myself many times desiring and seeking to
						plant or harvest, only for it to be revealed to me that it is time
						to break the ground. Plowing is important. You remove the weeds,
						remove the rocks, and break the ground. You ready it for the
						planting season to come. No one says that plowing is fun or brings
						joy though. It is difficult work. As you stand in the piercing sun
						and its heat, you ready your tool and heave it into the dirt. It’s
						hard. It’s grueling. It’s tiresome. But it’s necessary. It’s
						preparation. It’s growth. That is the desert.
						<br />
						<br />
						The desert is where God grows us the most. It is where Abraham was
						taught to trust in the Lord. Where the Isrealites wandered and were
						taught that all they need is the Lord. It is where David fled from
						Saul and had ultimate reliance on God. God places us in the
						wilderness, in the desert, to strip us away of all distractions and
						re-posture our lives as He repurposes and prepares us for our
						convergence point (If you’re curious what this means, feel free to
						ask :)). Anyways, I feel like life lately has felt kind of like
						this. Where I feel like I am being prepared, where I am called to
						pick up my plow and break ground. To do the hard work, even if I
						really really don’t want to do it. My planting and harvest has yet
						to come, but if the plowing has been this joyful, how much more when
						the harvest comes…
						<br />
						<br />
						So, here’s a little glimpse of my life lately. A story of my
						iniquity and the sin that God has been revealing to me. It is a
						reminder as He brings me to my knees and as I cry out to Him in full
						remembrance that I am so desperately in need of Him. This is a life
						with God. A realization, a need, a hunger, for the presence of the
						Lord in all that I do. Nobody's perfect, of course. To reach this
						realization and need 24/7 is something only Jesus did, but the
						Father calls us with open arms, constantly waiting as we cyclically
						come back to this epiphany. His yoke is easy after all (Matthew
						11:25-30). With that said, welcome reader, to the third volume of
						‘An Anthology of Joy and Thought’.
						<br />
						<br />
						With love and blessings,
						<br />
						Stephen
					</p>
					<br /> <br />
					<h2 className={styles.subtitle}>Contents</h2>
					<div className={styles.contentsContainer}>
						{contents.map((item) => (
							<Link key={item.id} href={item.href} className={styles.content}>
								{item.id}&nbsp;&nbsp;
								<p className={styles.href}>{item.title}</p>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
