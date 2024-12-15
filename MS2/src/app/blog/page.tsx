import styles from "./page.module.css";
//import blogs from '@/app/static/blogData'
import BlogPreview from '@/components/blogPreview';
import connectDB from "@/database/db";
import Blogimp from "@/database/blogSchema";
import { useEffect, useState } from "react";
export default function Blog() {
  // const [blogs, setBlogs]=useState([{}])

  // useEffect(() => {
  //   const fn = async () => {
  //     return await getBlogs
  //   }

  //   setBlogs(fn)
  // }, [])



  return (
      <div>
        <h1 className={styles.pageTitle}>Blogs</h1>
        <div className={styles.blogContainer}>

            {blogs.map(blog =>
               <BlogPreview {...blog} key={blog.title} />
            )}
        </div>
        </div>
  );
}

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blogimp.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}
