/*import { useState } from 'react';

const useAllPoke = async (offset) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000&offset=${offset}`);
  const data = await response.json();

  data.results.map(async p=>{
    let obj = {}
    
    const res = await fetch(p.url);
    const data = await res.json();
    
    return data;
  })
  
  return data.results;
};

export default useAllPoke;*/

import { useState, useEffect } from 'react';

const useAllPoke = () => {
  
  let newPokeData = []
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`);
      const data = await response.json();

      const results = data.results;
      const limit = 10; // Limitar a 10 solicitudes concurrentes
      const batchedResults = [];

      for (let i = 0; i < results.length; i += limit) {
        const batch = results.slice(i, i + limit);
        const batchPromises = batch.map(async (p) => {
          const res = await fetch(p.url);
          return res.json();
        });
        const batchData = await Promise.all(batchPromises);
        batchedResults.push(...batchData);
      }

      batchedResults.map((p) =>
        p.types.map(t=>{
          newPokeData.includes(t.type.name) ? '' : newPokeData.push(t.type.name)
        })
      );

      setPokeData(newPokeData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
  
  return { pokeData, loading, error };
};

export default useAllPoke;