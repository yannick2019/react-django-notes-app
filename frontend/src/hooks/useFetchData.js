import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(url, { method: "GET" })
        const data = await response.json();
        setData(data);
        setError(false);
        setLoading(false)
      }

      fetchData();
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }, []);

  return { data, error, loading };
}