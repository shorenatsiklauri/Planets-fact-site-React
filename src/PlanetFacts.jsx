import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./PlanetFacts.css";

import PlanetData from "./data.json";
import PlanetEarth from "./Pages/Earth";
import PlanetJupiter from "./Pages/Jupiter";
import PlanetMars from "./Pages/Mars";
import PlanetMercury from "./Pages/Mercury";
import PlanetSaturn from "./Pages/Saturn";
import PlanetVenus from "./Pages/Venus";
import PlanetUranus from "./Pages/Uranus";
import PlanetNeptune from "./Pages/Neptune";

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
              <Route path="/" element={<PlanetNeptune />} />
              <Route path="/planet/Earth" element={<PlanetEarth />} />
              <Route path="/planet/Jupiter" element={<PlanetJupiter />} />
              <Route path="/planet/Mars" element={<PlanetMars />} />
              <Route path="/planet/Mercury" element={<PlanetMercury />} />
              <Route path="/planet/Saturn" element={<PlanetSaturn />} />
              <Route path="/planet/Venus" element={<PlanetVenus />} />
              <Route path="/planet/Uranus" element={<PlanetUranus />} />
              <Route path="/planet/Neptune" element={<PlanetNeptune />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default PlanetFacts;