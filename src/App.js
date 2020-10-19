import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Heroes from "./components/Heroes";
import styled from "styled-components";
import Loader from "./components/Loader"
import Filter from "./components/Filter"

function App() {
  const [ExcData, setExcData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [Input, setInput] = useState("")

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

  function search (heroes) {
    return heroes.filter((hero) => hero.name.toLowerCase().indexOf(Input) > -1)
  }

  return (
    <MainDiv>
      <input type='text' placeholder='Serch for Hero' value={Input} onChange={(e) => setInput(e.target.value.toLowerCase())}/>
      {IsLoading ? <Loader/> : <Heroes data={search(ExcData)} />}
    </MainDiv>
  ); 
}

const MainDiv = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`;
export default App;
