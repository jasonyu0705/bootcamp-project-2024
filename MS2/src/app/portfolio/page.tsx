import Image from "next/image";
import portStyle from "./page.module.css";


export default function portfolio() {
  return (
<div className={portStyle.profile_container}>
      {/* Projects */}
      <section className={portStyle.profile_section}>
        <h2 className={portStyle.profile_section_title}>Projects</h2>

        <div className={portStyle.profile_item}>
          <p><strong>Amazon EcoFriend</strong> | HTML, CSS, JavaScript, Flask, Huggingface API</p>
          <ul>
            <li>Developed a Chrome extension recommending eco-friendly products using Huggingface and Amazon APIs.</li>
            <li>Created an intuitive user interface with HTML/CSS and Flask for backend API handling.</li>
          </ul>
        </div>

        <div className={portStyle.profile_item}>
          <p><strong>Battleship</strong> | OOP, Recursion, Java, Git</p>
          <ul>
            <li>Designed a Battleship game using Java, incorporating a graphical interface with javax.swing.</li>
            <li>Implemented ship placement algorithms and turn-based gameplay logic.</li>
          </ul>
        </div>

        <div className={portStyle.profile_item}>
          <p><strong>Adventure Rush</strong> | OOP, Recursion, Sprite Animation, Music</p>
          <ul>
            <li>Collaborated using the Software Development Life Cycle to create a modular adventure-style game.</li>
            <li>Developed an enemy superclass with specific subclass extensions using inheritance.</li>
          </ul>
        </div>

        <div className={portStyle.profile_item}>
          <p><strong>Arduino Robot</strong> | Python, GPIO, Wiring, Circuit Theory</p>
          <ul>
            <li>Built a robot capable of line-following and wall-detection using Arduino and various sensors.</li>
            <li>Applied circuit theory and Python programming to integrate sensor data with robotic tasks.</li>
          </ul>
        </div>
      </section>
    </div>
  );

}
