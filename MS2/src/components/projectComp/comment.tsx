import React from "react";
import { IComment } from "@/database/projectSchema";
import style from "../blogComp/comment.module.css";

{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
	/*
		Implementation up to you...
	*/
    return new Date(time).toDateString();
}

export default function Comment({ comment }: CommentProps) {
    return (
    <div className={style.commentContainer}>
      <h3 className={style.commentUser}>{comment.user}</h3>
      <p className={style.commentContent}>{comment.content}</p>
      <p className={style.commentTime}>{parseCommentTime(comment.time)}</p>
    </div>

    );
}