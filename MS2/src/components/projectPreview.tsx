import React from 'react';
import style from './blogPreview.module.css'
import { Project } from "../database/projectSchema"; // importing the type/interface we defined earlier


export default function ProjectPreview(props: Project)  {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
        <div className={style.info}>
        <p className={style.title}><strong>{props.title}</strong> {props.skills}</p>
        <ul>
        <li className={style.content1}>{props.content1}</li>
        <li className={style.content2}>{props.content2}</li>
        </ul>
        </div>

  );
}