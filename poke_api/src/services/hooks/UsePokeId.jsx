import { useState, useEffect } from 'react'; 

const usePokeId = (id) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);
        useEffect(() => {
          const fetchPokemonId = async () => {
            if (id) {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
              const data = await response.json();
              setPokemonDetails(data);
            }
          };
          fetchPokemonId();
        }, [id]);
    
        return pokemonDetails;
    }

    export default usePokeId;