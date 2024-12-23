"use client";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import styles from "./page.module.css";

export default function contact() {


  const [name, setName] = useState("")    
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //vars for constants
    const serviceID = "service_0lbamkw";
    const templateID = "template_mipgi6q";
    const publicKey = "rO7cd7bhC38zhrnuI";
    // parameter templace
    const templateParms = {
      from_name: name,
      from_email: email,
      to_name: "Jason",
      message: message,
    };
    //code to send email
    emailjs.send(serviceID, templateID,templateParms,publicKey) 
           .then((response)=>{
            console.log('email sent successfully',response);
            setName('');
            setEmail('');
            setMessage('');
           }) // why no semicolon here
           .catch((error)=> {
            console.error('error sending email:',error);
           });
  }

  return (
    <div className={styles.masterContainer}>

      <div className={styles.container}>


        <div className={styles.contactMe}>
          <h1 className={styles.title}> Contact Me</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* name input place */}
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                value={name}
                name="name"
                placeholder="Your Name"
                required
                className={styles.input}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* email input place */}
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                value={email}
                name="email"
                placeholder="Your Email"
                required
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* messages input place */}
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                value={message}
                name="message"
                placeholder="Your Message"
                required
                className={styles.input}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>

        <div className={styles.socialLinks}>
          <h1 className={styles.title}>Connect with me:</h1>
         
          <a
            href="https://www.linkedin.com/in/jasonyu101"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}

          >
          <img className={styles.portrait} src='linkedin.jpg' alt="portrait"  style={{ width: '40px', height: 'auto' }}/>
          </a>

          <a
            href="https://github.com/jasonyu0705"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <img className={styles.portrait} src='github.jpg' alt="portrait" style={{ width: '40px', height: 'auto' }}/>
          </a>
          <a href="mailto:jasonyu0705@gmail.com" className={styles.link}>
          <img className={styles.portrait} src='gmail.jpg' alt="portrait" style={{ width: '40px', height: 'auto' }}/>
          </a>
        </div>

      </div>
    </div>
  );
}
