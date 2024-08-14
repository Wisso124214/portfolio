import { useState, useEffect } from 'react'; 

const usePokeSprites = ({id}) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);
        useEffect(() => {
          const fetchPokemonSprites = async () => {
            if (id) {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
              const data = await response.json();
              setPokemonDetails(data);
            }
          };
          fetchPokemonSprites();
        }, [id]);
    
        return pokemonDetails;
    }

    export default usePokeSprites;