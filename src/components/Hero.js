import React from "react";
import styled from "styled-components";

function Hero({ Display, updateDisplay, BioData }) {

  return (
    <HeroAbsolute showBio={Display}>
      <HeroBioCont>
        <CloseButton onClick={updateDisplay}>Close</CloseButton>
        <h1>{BioData.name}</h1>
        <div className="hero_bio_appearance">
          <div>
            <img></img>
            <div>
              <h2>{BioData.powerstats?.power}</h2>
              <h2></h2>
              <h2></h2>
            </div>
          </div>
        </div>
      </HeroBioCont>
    </HeroAbsolute>
  );
}

const HeroAbsolute = styled.div`
display: ${(props) => (props.showBio ? "block" : "none")};
position: absolute;
text-align: center;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: rgba(99, 99, 99, 0.5);
`;

const HeroBioCont = styled.div`
display: flex;
position: fixed;
top: 25vh;
bottom: 25vh;
left: 0;
right: 0;
margin-left: auto;
margin-right: auto;
align-items: center;
justify-content: center;
width: 40%;
height: 50vh;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

`

export default Hero;
