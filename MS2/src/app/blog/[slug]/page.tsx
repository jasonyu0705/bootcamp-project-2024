
//import { Blog } from "@/database/blogSchema";
import style from './blg.module.css'
import Comment from "@/components/blogComp/comment";
import NewComment from '../../../components/blogComp/newComment';
//import { useState } from 'react';


// type Props = {
//     params: { slug: string }
// }
type Props = {
	params:Promise<{
		slug: string
	}>;
}

async function getBlog(slug: string) {
	try {
		// This fetches the blog from an api endpoint that would GET the blog
		const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
			cache: "no-store",	
		})
		// console.log(res)
		// This checks that the GET request was successful
		if (!res.ok) { 
			throw new Error("Failed to fetch blog");
		}
		return res.json();
	} catch (err: unknown) {
		// console.log(`error: ${err}`);
		return null;
		// `` are a special way of allowing JS inside a string
		// Instead of "error: " + err, we can just do the above
		// it is simular to formated strings in python --> f"{err}"
	}
}
//passing in object --> not explicitly defining it in function call
//							parameter        object skeleton
export default async function Blog({params}: Props) {
	const slug = (await params).slug;
    const blog = await getBlog(slug);

	if(!blog){
		 console.log("hello")
		return(
		  <div>
			<h1 className="pageTitle">404 - Blog Not Found</h1>
		  </div>
		);
	  }
	if(blog){
		
	return(

        <div className={style.info}>
			<div className={style.blogContent}>
			<div>	
       <h3 className={style.title}>{blog.title} </h3>
       <h3 className={style.date}> {new Date(blog.date).toLocaleDateString()}</h3>
        <img className={style.photo}
              src={blog.image} 
              alt={blog.image_alt || 'Blog Image'} />
            
          </div>
			<p className={style.description}>{blog.description}</p>


          <div className={style.comment}>
			<p>Comment Section</p>
            {blog.comments.map((comment: any, index:any) => (
	                <Comment key={index} comment={comment} />
	            ))}
          </div>


			</div>
	
		<NewComment slug={slug}/>		  
	  </div>
	
    );
	}
	 return console.log("hi");
}