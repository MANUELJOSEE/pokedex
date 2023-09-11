export async function getPokemonList(url) {
  var pokemonData = [];
  var result = {};
  try {
    // Consumir el api con la url recibida
    const response = await fetch(url);
    // vamos a esperar la respuesta y formatearla a json
    const data = await response.json();
    if (data.results && data.results.length) {
      // iterar cata pokemon
      console.log("HOLAA",data.results)
      for (const pokemon of data.results) {
        const url = pokemon.url;
        const detailPokemon = await getPokemonDetailByUrl(url);
        //push al arrelo de pokemons
        pokemonData.push(detailPokemon);
      }
    }
    result = {
      count: data.count,
      next: data.next,
      previous: data.previous,
      array: pokemonData,
    };
  } catch (error) {
    console.error(" Error capturando la Pokemon data", error);
    return null;
  }
  return result;
}

async function getPokemonDetailByUrl(url) {
  try {
    // obtener el detalle de cada pokemon
    const response = await fetch(url);
    const data = await response.json();
    const id = data.id;
    return {
      id,
      name: data.name,
      image: data.sprites.other["official-artwork"]["front_default"],
    
    };
  } catch (error) {
    console.error(" Error capturando el detalle", error);
    throw error;
  }
}


export async function getPokemonDetail(id){
    const url= `https://pokeapi.co/api/v2/pokemon/${id}`
    // obtener el detalle de cada pokemon
    var result = {};
    console.log("id"+id);
  try {
    // Consumir el api con la url recibida
    const response = await fetch(url);
    // vamos a esperar la respuesta y formatearla a json
    const data = await response.json();
    // console.log("Aquii",data.types)
    result = {
      id: data.id,
      name: data.name,
      types: data.types,
      stats: data.stats,
      image: data.sprites.other["official-artwork"]["front_default"]
    };
  } catch (error) {
    console.error(" Error capturando el detalle", error);
    
    throw error;
    
  }
  return result
}
