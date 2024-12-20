import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "326ea4f80af34bdb8fdebee9d0c2bd05";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`); // fetch data
      const data = await res.json(); // parse JSON
      console.log(data.results); // log data
      setFoodData(data.results); // set foodData state
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
      />
    </div>
  );
}
