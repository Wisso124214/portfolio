 const useFoundPokemon = async (inputValue, setLoading, setFoundPokemon, setPokemons) => {
    setLoading(true);
    try {
      if (inputValue) {
        // Fetch specific pokemon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
        const data = await response.json();
        setFoundPokemon(data);
      } else {
        // Fetch all pokemons
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
        const data = await response.json();
        setPokemons(data.results);
        setFoundPokemon(null);
      }
    } catch (error) {
      console.error('Failed to fetch pokemons:', error);
    } finally {
      setLoading(false);
    }
  };

  export default useFoundPokemon;