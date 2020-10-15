import React, { useState } from "react";
import Hero from "./Hero";
import styled from 'styled-components'

function Heroes(props) {
  const [Bio, setBio] = useState([]);
  const [Display, setDisplay] = useState(false);

  const SingleHeroCont = styled.div`
  display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 10px;
    align-items: center;
  `

  const content = props.data.map((Hero) => (
    <SingleHeroCont
      onClick={() => {
        setBio(Hero);
        setDisplay(!Display);
        console.log(Bio.powerstats?.power);
      }}
      className="single_hero_cont"
      key={Hero.id}
    >
      <h1>{Hero.name}</h1>
      <img src={Hero.images.sm} alt="Sorry guys"></img>
    </SingleHeroCont>
  ));

  const updateDisplay = () => {
    setDisplay(false);
  }

  return (
    <div className="heroes_cont">
      <Hero updateDisplay={updateDisplay} Display={Display} BioData={Bio} />
      {content}
    </div>
  );
}

export default Heroes;
