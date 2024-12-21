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
      <a href="https://www.linkedin.com/in/JasonYu101" className={styles.profile_link}>LinkedIn</a> | 
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
      <p>Expected June 2026</p>
      <p>Bachelor of Science in Computer Engineering (GPA: 3.75 / 4.00) - President's List</p>
      <p>
        Coursework: Assembly Language and Computer Design, Digital Design, Data Structures, 
        Project-Based OOP, Circuits I & II, Discrete Structures, Systems Programming
      </p>
    </div>
  </section>

  {/* Experience */}
  <section className={styles.profile_section}>
    <h2 className={styles.profile_section_title}>Experience</h2>

    <div className={styles.profile_item}>
      <p><strong>California Polytechnic State University</strong> - San Luis Obispo, CA</p>
      <p>Instructional Student Assistant (Sept 2024 – Present)</p>
      <ul>
        <li>Facilitated office hours to support students' understanding of Object-Oriented Programming concepts.</li>
        <li>Aided in grading labs, problem sets, and projects for 25 students.</li>
      </ul>
    </div>

    <div className={styles.profile_item}>
      <p><strong>California Polytechnic State University</strong> - San Luis Obispo, CA</p>
      <p>Summer Undergraduate Research Program Volunteer (Jul 2024 – Aug 2024)</p>
      <ul>
        <li>Labeled data to train OpenAI's GPT-3.5 model for generating high-scoring resumes.</li>
      </ul>
    </div>

    <div className={styles.profile_item}>
      <p><strong>Upper Grand District School Board</strong> - Guelph, Ontario</p>
      <p>Teaching Assistant (Aug 2023)</p>
      <ul>
        <li>Provided one-on-one and group tutoring in Mathematics and Physics.</li>
        <li>Reviewed lesson plans and assisted teachers with administrative tasks.</li>
      </ul>
    </div>
  </section>

  {/* Activities */}
  <section className={styles.profile_section}>
    <h2 className={styles.profile_section_title}>Activities</h2>

    <div className={styles.profile_item}>
      <p><strong>Hack4Impact</strong> - Software Developer (Sept 2024 – Present)</p>
      <p>Technologies: HTML, CSS, Next.js, MongoDB, Git, React</p>
      <ul>
        <li>Collaborating in a team of 16 to develop full-stack solutions for local non-profits.</li>
      </ul>
    </div>

    <div className={styles.profile_item}>
      <p><strong>Prototype Vehicle Laboratory</strong> - Low Voltage Team Member (Sept 2024 – Present)</p>
      <p>Technologies: CANBUS, UART, C, Python</p>
      <ul>
        <li>Developing an electric car capable of traveling 500 miles on one charge.</li>
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
        <li>Won second place at SLOHacks 2024.</li>
      </ul>
    </div>

    <div className={styles.profile_item}>
      <p><strong>Receiver Transmitter Indicator</strong> | Circuit Theory, Circuit Design</p>
      <ul>
        <li>Created an IR transmitter and receiver using comparators, potentiometers, and LEDs.</li>
        <li>Designed a low-supply indicator schematic with LED feedback.</li>
      </ul>
    </div>

    <div className={styles.profile_item}>
      <p><strong>Snake in RISC-V Assembly</strong> | Object-Oriented Programming, FPGA Programming</p>
      <ul>
        <li>Developed a rendition of Snake using a custom OTTER processor and VGA modules.</li>
        <li>Programmed gameplay using RISC-V assembly and System Verilog.</li>
      </ul>
    </div>
  </section>

  {/* Skills */}
  <section className={styles.profile_section}>
    <h2 className={styles.profile_section_title}>Skills</h2>
    <div className={styles.profile_item}>
      <p>Programming Languages: Java, Python, System Verilog, HTML, CSS, RISC-V Assembly, C, Unix</p>
      <p>Languages: English, Chinese, French</p>
    </div>
  </section>
</div>


  );
}
