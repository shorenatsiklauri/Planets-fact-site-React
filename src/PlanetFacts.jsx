import React from "react";
import { BrowserRouter as Router, Link, Route, Routes , Navigate} from "react-router-dom";
import "./PlanetFacts.css";

import PlanetData from "./data.json";
import PlanetEarth from "./Pages/Earth";


const PlanetFacts = () => {
  return (
    <Router>
      <div>
        <div className="card">
          <div className="headerspace">
            <h1 style={{ marginLeft: "10px" }}>THE PLANETS</h1>
            <nav>
              <ul className="barbox">
                {PlanetData.map((planet) => (
                  <li key={planet.name}>
                    <Link to={`/planet/${planet.name}`}>{planet.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="planetspace">
            <Routes>
            
            <Route path="/" element={<Navigate to="/planet/Mercury"/>} />
              <Route path="/planet/:id" element={<PlanetEarth />} />
    
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default PlanetFacts;