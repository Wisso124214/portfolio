import { useEffect, useRef } from "react";

const TitlePokemon = ({ pokeCharacteristics, getNumber, colors }) => {
  
  let idRef = useRef()
  
  useEffect(()=>{
    if(idRef.current){
      idRef.current.style.color = colors.textTitle;
    }
  },[idRef.current])

  return (
    <div className='id' ref={idRef} >
      <p> {getNumber(pokeCharacteristics.id)} </p>
      <p>{pokeCharacteristics.name}</p>
    </div>
  )
}

export default TitlePokemon;