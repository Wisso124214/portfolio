// loadMorePokemons.js
import usePokefetch from './UsePokeFetch'; // Assuming you have this function in a separate file

const loadMorePokemons = async (offset, setPokemons, setOffset, setLoading) => {
  setLoading(true);
  const newPokemons = await usePokefetch(offset);
  setPokemons(prev => [...prev, ...newPokemons]);
  setOffset(prev => prev + 20);
  setLoading(false);
};

export default loadMorePokemons;