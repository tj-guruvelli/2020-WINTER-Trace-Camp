
import axios from 'axios';
import React, { useEffect, useState } from "react";

const Home = () => {
  const [Planets, setPlanetList] = useState([]);

  let planetsSorted = p => 
  <div className="grid-cols-3 gap-4 p-5 m-5 ring ring-green-600 ring-offset-4 border-2 hover:ring-offset-green-100">
    <div className = "text-2xl pt-5">Planet: <b>{p.name}</b></div>
    <div>Population: {p.population}</div>
  </div>
  
  
  const isNotUnknown = (planet) => {
    return planet.population != "unknown";
  };
  const knownPopulations = Planets.filter(isNotUnknown);


  useEffect(() => {
    const getPlanet = () => 
      axios("https://swapi.dev/api/planets/")
        .then((response) => response.data.results);

    getPlanet().then((planets) => {
      setPlanetList(planets);
    })

  }, []);
  
    return ( <div>
    <div className="text-center font-mono text-5xl p-10 bg-blue-700">Star Wars Planets with Known Populations</div>
    <div>
      {knownPopulations.map(planetsSorted)}
      </div>
  </div>
    )
}
export default Home;