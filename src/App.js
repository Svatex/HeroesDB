import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Heroes from "./components/Heroes";
import styled from "styled-components";
import Loader from "./components/Loader";

function App() {
  const [ExcData, setExcData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [Input, setInput] = useState("");

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

  function search(heroes) {
    return heroes.filter((hero) => hero.name.toLowerCase().indexOf(Input) > -1);
  }

  return (
    <MainDiv>
      <Header>
        Hero<HeaderSpan>DB</HeaderSpan>
      </Header>
      <HeroInput
        type="text"
        placeholder="Search for Hero"
        value={Input}
        onChange={(e) => setInput(e.target.value.toLowerCase())}
      />
      {IsLoading ? <Loader /> : <Heroes data={search(ExcData)} />}
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  font-family: "Russo One", sans-serif;
  color: white;
  font-size: 120px;
  padding: 10px;
  text-shadow: 4px 4px black;
`;

const HeaderSpan = styled.span`
  color: #e2b400;
`;

const HeroInput = styled.input`
  font-size: 15px;
  margin: 10px auto 30px auto;
  padding: 12px;
  outline: none;
  width: 35%;
  color: white;
  background-color: #6b6b6b;
  border-radius: 10px;
  border: 2px black solid;
`;
export default App;
