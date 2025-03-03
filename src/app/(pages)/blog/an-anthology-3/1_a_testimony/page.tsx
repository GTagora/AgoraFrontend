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
						src="/blog/an-anthology-3/a testimony.jpg"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>a testimony</h1>
					<div className={styles.text}>
						Dear Stephen,
						<br />
						<br />I remember clearly the days where every day felt like it
						wasn’t worth living. It’s been more than 18 months since I’ve been
						able to say I was truly set free from depression. Quite honestly,
						it’s still surreal to be able to say that. I wonder if you’d ever
						believe it. It was a long nine years, and I’m sure you couldn’t
						imagine that your friend would take his life that next Thanksgiving
						or the three to come after. Six deaths is a lot to see before 20. To
						get to this point wasn’t easy but by the grace of God, He redeemed
						us. You always told yourself that life would probably be better if
						you weren’t here. That is so far from the truth. You’d be surprised
						how many lives the Lord used you to reach. People you’d never
						imagine. Stories you never would have imagined you could be a part
						of.
						<br />
						<br />
						So. How was it, you ask? Seven years later, God has redeemed it all.
						The pain, the depth of loneliness you felt. Would you believe me if
						I told you that God has placed so many brothers in your life?
						Brothers who would do anything to support you. Brothers who would
						stick with you thick and thin. They’d make you laugh, they’d make
						you reflect, and they’d help you grow. I bet you’d be surprised. You
						never imagined anyone wanted to really be your friend.
						<br />
						<br />
						I’m still friends with Pastor Josh and I still get to occasionally
						share a meal with him. Pastor Timothy is doing well in _ (hidden for
						privacy), I heard. My mom said I might have an opportunity to visit
						him! His smile and gentle, “Hi, Stephen” every sunday has still
						stuck with me eight years later. In fact, God has blessed you with
						even more pastors who lovingly greet you, “Hello!” I bet you
						couldn’t fathom the crazy personalities some of these pastors have
						LOL.
						<br />
						<br />
						When I look back at our reflection, I’m honestly astonished by the
						hope you had. You had faith to fully believe that God placed you
						there even in the midst of that suffering. Honestly, eight years
						later, I’m struggling to believe that. It’s crazy how turbulent this
						journey is. I’m glad to hear how much hope you had though. God
						really listened to your prayers as you clung onto that hope. I can
						say that confidently.
						<br />
						<br />
						I’m not sure how you’d feel about this but the idea of becoming a
						pastor no longer crosses my mind. I’m surprised you even felt called
						to ministry that early on. Are you sure you had a sound mind and
						were thinking correctly? Either way, I’m sure you’d be happy to hear
						that your heart for missions hasn’t changed though. In fact, I think
						the call to ministry has shaped more into a call to missions. Does
						that excite you? It scares me.
						<br />
						<br />
						It’s still crazy to think about how big I dreamed back then and how
						much hope I had. What’s even more crazy is that I can laugh and see
						how God has grown me since I was in your shoes. To have that
						childlike hope you had is something that I’m working on again. I
						hope I can dream big like you again soon. I’m glad to see that it
						was something I carried with me at some point, that gives me hope.
						<br />
						<br />
						Are you surprised to hear what happened in seven years? I sure am.
						God’s done a lot, that’s for sure. Who even knows what crazy things
						God will do in these next seven? I guess that’s something for the
						28-year old me to find out. Maybe if I hit that age I can look back
						at this again and see another glimpse of growth…
						<br />
						<br />
						Till we meet again,
						<br />
						snoh
					</div>

					<div className={styles.buttons}>
						<Link href="/blog/an-anthology-3" className={styles.href}>
							&lt;&nbsp; Contents
						</Link>
						<Link
							href="/blog/an-anthology-3/2_quiet_monotony"
							className={styles.href}
						>
							Next &nbsp;&gt;
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
