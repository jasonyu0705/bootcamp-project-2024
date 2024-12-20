import React, { useState } from "react";
import style from "./newComment.module.css";
 
type commentData={
    user:string;
    comment:string;
}

export default function newComment({ slug,onSubmit}:{slug:string,onSubmit: ()=> void}) {
//   const [comments, setComments] = useState([]);
//   const [formData, setFormData] = useState({ user: "", comment: "" });
//   const [error, setError] = useState("");


    // creting constant for the new comment data and the status of the form input
    const[formData, setformData] = useState<commentData>({
        user: "",
        comment:"",
    })
    const[status,setStatus]=useState("");
    // only reacts to chenges in input or textarea
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setformData((form)=>({ ...form, [name]: value }))
  };
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

                                // if (!formData.user || !formData.comment) {
                                //   setError("Please fill out all fields.");
                                //   return;
                                // }
    // both comment and user have inputs
    try {//                                this may change 
      const response = await fetch(`/api/blog/${slug}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add comment.");
      }
      onSubmit();
                                    //   const newComment = await response.json();
                                    //   setComments((prevComments) => [...prevComments, newComment]);
                                    //   setFormData({ user: "", comment: "" }); // Clear the form
                                    //   setError("");
    setStatus("submitted")
    setformData({user:"",comment:""})
    } catch (error) {
      console.log("error",error)
      setStatus("Comment failed")
    }
  };

  return (
    <div>
      <h2>Leave a Comment!</h2>
      <form className="formInfo" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">Name:</label>
          <input type="text" id="user" name="user" value={formData.user} onChange={handleInputChange} placeholder="Your name" required/>
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" name="comment" value={formData.comment} onChange={handleInputChange} placeholder="Write your comment" required/>
        </div>
        {/* {Error && <p style={{ color: "red" }}>{Error}</p>} */}
        <button type="submit">Submit Comment</button>
      </form>
        {status && <p className={style.status}></p>}
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
    </div>
  );
}
