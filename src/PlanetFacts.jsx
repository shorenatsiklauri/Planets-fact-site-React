import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from "react-router-dom";
import "./PlanetFacts.css";

import PlanetData from "./data.json";
import PlanetEarth from "./Pages/Earth";

const PlanetFacts = () => {
  const [activebar, setActivebar] = useState(true);

  const handleBarClick = () => {
    setActivebar(!activebar);

 
  };

  return (
    <Router>
      <div>
        <div className="card">
          <div className="headerspace" >
            <div className="menue">
              <h1 style={{ marginLeft: "10px" }}>THE PLANETS</h1>
              <div className="boxforsvg" style={{cursor:"pointer" }} onClick={handleBarClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
                  <g fill="#FFF" fillRule="evenodd">
                    <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <nav>
            <ul className={activebar ? "planetlist show" : "planetlist hide"}>
  {PlanetData.map((planet) => (
    <div className="nameandball" key={planet.name}>
      <div className="smallbolls" style={{ background: planet.color }}></div>
      <div className="testit">
      <li style={{ fontSize: "15px", color: "white", textTransform: "uppercase", fontWeight: "700", borderBottom: "none", textDecoration: "none", margin: "0", padding: "0", border: "none", outline: "none" }}>
    <Link to={`/planet/${planet.name}`}>{planet.name}</Link>
  </li>
</div>
    </div>
  ))}
</ul>
            </nav>
          </div>
          <div className="planetspace">
            <Routes>
              <Route path="/" element={<Navigate to="/planet/Mercury" />} />
              <Route path="/planet/:id" element={<PlanetEarth />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default PlanetFacts;