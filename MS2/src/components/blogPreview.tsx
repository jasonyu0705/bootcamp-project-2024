import React from 'react';
import style from './blogPreview.module.css'
//import type { Blog } from "@/typings/blog"
import connectDB from "@/database/db";

import { Blog } from "../app/static/blogData"; // importing the type/interface we defined earlier


export default function BlogPreview(props: Blog)  {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.info}>
       <h3 className={style.title}> {props.title} </h3>
       <h3 className={style.date}> {props.date} </h3>
    <div>
    <img className={style.photo}
          src={props.image} 
          alt={props.imageAlt || 'Blog Image'} 

          
        />
        <p className={style.description}>{props.description}</p>

      </div>
	  </div>

  );
}
