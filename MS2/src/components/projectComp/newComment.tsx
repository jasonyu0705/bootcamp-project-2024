"use client";
import React, { useState } from "react";
import style from "./newCom.module.css";
//type definitions
type commentData = {
  user: string;
  content: string;
};

type Props = {
  title: string;
};

export default function NewComment({ title }: Props) {
  //   const [error, setError] = useState("");
  // creting constant for the new comment data and the status of the form input
  //console.log("entering the new comment function")
  const [formData, setformData] = useState<commentData>({
    user: "",
    content: "",
  });


  

  const [status, setStatus] = useState("");//2eqwrg
  // only reacts to chenges in input or textarea
  console.log('status    ',status)
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setformData((form) => ({ ...form, [name]: value }))
  };
  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("in handle submit")
    // both comment and user have inputs
    console.log("entering try")
    //console.log("slug       ",title)
    try {
      //                                this may change
      
      const response = await fetch(`http://localhost:3000/api/projects/${title}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log('response', response)

      console.log('FORM DATA                   ', formData)
      if (!response.ok) {
        throw new Error("Failed to add comment.");
      }

      //setStatus("submitted");
      setformData({ user: "", content: "" });
    } catch (error) {
      console.log("error", error);
      setStatus("Comment failed");
    }
  };



  return (

    <div className= {style.commentSection}>
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
