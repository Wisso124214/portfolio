import { useEffect, useRef, useState } from 'react';
import CustomInput from '../components/CustomInput/CustomInput';
import Header from '../components/header/Header'
import Loading from '../components/loading/Loading';
import './Details.css'
import { usePokeId, hex2hsl, hsl2hex, getMidColor, getComplementaryColor, getIconsTypes } from '../services/index';
import { useParams } from "react-router-dom";
// import { pokeDetails } from '@migueguille/components';
import CustomPokeVersion from '../components/customPokeVersion/CustomPokeVersion'
import BackgroundShapes from '../components/backgroundShapes/BackgroundShapes';
import Versions from '../components/versions/Versions';
import Characteristics from '../components/characteristics/Characteristics'
import Stats from '../components/stats/Stats';
import pokelogo from '../assets/pokelogo.png'
import Carousel from '../components/carousel/Carousel';
import TitlePokemon from '../components/titlePokemon/TitlePokemon';
import { activeColor, idOpacity, hideBarSide, quantBarStats, showHidden, maxVerPerCol} from '../services/config';
import '../components/pokeTypes/PokeTypes.css'
import PokeTypes from '../components/pokeTypes/PokeTypes';


export default function Details({ noscroll }){
  
  if(noscroll===undefined)
    noscroll=false
  else
    noscroll=true

  const { id } = useParams();
  const pokemonDetails = usePokeId(id)

  const [objLoaded, setObjLoaded] = useState({
    pokeData: false,
    types: false,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const [pokeCharacteristics, setPokeCharacteristics] = useState(null);
  const [pokeEntries, setPokeEntries] = useState(null);
  const [indexFlavor, setIndexFlavor] = useState(0);
  const [pokeVersions, setPokeVersions] = useState(null);
  const [colors, setColors] = useState({});
  const [svgTypes, setSvgTypes] = useState([])

  /**Weakness
   //https://pokeapi.co/api/v2/gender/2/
   * Evols
   //https://pokeapi.co/api/v2/type/18
  */
  

  useEffect(()=>{
    fecthPokeData();
    if(!noscroll){
      document.body.className = ''
    }else{
      document.body.className = 'body-noscroll'
    }
  },[])

  async function fecthPokeData(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+id)
    const data = await response.json();
      
    const resUrl = await fetch(data.species.url)
    const dataUrl = await resUrl.json();
    
    const genus = dataUrl.genera.filter(gen=> gen.language.name=='en')
    
    let obj = {}
    obj.id = data.id;
    obj.name = data.name;
    obj.category = genus;
    obj.weight = data.weight;
    obj.height = data.height;
    obj.abilities = data.abilities;
    obj.stats = data.stats;
    obj.types = data.types.map((t)=>t.type.name).sort();
    
    setColors(getColors(obj.types));
    setPokeCharacteristics(obj);
    
    const enEntries = dataUrl.flavor_text_entries.filter((entrie)=> entrie.language.name==='en')
    setPokeEntries(enEntries);

    let newIsLoaded = objLoaded;
    newIsLoaded.pokeData = true;
    setObjLoaded(newIsLoaded);
    updateIsLoading(newIsLoaded);
  }

  function getColors(types){

    let newColors = { color1: 'hsl(0, 0%, 93%)', color2: 'hsl(0, 0%, 13%)' } //Colores predefinidos

    let { typeColors, newSvgTypes } = getIconsTypes(types);

    setSvgTypes(newSvgTypes);

    //reemplazar los colores de newColors con los de typeColors

    typeColors.forEach((color, index)=>{
      let c = 'color'+(index+1)
      newColors[c] = color;
    })

    let midcolor = getMidColor(hsl2hex(newColors.color1), hsl2hex(newColors.color2));
    midcolor = hex2hsl(midcolor);

    newColors.midcolor = midcolor;
    let contrMidcolor = newColors.midcolor.split(',')
    contrMidcolor[1] = '80%'
    contrMidcolor[2] = '45%'
    newColors.contrMidcolor = contrMidcolor.join(',');

    newColors.textSpecs2 = getComplementaryColor(newColors.color1);
    
    let textTitle = newColors.textSpecs2.split(',')
    textTitle[2] = '50%'
    textTitle = textTitle.join(',')
    newColors.textTitle = textTitle;
    
    newColors.textSpecs3 = getComplementaryColor(newColors.color2);
    
    if(newColors.color2 !== 'hsl(0, 0%, 13%)')
      newColors.textArrws = getComplementaryColor(newColors.midcolor);
    else
      newColors.textArrws = newColors.textSpecs3;

    newColors.bgComp = newColors.midcolor
    newColors.hlComp = newColors.contrMidcolor

    return newColors;
  }

  useEffect(()=>{
    if(svgTypes){
      let newIsLoaded = objLoaded;
      newIsLoaded.types = true;
      setObjLoaded(newIsLoaded);
      updateIsLoading(newIsLoaded);
    }
  },[svgTypes])

  useEffect(()=>{
    if(pokeEntries){
      setPokeVersions(
        pokeEntries.map((entrie, index)=>
           <CustomPokeVersion color={colors} key={index} entrie={entrie} index={index} setIndexFlavor={setIndexFlavor} idOpacity={idOpacity} />
        )
      )
    }
  },[pokeEntries])

  function getNumber(id){
    if(id<10)
      return '000'+id;
    else if(id<100)
      return '00'+id;
    else if(id<1000)
      return '0'+id;
    else
      return id;
  }

  const updateIsLoading = (objLoaded) =>{
    let bool = true;
    Object.values(objLoaded).map((val=>{
      bool = val && bool;
    }))
    setIsLoaded(bool);
  }

  return(
    <>
      <div className='body-app-d'  >
        { 
        isLoaded ? 
        <>
          <div className='content-app-d' >
            <BackgroundShapes getNumber={getNumber} id={pokeCharacteristics.id} color={colors} />
              
            <Characteristics characteristics={pokeCharacteristics} showHidden={showHidden} />
            <Stats dataStats={pokeCharacteristics.stats} colors={colors} activeColor={activeColor} idOpacity={idOpacity} quantBarStats={quantBarStats} />
            
            {/*<TootltipTypes types={pokeCharacteristics.types} svgTypes={svgTypes} colors={colors} />*/}
            <PokeTypes svgTypes={svgTypes} types={pokeCharacteristics.types} />

            <div className='container-id'>
              <TitlePokemon pokeCharacteristics={pokeCharacteristics} getNumber={getNumber} colors={colors} />
            </div>
            
            <div className='details'>
              <div className='image'>
                <Carousel pokemonId={id} colors={colors} ></Carousel>
              </div>
              <div className='versions-div'>
                <Versions pokeVersions={pokeVersions} colors={colors} activeColor={activeColor} idOpacity={idOpacity} hideBarSide={hideBarSide} maxVerPerCol={maxVerPerCol} />
              </div>
            </div>

            <div className='flavor-text'>{pokeEntries[indexFlavor].flavor_text}</div>
          </div>
        </>
        : <Loading /> }
      </div>

      <Header pokelogo={pokelogo}>
          {/* <CustomInput />*/}
      </Header>
    </>
  )
}