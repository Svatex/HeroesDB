import React, { useState } from "react";
import Hero from "./Hero";
import styled from "styled-components";

function Heroes(props) {
  const [Bio, setBio] = useState([]);
  const [Display, setDisplay] = useState(false);

  const content = props.data.map((Hero) => (
    <SingleHeroCont
      onClick={() => {
        setBio(Hero);
        setDisplay(true);
      }}
      key={Hero.id}
    >
      <h1>{Hero.name}</h1>
      <img src={Hero.images.sm} alt="Sorry guys"></img>
    </SingleHeroCont>
  ));

  const updateDisplay = () => {
    setDisplay(false);
  };

  return (
    <HeroesCont>
      <Hero updateDisplay={updateDisplay} Display={Display} BioData={Bio} />
      {content}
    </HeroesCont>
  );
}

const SingleHeroCont = styled.div`
  font-family: "Oswald", sans-serif;

  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
  align-items: center;
`;

const HeroesCont = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default Heroes;
