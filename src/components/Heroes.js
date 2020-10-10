import React, { useState } from "react";
import Hero from "./Hero";

function Heroes(props) {
  const [Bio, setBio] = useState("");

  const content = props.data.map((Hero) => (
    <div
      onClick={() => {
        setBio(Hero);
        console.log (Bio)
      }}
      className="single_hero_cont"
      key={Hero.id}
    >
      <h1>{Hero.name}</h1>
      <img src={Hero.images.sm} alt="Sorry guys"></img>
    </div>
  ));

  return (
    <div className="heroes_cont">
      <Hero BioData={Bio} />
      {content}
    </div>
  );
}

export default Heroes;
