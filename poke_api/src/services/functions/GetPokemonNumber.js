export function getPokemonNumber(url){  
    const urlSplitted = url.split('/');
    urlSplitted.pop();
    const digitsNumber = (urlSplitted[urlSplitted.length-1] + '').split('')
    let newDigitsNumber = digitsNumber;
    for(let d=digitsNumber.length; d<4; d++){
      newDigitsNumber= ['0'].concat(newDigitsNumber)
    }
    
    return newDigitsNumber.join('')
  }

  export function getPokemonIndex(pokemon){
    const pokeId = `${pokemon.id}`
    return pokeId
  }