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
				src="/blog/an-anthology-3/intermission.jpg"
				width={600}
				height={600}
				alt="article image"
			/>
			<p className={styles.credit}>Image: Stephen Noh</p>
			<h1 className={styles.title}>Intermission</h1>
			<div className={styles.text}>
				the stage quiets<br/>
				the lights brighten<br/>
				the curtains roll across the stage<br/>
				the first act has hit its final page<br/>
				<br/>
				an ocean of chatter fades in the distance<br/>
				sitting still, i reflect<br/>
				lost, i don’t know what to reap<br/>
				looking down, i weep<br/>
				<br/>
				“look forward”, a gentle voice says<br/>
				in the quiet, i sit<br/>
				in the stillness, i pray<br/>
				back and forth, the curtains sway<br/>
				<br/>
				the Author sits next to me<br/>
				“what comes next?”, i ask<br/>
				“do you trust Me?<br/>
				It’s time to wait and see”<br/>
				<br/>
				glimpses of the scene poke through,<br/>
				the Author is setting the stage<br/>
				fragments of the story roll<br/>
				all pieces, short of a whole<br/>
				<br/>
				a peek of what is to come<br/>
				He is doing something good<br/>
				joy rushes me like a flood<br/>
				peace flows through my blood<br/>
				<br/>
				to understand only after the story has been told<br/>
				to trust the One who sits above<br/>
				a reality hard to digest<br/>
				to be expressed in a time of a rest<br/>
				<br/>
				the lights dim down<br/>
				the stage is set<br/>
				the intermission comes to a close<br/>
				the second act, only the Author knows<br/>
				<br/>
				this act, the start of many to come<br/>
				what mysteries lie on that stage?<br/>
				in my story, the Author aims to dwell<br/>
				let us see what story He will tell…<br/>
			</div>

			<div className={styles.buttons}>
				<Link
				href="/blog/an-anthology-3/4_a-merciful-God-in-a-harsh-wilderness"
				className={styles.href}
				>
				&lt;&nbsp; Previous
				</Link>
				<Link
				href="/blog/an-anthology-3/6_honor-and-faith"
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
