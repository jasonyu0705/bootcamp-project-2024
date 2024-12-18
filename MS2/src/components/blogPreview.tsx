import React from 'react';
import style from './blogPreview.module.css'
import Link from "next/link";
 import { Blog } from "../database/blogSchema"; // importing the type/interface we defined earlier
//import Blogimp, { Blog } from "@/database/blogSchema";

export default function BlogPreview(props: Blog)  {
  //const blogs: Blog[] = await getBlogs();
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    
    <div className={style.info}>
      {/* <h2 key={blogs.slug}></h2> */}
 <Link className={style.title} href={`/blogs/${props.slug}`}> {props.title} </Link>
    
   
    

       <h3 className={style.date}> {new Date(props.date).toLocaleDateString()}</h3>
        <div>
        <img className={style.photo}
              src={props.image} 
              alt={props.image_alt || 'Blog Image'} />
            <p className={style.description}>{props.description}</p>
          </div>
	  </div>

  );
}
