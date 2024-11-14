import { useState } from "react";
import styles from "./page.module.css";

async function getNasaData(count: number) {
  // 1. Make the GET request and await the HTTP Response
  const response = await fetch(
    `https://api.demo.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=${count}`
  );  // 2. Get the JSON data from the response
  const data = await response.json();
  return data;
}

export default async function NasaApod() {
  const apodData = await getNasaData(8);
  return (
    <main>
      <h1 className={styles.hey}>Hey</h1>
    </main>
  );
}
