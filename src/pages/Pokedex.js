import React, { useEffect, useState } from "react";
import { getPokemonList } from "./Api";
import { Button, Form, InputGroup } from "react-bootstrap";

function Pokedex() {
  const [Pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useState(() => {
    const fetchedPokemon = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon?Limit=20";
        // const fetchPokemon = [];
        const response = await getPokemonList(url);

        console.log("saludosssssssssssss");
        const data = response.array;
        console.log(data);
        setPokemon(data);
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
      setIsLoading(true);
    };
    fetchedPokemon();
  }, []);
  function showInfo(pokemon) {
    console.log(pokemon);

    window.open("/pokedex/" + pokemon.id);
  }
  <div class="topnav"></div>;
  console.log(Pokemon);
  return (
    <header>
      {isLoading ? (
        <>
          <div>
            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                Button
              </Button>
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>

          <div className="pokemon-container2">
            {Pokemon.map((pokemon, index) => (
              <div className="carta" key={index}>
                <p className="carta-name">{pokemon.name}</p>
                <img className="carta-imagen" src={pokemon.image}></img>
                <button onClick={() => showInfo(pokemon)}>inspeccionar</button>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </header>
  );
}

export default Pokedex;
