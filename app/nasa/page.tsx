"use client"; // Add this line at the top to mark the component as a Client Component

import { useState, useEffect } from "react";
import { getData } from "./components/getNasaData";
import styles from "./page.module.css";

export default function NasaApod() {
  const [apodData, setApodData] = useState<any[]>([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true); // Loading state
  
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const data = await getData(4);
        console.log("Fetched APOD Data");
        setApodData(data);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
      }
      setLoading(false); // Stop loading after data is fetched
    };
    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    return <p>Loading...</p>;
  }
  
  return (
    <main>
      <div>
        {apodData.map((item, index) => (
          <div key={index}>
            <h2 className={styles.imageTitle}>{item.title}</h2>
            <h4 style={{ marginTop: '0px'}}>{item.date}</h4>
            <img src={item.url} alt={item.title} />
            <p>{item.explanation}</p>
            {index < apodData.length - 1 && ( // Don't show the divider after the last item
            <div className={styles.gradientDivider}></div>
            )}
          </div>
        ))}
      </div>
      <footer className={styles.siteFooter}>
        <div className={styles.footerContent}>
          <p> &copy; NASA API. All rights reserved.</p>
        </div>
      </footer>
  </main>
  );
}