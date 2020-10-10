import React from "react";

function Hero(props) {
  return (
    <div className="hero_bio_absolute">
      <div className="hero_bio_cont">
        <h1>{props.BioData.name}</h1>
        <div>
          <div>
            <img></img>
            <div>
              <h2>{props.BioData.slug}</h2>
              <h2></h2>
              <h2></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
