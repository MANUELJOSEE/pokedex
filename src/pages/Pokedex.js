import React, { useEffect, useState } from "react";
import { getPokemonList } from "./Api";
import { Button, Form, InputGroup } from "react-bootstrap";

function Pokedex() {
  const [Pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [PokemonCopy, setPokemonCopy] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchedPokemon = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon?Limit=20";
        // const fetchPokemon = [];
        const response = await getPokemonList(url);
        const data = response.array;
        console.log(data);
        setPokemon(data);
        setPokemonCopy(data);
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
      setIsLoading(true);
    };
    fetchedPokemon();
  }, [update]);
  function showInfo(pokemon) {
    window.open("/pokedex/" + pokemon.id);
  }

/*{ <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <button class="page-link">Anterior</button>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <button class="page-link" href="#">Siguiente</button>
    </li>
  </ul>
</nav> }*/



  function searchPokemon(e) {
    console.log(e.target.value);

    let regex = new RegExp(e.target.value, "i");
    if (e.target.value !== "") {
      const filterData = PokemonCopy.filter(({ name }) => regex.test(name));
      setPokemon(filterData);
    } else {
      setUpdate(!update);
    }
  }
  <div class="topnav"></div>;
  return (
    <header>
      {isLoading ? (
        <>
          <div>
            {/* <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                Button
              </Button>
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
            </InputGroup> */}
            <div className="textInputWrapper">
              <input
                onChange={searchPokemon}
                placeholder="Buscar Pokemon"
                type="text"
                className="textInput"
              />
            </div>
            <div id="loader">
              <div className="ls-particles ls-part-1"></div>
              <div className="ls-particles ls-part-2"></div>
              <div className="ls-particles ls-part-3"></div>
              <div className="ls-particles ls-part-4"></div>
              <div className="ls-particles ls-part-5"></div>
              <div className="lightsaber ls-left ls-green"></div>
              <div className="lightsaber ls-right ls-red"></div>
            </div>
            {/* <input onChange={searchPokemon} /> */}
          </div>

          <div className="pokemon-container2">
            {Pokemon.map((pokemon, index) => (
              <div className="carta" key={index}>
                <p id="carta-name">{pokemon.name}</p>
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
