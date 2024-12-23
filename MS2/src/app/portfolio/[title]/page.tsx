//import { Blog } from "@/database/blogSchema";
import style from "./page.module.css";
import Comment from "@/components/projectComp/comment";
import NewComment from "../../../components/projectComp/newComment";

type Props = {
  params: Promise<{
    title: string;
  }>;
};


type commentType = {
	user: string;
	content: string;
	time: Date;
}

async function getProject(title: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`https://bootcamp-project-2024-zeta.vercel.app/api/portfolio/${title}`, {
      cache: "no-store",
    });
    // console.log(res)
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
    // `` are a special way of allowing JS inside a string
    // Instead of "error: " + err, we can just do the above
    // it is simular to formated strings in python --> f"{err}"
  }
}
//passing in object --> not explicitly defining it in function call
//							parameter        object skeleton
export default async function Project({ params }: Props) {
  const title = (await params).title;
  const project = await getProject(title);

  //console.log('params        ',params);

  if (!project) {
    console.log("hello");
    return (
      <div>
        <h1 className="pageTitle">404 - Blog Not Found</h1>
      </div>
    );
  }
  if (project) {
    return (
      <div className={style.master}>
        <div className={style.info}>
          <p className={style.title}>
            <strong>{project.title} </strong> {project.skills}
          </p>
          <ul>
            <li className={style.content1}>{project.content1}</li>
            <li className={style.content2}>{project.content2}</li>
          </ul>

          <div className={style.comment}>
            <p>Comment Section</p>
            {project.comments.map((comment: commentType, index: number) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </div>
        <div className={style.commentSec}>
          <NewComment title={title} />
        </div>
      </div>
    );
  }
  return console.log("hi");
}
