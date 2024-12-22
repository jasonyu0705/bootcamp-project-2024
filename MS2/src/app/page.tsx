import style1 from "./page.module.css";


export default function Home() {
  return (
    <div>
      
      
      <main className={style1.info_section}>
        <h1 className={style1.title}> Welcome!</h1>
          <div>
          <img className={style1.portrait} src='/H4I_PORTRAIT.jpg' alt="portrait" style={{ width: '400px', height: 'auto' }}/>
          </div>
        <p className={style1.about_me}>
        Hello, my name is Jason! I am a second-year student studying computer engineering at California Polytechnic State University in San Luis Obispo. I hold strong interests in topics such as robotics, electrical engineering, and  I thoroughly enjoy utilizing my hands-on skills to solve problems. I believe that these abilities will enable me to excel in various tasks within my field of study.
        </p>
           
      </main>
      <footer>

      </footer>
    </div>
  );
}
