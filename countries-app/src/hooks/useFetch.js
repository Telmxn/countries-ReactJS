import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const asynFuntion = async (url) => {
    let res = null;
    try {
      setLoading(true);
      res = await axios.get(url);
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    asynFuntion(url);
  }, [url]);

  return { data, error, loading };
}
