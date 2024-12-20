
//import { Blog } from "@/database/blogSchema";
import style from './blg.module.css'
import Comment from "@/components/blogComp/comment";


type Props = {
    params: { slug: string }
}
async function getBlog(slug: string) {
	try {
		// This fetches the blog from an api endpoint that would GET the blog
		const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
			cache: "no-store",	
		})
		// console.log(res)

		// http://localhost:3000/blog/${slug}
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

export default async function Blog({params: { slug }}: Props) {
	// console.log('beginning');
    const blog = await getBlog(slug);
	
	if(!blog){
		// console.log("hello")
		return(
		  <div>
			<h1 className="pageTitle">404 - Blog Not Found</h1>
		  </div>
		);
	  }
	if(blog){
		// console.log("end blog", blog);
		// console.log("end comments", blog.comments);

	return(
        <div className={style.info}>
			
       <h3 className={style.title}>{blog.title} </h3>
       <h3 className={style.date}> {new Date(blog.date).toLocaleDateString()}</h3>
        <div>
        <img className={style.photo}
              src={blog.image} 
              alt={blog.image_alt || 'Blog Image'} />
            <p className={style.description}>{blog.description}</p>
          </div>
          <div className={style.comment}>
            {blog.comments.map((comment: any, index:any) => (
	                <Comment key={index} comment={comment} />
	            ))}
          </div>
	  </div>
	
    );
	}
	// return console.log("hi");
}