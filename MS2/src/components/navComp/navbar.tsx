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
      <div className={style.title_bar}>
          <img className={style.image} src='/logo.jpg' alt="portrait" style={{ width: '40px', height: 'auto' }}/>
          <h1 className={style.page_title}> Jason&apos;s Personal Website </h1>
          </div>
      <nav className={style.nav_list}>
        {/* We'll use Link from now on instead of <a></a>
			      Links are just Next.js wrapper arounds <a> elements anyways
         */}
        <Link className={style.link} href="/" >Home</Link>
        <Link className={style.link} href="/blog">Blog</Link>
        <Link className={style.link} href="/resume">Resume</Link>
        <Link className={style.link} href="/contact" >Contact Me</Link>
        <Link className={style.link} href="/portfolio" >Portfolio</Link>

				{/* More Links ... */}
      </nav>
    </header>
  );
}