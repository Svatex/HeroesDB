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
      <SingleHeroContent>
        <SingleHeroH1>{Hero.name}</SingleHeroH1>
        <img src={Hero.images.sm} alt="Sorry guys"></img>
      </SingleHeroContent>
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
  font-size: 10px;

  display: flex;
  flex-direction: column;
  margin: 0 5px 0 5px;
  padding: 0 10px 0 10px;
  align-items: center;
  height: 325px;
  cursor: pointer;
  background-color: transparent;
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    
  }
`;

const SingleHeroContent = styled.div`
  margin-top: auto;
`;

const SingleHeroH1 = styled.h1`
  width: 160px;
  color: white;
  text-align: center;
  margin-bottom: 15px;
`;

const HeroesCont = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

`;

export default Heroes;
