import React from "react";
import styled from 'styled-components'



function Hero(props) {

  const HeroAbsolute = styled.div`
  display: ${props => props.showBio ? "block" : "none"};
  position: absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background-color: rgba(0,255,255,0.1);

`;

console.log(props.Display);

  return (
    <HeroAbsolute showBio={props.Display}>
      <div className="hero_bio_cont">
        <h1>{props.BioData.name}</h1>
        <div className="hero_bio_appearance">
          <div>
            <img></img>
            <div>
              <h2>{props.BioData.powerstats?.power}</h2>
              <h2></h2>
              <h2></h2>
            </div>
          </div>
        </div>
      </div>
    </HeroAbsolute>
  );
}

export default Hero;
