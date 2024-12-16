import React from 'react';
import style from './blogPreview.module.css'
import { Blog } from "../database/blogSchema"; // importing the type/interface we defined earlier


export default function BlogPreview(props: Blog)  {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    
    <div className={style.info}>
       <h3 className={style.title}> {props.title} </h3>
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