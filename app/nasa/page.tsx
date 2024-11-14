"use client"; // Add this line at the top to mark the component as a Client Component

import { useState, useEffect } from "react";
import styles from "./page.module.css";

async function getNasaData(count: number) {
  // Use the correct API key from the environment variable (now available client-side)
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&count=${count}`
  );
  
  // Check if the response is successful
  if (!response.ok) {
    console.error("Error fetching NASA data:", response.statusText);
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  // Parse and return the data
  const data = await response.json();
  return data;
}

export default function NasaApod() {
  const [apodData, setApodData] = useState<any[]>([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true); // Loading state
  
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const data = await getNasaData(4);
        console.log(data);
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
            <h2>{item.title}</h2>
            <img src={item.url} alt={item.title} />
            <p>{item.explanation}</p>
          </div>
        ))}
      </div>
    </main>
  );
}