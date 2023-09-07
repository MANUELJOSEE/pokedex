import React from "react";
import { useParams } from "react-router-dom";

function InfoPokemon() {
  const { id } = useParams();
  // https://pokeapi.co/api/v2/pokemon/+id
  console.log("XXXXXXXXXXXX", id);
  return <div>InfoPokemon</div>;
}
<h1>jose</h1>;

export default InfoPokemon;
