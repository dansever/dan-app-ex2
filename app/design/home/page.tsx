import styles from "./page.module.css";
import Link from 'next/link';

export default function Demos() {

  return (
    <main className={styles.main}>
      
      <div className={styles.headerSection}>
        <h2>Sock Showoff Time!</h2>
      </div>
      
      <div className={styles.imageSection}>
        <img className={styles.sock_logo} src="/sock_logo.png"  alt="Sock Time Logo" />
      </div>
      
      <Link href="./home" className={styles.LinkBox}>
        <button className={styles.submitButton} type="button">
          {"Open Camera"}
        </button>
      </Link>

    </main>
  );
}
