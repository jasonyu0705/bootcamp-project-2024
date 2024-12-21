"use client";
import React, { useState } from "react";
import style from "./newCom.module.css";
//type definitions
type commentData = {
  user: string;
  comment: string;
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
    comment: "",
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
    // if (!formData.user || !formData.comment) {
    //   setError("Please fill out all fields.");
    //   return;
    // }
    // both comment and user have inputs
    console.log("entering try")
    try {
      //                                this may change
      const response = await fetch(`${slug}`, {
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
      setformData({ user: "", comment: "" });
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
          <label htmlFor="user">Name:</label>
          <input className={style.user} type="text" id="user" name="user" value={formData.user} onChange={handleInputChange} placeholder="Your name" required/>
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
          className={style.comment}
            id="comment"
            name="comment"
            value={formData.comment}
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



        {/* {Error && <p style={{ color: "red" }}>{Error}</p>} */}
  {/* <div>
        <h3>Comments</h3>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <strong>{comment.user}</strong> at{" "}
                {new Date(comment.time).toLocaleString()}:
                <p>{comment.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div> */}