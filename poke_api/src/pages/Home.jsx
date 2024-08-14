import { useState, useEffect, useCallback } from 'react'
import './Home.css'
import loadMorePokemons from '../services/hooks/LoadMorePokemons.jsx'
// import CustomCard from '@migueguille/components/dist/customCard/CustomCard'
import { CustomCard } from '../components/index.js'
// import Header from '@migueguille/components/dist/header/Header'
import Header from '../components/header/Header'
import CustomInput from '@migueguille/components/dist/customInput/CustomInput'
import InfiniteScroll from '@migueguille/components/dist/infinityScroll/InfinityScroll'
import CustomDropdown from '@migueguille/components/dist/customDropdown/CustomDropdown'
import { useNavigate } from 'react-router-dom'
import { pokeDetails, getPokemonNumber, getPokemonIndex, useFoundPokemon, useAllPoke } from '../services/index.js'
import './Home.css'
import TopScroll from '../components/topScroll/TopScroll.jsx'
import pokelogo from '../assets/pokelogo.png'
import Loading from '../components/loading/Loading.jsx'


const Home = ({ noscroll }) => {
    if(noscroll===undefined)
      noscroll=false
    else
      noscroll=true

    const { pokeData, loading, error, maxTypes } = useAllPoke();
    const [inputValue, setInputValue] = useState('');
    const [pokemons, setPokemons] = useState([]);
    const [foundPokemon, setFoundPokemon] = useState(null);
    const [offset, setOffset] = useState(20);
    const [thisLoading, setThisLoading] = useState(false);
    const [content, setContent] = useState(null)
    const [allPokeGenders, setAllPokeGenders] = useState(null);
    const navigate = useNavigate();
  
    // Function to load more pokemons
    const handleLoadMorePokemons = () => {
      loadMorePokemons(offset, setPokemons, setOffset, setThisLoading);
    };
    
    useEffect(()=>{
      if(!noscroll){
        document.body.className = ''
      }else{
        document.body.className = 'body-noscroll'
      }
    },[])
  
    const onChange = (event) => {
      setInputValue(event.target.value);
    };
  
    useEffect(() => {
      const handler = setTimeout(() => {
        useFoundPokemon(inputValue, setThisLoading, setFoundPokemon, setPokemons);
      }, 500);
      return () => clearTimeout(handler);
    }, [inputValue]);

    const handlePress = (pokemonName) => {
        navigate(`/pokemon/${pokemonName}`)
    }
  
    useEffect(() => {
      setContent(
        foundPokemon ? (
          <div className='card'>
            <CustomCard handleClick={()=> handlePress(foundPokemon.name)} title={foundPokemon.name} fetchUrl={foundPokemon.url} imageKey={foundPokemon.sprites.front_default}
              number={ ()=> getPokemonIndex(foundPokemon) } fetchfunction={pokeDetails}/>
          </div>
          // <div>{foundPokemon.name}</div>
        ):(pokemons.map((pokemon, index) => (
          <div key={`${pokemon.url}-${index}`} className='card'>
            <CustomCard handleClick={()=> handlePress(pokemon.name)} title={pokemon.name} fetchUrl={pokemon.url} imageKey={"front_default"}
              number={ ()=> getPokemonNumber(pokemon.url) } fetchfunction={pokeDetails}/>
          </div>
        )))
      )
    },[pokemons, foundPokemon])
  
    //error ? console.log(error) : loading ? <Loading /> :  
    return (
      thisLoading ? <Loading /> :
      <>
        <Header pokelogo={pokelogo}>
          <CustomInput placeholder='Search' value={inputValue} onChange={onChange} />
        </Header>
        <div className='body-app'>
          <div className='dropdown-app'>
            <CustomDropdown placeholder="Select the option"/>
          <div className='content-app'>
            {content}
            <TopScroll />
            <InfiniteScroll loading={thisLoading} fetchMoreData={handleLoadMorePokemons} />
          </div>
          </div>
        </div>
      </>
    );
};

export default Home;