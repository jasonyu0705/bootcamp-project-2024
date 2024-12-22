import React from 'react';
import style from './projectPreview.module.css'
import { Project } from "../../database/projectSchema"; // importing the type/interface we defined earlier
import Link from "next/link";


export default function ProjectPreview(props: Project)  {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
        <div className={style.info}>
        <p className={style.title}>
          <strong><Link className={style.title} href={`/portfolio/${props.title}`}> {props.title} </Link></strong> {props.skills}
          </p>
        <ul>
        <li className={style.content1}>{props.content1}</li>
        <li className={style.content2}>{props.content2}</li>
        </ul>
        </div>

  );
}