import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header className={style.navbar} >
      <h1 className={style.page_title}> Jason's Personal Website </h1>
      <nav className={style.nav_list}>
        {/* We'll use Link from now on instead of <a></a>
			      Links are just Next.js wrapper arounds <a> elements anyways
         */}
        <Link href="/" >Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact" >Contact Me</Link>
        <Link href="/portfolio" >portfolio</Link>

				{/* More Links ... */}
      </nav>
    </header>
  );
}