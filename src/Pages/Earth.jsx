import React, { useState } from "react";
import PlanetData from "../data.json";
import { useParams } from "react-router-dom";
import "./Pages.css";

const PlanetEarth = () => {
  let { id } = useParams();
  const earthPlanet = PlanetData.find((planet) => planet.name === id);
  console.log(earthPlanet);

  console.log(id);
  return (
    <div>
      <PlanetFact planet={earthPlanet} />
    </div>
  );
};

const PlanetFact = ({ planet }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [buttonBackground, setButtonBackground] = useState({
    overview: "",
    structure: "",
    geology: ""
  });


  return (
    <div>
      <div className="informationalbox">

        <div className="threebuttonbox">
        <div onClick={() => handleTabClick("overview")}>Overview</div>
        <div onClick={() => handleTabClick("structure")}>Structure</div>
        <div onClick={() => handleTabClick("geology")}>Geology</div>
        </div>
      <div className="boxforpicture">
  {activeTab === "overview" && (
  <img className="imgplanets" src={planet.images.planet} alt={`${planet.name} planet` }/>
  
 
  )}
  {activeTab === "structure" && (
    <img  className="imgplanets" src={planet.images.planet} alt={`${planet.name} planet`}/>
  )}
  {activeTab === "geology"  && (
    <div className="twopictures">
      <img className="imgplanets" src={planet.images.planet} alt={`${planet.name} planet`} />
      <img className="smallimggeology" src={planet.images.geology} alt={`${planet.name} geology`}  />
    </div>
  )}
</div>
        <div className="boxforsourses">
          <h2>{planet.name}</h2>
          <div>
          <div> {activeTab === "overview" ? <div className="textbox"><p>{planet.overview.content}</p> <a href={planet.overview.source}>Source: Wikipedia</a> </div> : activeTab === "structure" ? <div className="textbox"> <p>{planet.structure.content}</p>     <a href={planet.structure.source}>Source: Wikipedia</a></div> :<div className="textbox"><p>{planet.geology.content} </p>          <a href={planet.geology.source}>Source: Wikipedia</a></div>} </div>
         
         <div className="threeboxeslikebuttons">
         <div className="boxeslikebutton" style={{ background: activeTab === "overview" ? buttonBackground.overview : "" }}>
    <div onClick={() => handleTabClick("overview")}>Overview</div>
  </div>

              
          <div className="boxeslikebutton" style={{ background: `hover ${planet.color}` }}>
            <div onClick={() => handleTabClick("structure")}>Structure</div>
          </div>
             
              <div className="boxeslikebutton" style={{ background: planet.color }}>
            <div onClick={() => handleTabClick("geology")}>Geology</div>
          </div>
          </div>
       
       

        </div>
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

export default PlanetEarth;