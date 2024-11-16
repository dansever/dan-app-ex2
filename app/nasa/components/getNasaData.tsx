"use client";

export async function getData(count: number) {
    const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
    if (!apiKey) {
      throw new Error("NASA API key is not defined in environment variables.");
    }
    
    try {
      // Make the HTTP GET request to the NASA API
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`
      );
  
      // Check if the response is successful
      if (!response.ok) {
        console.error("Error fetching NASA data:", response.status, response.statusText);
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
  
      const data = await response.json(); // Parse and return the data
  
      // Validate response type (if you expect an array)
      if (!Array.isArray(data)) {
        throw new Error("Unexpected API response format: expected an array.");
      }
  
      return data;  
    } catch (error) {
      console.error("Error in getData function:", error);
      throw error; // Re-throw the error after logging
    }
  }