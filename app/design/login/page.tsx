"use client"
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from 'react';

export default function SockTimeLogin() {
  const router = useRouter();
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsLoggedIn(true);
    router.push('./home'); // Navigate to "./home"
  };
  
  return (
    <main className={styles.main}>
      
      <img className={styles.logo} src="/sock_time_logo.png"  alt="Sock Time Logo" />

      <div className={styles.mainContainer}>

        <div className={styles.textBox}>
          <h2>Sock Showoff</h2>  
          <h3>Share what’s under the table - your socks! Enter your username and password to begin.</h3>
        </div>

        <form className={styles.form}>
          <input
            className={styles.input} type="email" id="email" placeholder="enteryouremail@gmail.com"
            required
          />
          <div className={styles.inputGroup}>
            <input 
              className={styles.input} type="password" id="password" placeholder="password"
              required
            />
            <p>Forgot password?</p>
          </div>

          <Link href="./home" className={styles.LinkBox}>
            <button 
              className={styles.submitButton}
              onClick={handleLogin}
              type="button">
            {"Let's Go!"}
            </button>
          </Link>

        </form>        
      </div>
    </main>
  );
}