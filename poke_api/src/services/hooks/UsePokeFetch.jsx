import { useState } from 'react';

const usePokefetch = async (offset) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
  const data = await response.json();
  return data.results;
};

export default usePokefetch;