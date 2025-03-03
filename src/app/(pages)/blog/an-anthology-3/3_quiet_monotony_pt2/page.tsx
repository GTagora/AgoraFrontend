import styles from "./article.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<Link href="/blog/an-anthology-3" className={styles.breadcrumb}>
						An Anthology of Joy and Thought Vol. 3
					</Link>
					<Image
						className={styles.image}
						src="/blog/an-anthology-3/quiet monotony pt.2.jpg"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>quiet monotony pt.2</h1>
					<div className={styles.text}>
						{`in the morning i awake
						for the days tasks do i ready
						read, work, eat, sleep
						repeat

						in the eyes of the world
						it is a boring life
						none is “extravagant”
						none is “exciting”

						“where is the travel?”
						“where is the fun?”
						“where is the pleasure?”
						they say

						they call it a boring life
						i would argue it is a quiet monotonous one
						its beauty lies in the inbetween
						the gentle reminders of His love and provision

						as i awake, He shows me His mercy:
						to live and to breathe
						to stand in awe of His presence
						to behold His beauty in His creation

						as i read, He speaks to me:
						He whispers of His love
						He comforts me in my distress
						He aligns my will with His

						as i work, He dwells with me:
						for what do i work?
						for what more purpose can we have?
						than to glorify the One most high

						as i eat, He communes with me:
						the body i consumed
						the blood i drank
						He reminds me that He is always with me

						as i sleep, You cover me:
						You still my heart
						You still my mind
						You alone provide me rest

						you may ask, “is this life?”
						“where is the extravagance?”
						“where is the excitement?”
						well, i say to you

						every day is a new day of His mercies
						His love and grace to enchant us once again
						to see how He wants to bless His servant
						to see how God will use this life

						what else could be more extravagant?
						what else could be more exciting?
						to be blessed by the Creator of it all
						to be used for His perfect will

						yes, i say it is a quiet monotonous one
						but rather it is the most fulfilling one
						this life was not meant for worldly pleasures
						but to alone serve the most holy and perfect One

						in quiet monotony is the most joy found
						for it is a reminder of Your mercy every day,
						the price You paid on that cross,
						and the stillness and peace i can rest in because of it

						silence the noises of the world, Lord
						hide me in Your love, Lord
						for when i am quiet, i am heard
						and when i am hidden, i am seen`}
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-3/2_quiet_monotony"
							className={styles.href}
						>
							&lt;&nbsp; Previous
						</Link>
						<Link href="/blog/an-anthology-3/4" className={styles.href}>
							Next &nbsp;&gt;
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
