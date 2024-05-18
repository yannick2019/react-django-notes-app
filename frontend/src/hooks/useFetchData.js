import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(url, { method: "GET" })
        .then(res => res.json())
        .then(data => {
          setData(data);
        });
      setError(false);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }, []);

  return { data, error, loading };
}