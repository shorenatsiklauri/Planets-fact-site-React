import React, { useState } from "react";
import PlanetData from "../data.json";

const PlanetVenus = () => {
  const VenusPlanet = PlanetData.find((planet) => planet.name === "Venus");

  return (
    <div>
      <PlanetFact planet={VenusPlanet} />
    </div>
  );
};

const PlanetFact = ({ planet }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="informationalbox">
        <div className="boxforpicture">
          {activeTab === "overview" && (
            <img src={planet.images.planet} alt={`${planet.name} planet`} style={{ width: "450px" }}/>
          )}
          {activeTab === "structure" && (
            <img src={planet.images.internal} alt={`${planet.name} internal`} />
          )}
          {activeTab === "geology" && (
            <div>
              <img
                src={planet.images.planet}
                alt={`${planet.name} planet`}
                style={{ width: "70%" }}
              />
              <img
                src={planet.images.geology}
                alt={`${planet.name} geology`}
                style={{ width: "30%", marginLeft: "-210px" }}
              />
            </div>
          )}
        </div>
        <div className="boxforsourses">
          <h2>{planet.name}</h2>
          <div className="boxeslikebutton">
            <div onClick={() => handleTabClick("overview")}>Overview</div>
          </div>
          {activeTab === "overview" && (
            <div className="textbox">
              <p>{planet.overview.content}</p>
            </div>
          )}
          <a href={planet.overview.source}>Source: Wikipedia</a>

          <div className="boxeslikebutton">
            <div onClick={() => handleTabClick("structure")}>Structure</div>
          </div>
          {activeTab === "structure" && (
            <div className="textbox">
              <p>{planet.structure.content}</p>
            </div>
          )}
          <a href={planet.structure.source}>Source: Wikipedia</a>

          <div className="boxeslikebutton">
            <div onClick={() => handleTabClick("geology")}>Geology</div>
          </div>
          {activeTab === "geology" && (
            <div className="textbox">
              <p>{planet.geology.content} </p>
            </div>
          )}
          <a href={planet.geology.source}>Source: Wikipedia</a>
        </div>
      </div>
      <div className="rotationandtemperature">
        <div className="smallboxes">
          <p>Rotation:</p> <h1>{planet.rotation}</h1>
        </div>
        <div className="smallboxes">
          <p>Revolution:</p> <h1>{planet.revolution}</h1>
        </div>
        <div className="smallboxes">
          <p>Radius:</p> <h1>{planet.radius}</h1>
        </div>
        <div className="smallboxes">
          <p>Temperature:</p> <h1>{planet.temperature}</h1>
        </div>
      </div>
    </div>
  );
};

export default PlanetVenus;