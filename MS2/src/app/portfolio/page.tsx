import portStyle from "./page.module.css";
import ProjectPreview from '@/components/projectPreview';
import connectDB from "@/database/db";
import Projectimp, { Project } from "@/database/projectSchema";

export default async function portfolio() {
  const projects: Project[] = await getProjects();
  return (
<div className={portStyle.profile_container}>
      {/* Projects */}
      <section className={portStyle.profile_section}>
        <h2 className={portStyle.profile_section_title}>Projects</h2>
        {projects.map(project =>
               <ProjectPreview {...(project as any)._doc} key={project.title} />
            )}
      </section>
    </div>
  );

}

async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all projects and sort by date
	    const projects = await Projectimp.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return projects
	} catch (err) {
	    return []
	}
}







// <div className={portStyle.profile_item}>
// <p><strong>Amazon EcoFriend</strong> | HTML, CSS, JavaScript, Flask, Huggingface API</p>
// <ul>
//   <li>Developed a Chrome extension recommending eco-friendly products using Huggingface and Amazon APIs.</li>
//   <li>Created an intuitive user interface with HTML/CSS and Flask for backend API handling.</li>
// </ul>
// </div>

// <div className={portStyle.profile_item}>
// <p><strong>Battleship</strong> | OOP, Recursion, Java, Git</p>
// <ul>
//   <li>Designed a Battleship game using Java, incorporating a graphical interface with javax.swing.</li>
//   <li>Implemented ship placement algorithms and turn-based gameplay logic.</li>
// </ul>
// </div>

// <div className={portStyle.profile_item}>
// <p><strong>Adventure Rush</strong> | OOP, Recursion, Sprite Animation, Music</p>
// <ul>
//   <li>Collaborated using the Software Development Life Cycle to create a modular adventure-style game.</li>
//   <li>Developed an enemy superclass with specific subclass extensions using inheritance.</li>
// </ul>
// </div>

// <div className={portStyle.profile_item}>
// <p><strong>Arduino Robot</strong> | Python, GPIO, Wiring, Circuit Theory</p>
// <ul>
//   <li>Built a robot capable of line-following and wall-detection using Arduino and various sensors.</li>
//   <li>Applied circuit theory and Python programming to integrate sensor data with robotic tasks.</li>
// </ul>
// </div>


// [
//   {
// "title":"Amazon EcoFriend",
// "skills":"| HTML, CSS, JavaScript, Flask, Huggingface API",
// "content1": "Developed a Chrome extension recommending eco-friendly products using Huggingface and Amazon APIs.",
// "content2": "Created an intuitive user interface with HTML/CSS and Flask for backend API handling."
// },
//   {
//   "title":"Battleship",
//   "skills":"| OOP, Recursion, Java, Git",
//   "content1": "Designed a Battleship game using Java, incorporating a graphical interface with javax.swing.",
//   "content2": "Created an intuitive user interface with HTML/CSS and Flask for backend API handling."
//   },
//   {
//     "title":"Adventure Rush",
//     "skills":" | OOP, Recursion, Sprite Animation, Music",
//     "content1": "Collaborated using the Software Development Life Cycle to create a modular adventure-style game.",
//     "content2": "Developed an enemy superclass with specific subclass extensions using inheritance."
//     },
//     {
//       "title":"Arduino Robot",
//       "skills":" | Python, GPIO, Wiring, Circuit Theory",
//       "content1": "Built a robot capable of line-following and wall-detection using Arduino and various sensors.",
//       "content2": "Applied circuit theory and Python programming to integrate sensor data with robotic tasks."
//       },
// ]