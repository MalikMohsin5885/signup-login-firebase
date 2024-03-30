import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetApiHook() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://reactnative.dev/movies.json')
      .then((res) => {
        console.log('GETAPICustomHook', res.data.movies);
        setData(res.data.movies);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return { data };
}
