import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Heroes from "./components/Heroes";

function App() {
  const [ExcData, setExcData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
      );
      setExcData(response.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      {IsLoading ? (
        "Data is Loading..."
      ) : (
        <Heroes
          data={ExcData}
        />
      )}
    </div>
  );
}

export default App;
