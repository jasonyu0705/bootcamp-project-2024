
import styles from "./page.module.css";


export default function contact() {
        return (
          <div className={styles.masterContainer} >
<div className={styles.container}>
            <div>
            <h1  className={styles.title}> Contact Me</h1>
            <form className={styles.form}>

              
              {/* name input place */}
              <div className={styles.inputGroup}>
                <label htmlFor="name!uytfdhjtyufgnvb">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className={styles.input}
                />
              </div>


                {/* email input place */}
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className={styles.input}
                />
              </div>



                {/* messages input place */}
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  className={styles.textarea}
                ></textarea>
              </div>


              <button type="submit" className={styles.button}>
                Submit
              </button>
            </form>

            </div>
            



            <div className={styles.socialLinks}>
              <h3>Connect with me:</h3>
             

              <a href="https://linkedin.com/in/jasonyu101" target="_blank" rel="noopener noreferrer" className={styles.link}>
                LinkedIn
              </a>
              <a href="https://github.com/jasonyu0705" target="_blank" rel="noopener noreferrer" className={styles.link}>
                GitHub
              </a>
              <a href="mailto:jasonyu0705@gmail.com" className={styles.link}>
                Email
              </a>
              </div>
            
            </div>
          </div>

          
        );
      };
            

