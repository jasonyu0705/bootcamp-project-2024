import Image from "next/image";
import styles from "./page.module.css";


export default function Resume() {
  return (
    <div className={styles.profile_container}>
      {/* Contact Information */}
      <div className={styles.profile_header}>
        <h1 className={styles.profile_name}>Jason Yu</h1>
        <p>Phone: 925-768-0036 | Email: jyu160@calpoly.edu</p>
        <p>
          <a href="https://www.linkedin.com/in/JasonYu101" className={styles.profile_link}>LinkedIn</a> |{" "}
          <a href="https://github.com/jasonyu0705" className={styles.profile_link}>GitHub</a>
        </p>
      </div>

      {/* Education */}
      <section className={styles.profile_section}>
        <h2 className={styles.profile_section_title}>Education</h2>
        <div className={styles.profile_item}>
          <p>
            <strong>California Polytechnic State University</strong> - San Luis Obispo, CA
          </p>
          <p>Expected June 2027</p>
          <p>Bachelor of Science in Computer Engineering (GPA: 3.75 / 4.00)</p>
          <p>Relevant Coursework: Data Structures (Python), Project-Based OOP, Digital Design (System Verilog), Assembly Language and Computer Design, Circuits I, Calculus IV</p>
        </div>
      </section>

      {/* Experience */}
      <section className={styles.profile_section}>
        <h2 className={styles.profile_section_title}>Experience</h2>

        <div className={styles.profile_item}>
          <p><strong>Upper Grand District School Board</strong> - Guelph, Ontario</p>
          <p>Teaching Assistant (August 2023)</p>
          <ul>
            <li>Provided one-on-one and group tutoring in Mathematics and Physics.</li>
            <li>Reviewed lesson plans and assisted teachers in administrative tasks.</li>
          </ul>
        </div>

        <div className={styles.profile_item}>
          <p><strong>Self-Employed</strong> - Guelph, Ontario</p>
          <p>Tutor (July 2021 – Aug 2023)</p>
          <ul>
            <li>Tutored math, physics, and music, focusing on individual needs.</li>
            <li>Created lesson plans to simplify complex material for students.</li>
          </ul>
        </div>

        <div className={styles.profile_item}>
          <p><strong>California Polytechnic State University</strong> - San Luis Obispo, CA</p>
          <p>Summer Undergraduate Research Program Volunteer (July 2024 – Aug 2024)</p>
          <ul>
            <li>Helped label data to train OpenAI’s GPT-3.5 model for resume optimization.</li>
          </ul>
        </div>

        <div className={styles.profile_item}>
          <p><strong>California Polytechnic State University</strong> - San Luis Obispo, CA</p>
          <p>Instructional Student Assistant (Sept 2024 – Present)</p>
          <ul>
            <li>Assisted students with OOP concepts and graded labs and projects.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className={styles.profile_section}>
        <h2 className={styles.profile_section_title}>Projects</h2>

        <div className={styles.profile_item}>
          <p><strong>Amazon EcoFriend</strong> | HTML, CSS, JavaScript, Flask, Huggingface API</p>
          <ul>
            <li>Developed a Chrome extension recommending eco-friendly products using Huggingface and Amazon APIs.</li>
          </ul>
        </div>

        <div className={styles.profile_item}>
          <p><strong>Battleship</strong> | OOP, Recursion, Java, Git</p>
          <ul>
            <li>Designed a Battleship game using Java, with GUI and ship placement algorithms.</li>
          </ul>
        </div>

        <div className={styles.profile_item}>
          <p><strong>Adventure Rush</strong> | OOP, Recursion, Sprite animation, Music</p>
          <ul>
            <li>Collaborated to design a small adventure-style game with modular code structure.</li>
          </ul>
        </div>

        <div className={styles.profile_item}>
          <p><strong>Arduino Robot</strong> | Python, GPIO, Wiring, Circuit Theory</p>
          <ul>
            <li>Built a line-following and wall-detecting robot using Arduino and sensors.</li>
          </ul>
        </div>
      </section>

      {/* Technical Skills */}
      <section className={styles.profile_section}>
        <h2 className={styles.profile_section_title}>Technical Skills</h2>
        <div className={styles.profile_item}>
<p>Programming Languages: Java, Python, System Verilog, HTML, CSS, RISCV Assembly</p>
        <p>Languages: English, Chinese, French (Conversational)</p>
        </div>
        
      </section>

      {/* Achievements and Awards */}
      <section className={styles.profile_section}>
        <h2 className={styles.profile_section_title}>Achievements and Awards</h2>
        <div className={styles.profile_item}>
        <ul>
          <li>2nd place at SLO Hacks 2024 (June 2024)</li>
          <li>Engineering Dean’s List at Cal Poly (Feb 2024, Apr 2024, June 2024, Sept 2024)</li>
          <li>Klara and Oscar Bookbinder Scholarship (June 2023)</li>
          <li>Honor Award, 51st Nationals MusicFest Canada (May 2023)</li>
          <li>Centennial Math Department Award (June 2023)</li>
        </ul>
        </div>
      </section>
    </div>
  );
}
