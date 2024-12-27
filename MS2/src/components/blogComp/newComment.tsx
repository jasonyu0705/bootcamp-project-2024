"use client";
import React, { useState} from "react";
import style from "./newCom.module.css";


//type definitions
type commentData = {
  user: string;
  content: string;
};

type Props = {
  slug: string; 
};

export default function NewComment({ slug }: Props) {
  //   const [error, setError] = useState("");
  // creting constant for the new comment data and the status of the form input
  //console.log("entering the new comment function")
  const [formData, setformData] = useState<commentData>({
    user: "",
    content: "",
  });


  
//test
  const [status, setStatus] = useState("");
  // only reacts to chenges in input or textarea

  console.log('status  1  ',status)
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setformData((form) => ({ ...form, [name]: value }))
  };
  
        // useEffect(()=>{
        //   Comment;
        //   console.log("use effect entered")
        // }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("in handle submit")
    // both comment and user have inputs
    console.log("entering try")
   // console.log("slug       ",slug)
    try {
      //                                this may change
      
      const response = await fetch(`https://bootcamp-project-2024-zeta.vercel.app/api/blogs/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log('response', response)

      console.log('FORM DATA                   ', formData)
      if (!response.ok) {
        throw new Error("Failed to add comment.");
      }

      setStatus("submitted");
      setformData({ user: "", content: "" });
      console.log('status  2  ',status)


    } catch (error) {
      console.log("error", error);
      setStatus("Comment failed");
    }
  };






  return (

    <div className= {style.commentSec}>
      <h2>Leave a Comment!</h2>
      <form className="formInfo" onSubmit={handleSubmit}>
        <div>
          <label >Name:</label>
          <input className={style.user} type="text" id="user" name="user" value={formData.user} onChange={handleInputChange} placeholder="Your name" required/>
        </div>
        <div>
          <label >Comment:</label>
          <textarea
          className={style.comment}
            id="comment"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Write your comment"
            required
          />
        </div>

        <button type="submit">Submit Comment</button>
      </form>
      {status && <p className={style.status}></p>}
    
    </div>
  );
}
