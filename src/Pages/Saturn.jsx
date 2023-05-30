import React from "react";
import PlanetData from "../data.json";

const PlanetSaturn = () => {
  const SaturnPlanet = PlanetData.find(planet => planet.name === "Saturn");

  return (
    <div>
      <PlanetFact planet={SaturnPlanet} />
    </div>
  );
};

const PlanetFact = ({ planet }) => {
  return (
    <div>
      <h2>{planet.name}</h2>
      <h3>Overview</h3>
      <p>{planet.overview.content}</p>
      <a href={planet.overview.source}>Source</a>

      <h3>Structure</h3>
      <p>{planet.structure.content}</p>
      <a href={planet.structure.source}>Source</a>

      <h3>Geology</h3>
      <p>{planet.geology.content}</p>
      <a href={planet.geology.source}>Source</a>

      <p>Rotation: {planet.rotation}</p>
      <p>Revolution: {planet.revolution}</p>
      <p>Radius: {planet.radius}</p>
      <p>Temperature: {planet.temperature}</p>

      <img src={planet.images.planet} alt={`${planet.name} planet`} />
      <img src={planet.images.internal} alt={`${planet.name} internal`} />
      <img src={planet.images.geology} alt={`${planet.name} geology`} />
    </div>
  );
};

export default PlanetSaturn;