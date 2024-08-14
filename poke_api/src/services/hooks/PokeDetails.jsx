import { useState, useEffect } from 'react';   

const pokeDetails = (fetchUrl) => {
const [pokemonDetails, setPokemonDetails] = useState(null);
    useEffect(() => {
      const fetchPokemonDetails = async () => {
        if (fetchUrl) {
          const response = await fetch(fetchUrl);
          const data = await response.json();
          setPokemonDetails(data);
        }
      };
      fetchPokemonDetails();
    }, [fetchUrl]);

    return pokemonDetails;
}

export default pokeDetails;