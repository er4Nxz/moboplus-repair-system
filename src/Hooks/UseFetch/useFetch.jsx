import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(url);
    setData(response.data);
    setLoading(false);
    try {
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = async () => {
    await fetchData();
  };

  return { data, error, loading, refetch };
};

export default useFetch;
