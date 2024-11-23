import styles from "./page.module.css";

export default function Demos() {

  return (
    <main className={styles.main}>
      <img
        className={styles.logo}
        src="/sock_time_logo.png" 
        alt="Sock Time Logo" 
      />

      <div className={styles.mainContainer}>

        <div className={styles.textBox}>
          <h2>Sock Showoff</h2>  
          <h3>Share what’s under the table - your socks! Enter your username and password to begin.</h3>
        </div>

        <form className={styles.form}>
          <input
            className={styles.input} type="email" id="email" name="email" placeholder="Enter your email"
            required
          />
          <div className={styles.inputGroup}>
            <input 
              className={styles.input} type="password" id="password" name="password" placeholder="password"
              required
            />
            <p>Forgot password?</p>
          </div>
          <button className={styles.submitButton} type="submit"> Let's Go!</button>
        </form>        
      </div>
    </main>
  );
}
