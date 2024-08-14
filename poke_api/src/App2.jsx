import { useState, useEffect } from 'react'
import './App.css'
import CustomCard from './components/customCard/CustomCard.jsx'
import Header from './components/header/Header'
import CustomInput from './components/customInput/CustomInput.jsx'
import InfiniteScroll from './components/infinityScroll/InfinityScroll'
import CustomDropdown from './components/customDropdown/CustomDropdown.jsx'
import Loading from './components/loading/Loading.jsx'


function App() {
  const [inputValue, setInputValue] = useState('');
  const [clientPokemons, setClientPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemonsContent, setPokemonsContent] = useState(null)
  const [dataPokemons, setDataPokemons] = useState([]);
  const [lastPokemon, setLastPokemon] = useState(null);
  const [content, setContent] = useState(Loading);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const fetchFilterPokemons = async ()=>{
    if(inputValue!==''){
      setLoading(true);
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000');
      const data = await response.json();
      setDataPokemons(data.results.sort( (a, b)=> {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }))
      setLoading(false);
      
    }else
      fetchPokemons();
  }

  const fetchPokemons = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    const data = await response.json();
    setDataPokemons(data)
  };

  const sendPokemons = async (data) => {
    setLoading(true);
    setClientPokemons(prev => [...prev, ...data.results]);
    setOffset(prev => prev + 20);
    setLoading(false);
  }

  useEffect(()=>{
    setClientPokemons(dataPokemons)
  },[dataPokemons])

  function getPokemonNumber(url){  
    const urlSplitted = url.split('/');
    urlSplitted.pop();
    const digitsNumber = (urlSplitted[urlSplitted.length-1] + '').split('')
    let newDigitsNumber = digitsNumber;
    for(let d=digitsNumber.length; d<4; d++){
      newDigitsNumber= ['0'].concat(newDigitsNumber)
    }
    
    return newDigitsNumber.join('')
  }

  useEffect(()=>{
    fetchFilterPokemons();
  },[inputValue])

  useEffect(()=>{
    setPokemonsContent(
      clientPokemons.map((pokemon, index) => (
        <div key={`${pokemon.url}-${index}`} className='card'>
          <CustomCard handleClick={() => console.log('Clicked') } title={pokemon.name} fetchUrl={pokemon.url} imageKey={"front_default"} 
            number={ ()=> getPokemonNumber(pokemon.url) } />
        </div>
      ))
    )
  },[clientPokemons])

  useEffect(()=>{
    setContent(
      <>
        <div className='dropdown-app'>
          <CustomDropdown placeholder="Order by"/>
        </div>
        <div className='content-app'>
          { content }
          <InfiniteScroll loading={loading} fetchMoreData={fetchPokemons} />
        </div>
      </>
    )
  },[pokemonsContent])
  
  useEffect(()=>{
    
  },[content])
  

  return (
    <>
      <Header title="Pokedex">
        <CustomInput placeholder='Search' value={inputValue} onChange={handleInputChange} />
      </Header>
      <div className='body-app'>
        { content }
      </div>
    </>
  )
}


export default App


/**
 * import { loadMorePokemons } from "./services/LoadMorePokemons"
import CustomCard from './components/customCard/CustomCard.jsx'
import Header from './components/header/Header'
import CustomInput from './components/customInput/CustomInput.jsx'
import InfiniteScroll from './components/infinityScroll/InfinityScroll'
import CustomDropdown from './components/customDropdown/CustomDropdown.jsx'
import TopScroll from './components/topScroll/TopScroll.jsx'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
/*
export const router = createBrowserRouter(routes)
<>
      {
        createRoot(document.getElementById("root")).render(
          <RouterProvider router={router} />
        )
      }
    </>

function App() {
  
  const [inputValue, setInputValue] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [foundPokemon, setFoundPokemon] = useState(null);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  console.log(pokemons)
  const [content, setContent] = useState(null)

  // Function to load more pokemons
  const handleLoadMorePokemons = () => {
    loadMorePokemons(offset, setPokemons, setOffset, setLoading);
  };

  useEffect(() => {
    setContent(
      pokemons.map((pokemon, index) => (
        <div key={pokemon.url-index} className='card'>
          <CustomCard handleClick={() => console.log('Clicked') } title={pokemon.name} fetchUrl={pokemon.url} imageKey={"front_default"} 
            number={ ()=> getPokemonNumber(pokemon.url) } />
        </div>
      ))
    )
  },[pokemons])

  function getPokemonNumber(url){  
    const urlSplitted = url.split('/');
    urlSplitted.pop();
    const digitsNumber = (urlSplitted[urlSplitted.length-1] + '').split('')
    let newDigitsNumber = digitsNumber;
    for(let d=digitsNumber.length; d<4; d++){
      newDigitsNumber= ['0'].concat(newDigitsNumber)
    }
    
    return newDigitsNumber.join('')
  }

  const fetchPokemons = useCallback(async () => {
    setLoading(true);
    try {
      if (inputValue) {
        // Fetch a specific pokemon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
        const data = await response.json();
        console.log(data)
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
  }, [inputValue]);

  // const handleInputChange = useCallback(debounce((value) => {
  //   setInputValue(value);
  //   if (value.trim() !== '') {
  //     fetchPokemon(value);
  //     console.log(pokemons)
  //   } else {
  //     handleLoadMorePokemons(); 
  //   }
  // }, 200), []); 

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchPokemons();
    }, 500);
    return () => clearTimeout(handler);
  }, [inputValue, fetchPokemons]);

  return (
    <>
      <Header title="Pokedex">
        <CustomInput />
      </Header>
      <TopScroll />
      <div className='body-app'>
        <div className='dropdown-app'>
          <CustomDropdown placeholder="Select the option"/>
        </div>
        <div className='content-app'>
          { content }
          <InfiniteScroll loading={loading} fetchMoreData={handleLoadMorePokemons} />
        </div>
      </div>
 */