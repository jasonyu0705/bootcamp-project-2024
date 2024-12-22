import styles from "./page.module.css";
import BlogPreview from "@/components/blogComp/blogPreview";
import connectDB from "@/database/db";
import Blogimp, { Blog } from "@/database/blogSchema";
import React from "react";

export default async function Blog_Home() {
  const blogs: Blog[] = await getBlogs();
  return (
    <div>
      <h1 className={styles.pageTitle}>Blogs</h1>
      <div className={styles.blogContainer}>
        {/* {blogs.map(blog =>
               <BlogPreview {...(blog as any)._doc} key={blog.title} />
            )} */}

        {blogs.map((blog, index) => (
          <div key={index} className={styles.blogPreview}>
            <BlogPreview
              title={blog.title}
              date={blog.date}
              slug={blog.slug}
              description={blog.description}
              image={blog.image}
              image_alt={blog.image_alt}
              comments={blog.comments}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blogimp.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    console.log(err);
    return [];
  }
}
