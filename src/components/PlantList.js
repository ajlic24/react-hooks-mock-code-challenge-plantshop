import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {

  const whatToShow = [...plants].filter(plant => (search === '') ? true : plant.name.toLowerCase().includes(search))

  return (
    <ul className="cards">{
      whatToShow.map(plant => <PlantCard key={plant.id} plant={plant}/> )
      }</ul>
  );
}

export default PlantList;
