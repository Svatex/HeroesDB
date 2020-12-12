import React from "react";
import styled from "styled-components";
import { BsShield } from "react-icons/bs";
import { BiBrain } from "react-icons/bi";
import { FaFistRaised, FaWindowClose } from "react-icons/fa";

function Hero({ Display, updateDisplay, BioData }) {
  return (
    <HeroAbsolute showBio={Display}>
      <HeroBioCont>
        <Name>{BioData.name}</Name>
        <HeroStats>
          <img src={BioData.images?.sm}></img>
          <PowerStats>
            <p>
              <span>
                <BiBrain color="#3279a8" />
              </span>
              {BioData.powerstats?.intelligence}
            </p>
            <p>
              <span>
                <FaFistRaised color="#d61200" />
              </span>
              {BioData.powerstats?.strength}
            </p>
            <p>
              <span>
                <BsShield />
              </span>
              {BioData.powerstats?.speed}
            </p>
          </PowerStats>
        </HeroStats>

        <HeroAppearance>
          <p>
            <span>Full Name:</span>
            {BioData.biography?.fullName}
          </p>
          <p>
            <span>Place of birth:</span>
            {BioData.biography?.placeOfBirth}
          </p>
          <p>
            <span>Gender:</span>
            {BioData.appearance?.gender}
          </p>
          <p>
            <span>Race:</span>
            {BioData.appearance?.race}
          </p>
          <p>
            <span>Height:</span>
            {BioData.appearance?.height[1]}
          </p>
        </HeroAppearance>
        <CloseButton>
          <FaWindowClose onClick={updateDisplay} size="2em" color="white" />
        </CloseButton>
      </HeroBioCont>
    </HeroAbsolute>
  );
}

const HeroAbsolute = styled.div`
  display: ${(props) => (props.showBio ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(99, 99, 99, 0.5);
  z-index: 100;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  margin-bottom: -30%;
`;

const HeroBioCont = styled.div`
  display: grid;
  grid-template-areas:
    "name name"
    "powerstats appearance";
  position: fixed;
  top: 25vh;
  bottom: 25vh;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  height: 50vh;
  border: solid 2px white;
  color: white;

  @media (max-width: 1000px) {
    width: 70%;
  height: 50vh;
  }

  @media (max-width: 550px) {
    width: 80%;
  height: 50vh;
  }

  @media (max-width: 420px) {
    width: 99%;
  height: 50vh;
  }
`;

const HeroStats = styled.div`
  grid-area: powerstats;
  padding: 10px;
`;
const PowerStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3px;
`;

const HeroAppearance = styled.div`
  grid-area: appearance;
  padding: 10px;
  font-family: "Oswald", sans-serif;
`;

const Name = styled.div`
  grid-area: name;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-family: "Oswald", sans-serif;
`;

const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 5px;
  right: 5px;
  border: none;
  margin: 0;
  text-decoration: none;
  background-color: transparent;
`;

export default Hero;
