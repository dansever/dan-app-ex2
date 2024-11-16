import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h2>Welcome to Product Jam Exercise 2</h2>
        <h3>By Dan Sever</h3>
        
        <div className={styles.imageContainer}>
          <Image
            src="/huji.svg" alt="HUJI Logo"
            width="80" height="80"
            priority/>
          <Image
            src="/bezalel.svg" alt="Bezalel Logo"
            width="80" height="80"
            priority/>
        </div>
        <br></br>
        
        <div>
          <h3>
            <a href="./tictactoe" className={styles.link}>
              <span className={styles.highlight}>Link to part 1: </span> 
              React TicTacToe
            </a>
          </h3>
          <h3>
            <a href="./nasa" className={styles.link}>
              <span className={styles.highlight}>Link to part 2: </span>
              Working with data - NASA API
            </a>
          </h3>
          <h3>
            <a href="./design" className={styles.link}>
              <span className={styles.highlight}>Link to part 3: </span>
              Design to code
            </a>
          </h3>
        </div>        

      </div>
    </main>
  );
}
