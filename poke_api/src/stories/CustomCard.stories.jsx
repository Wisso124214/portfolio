import CustomCard  from './CustomCard';

export default {
  component: CustomCard,
};

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

export const charmander = {
  args:{
    title:"charmander",
    handleClick:()=>{ console.log('charmander') },
    fetchUrl:`https://pokeapi.co/api/v2/pokemon/4/`,
    imageKey:'front_default',
    number: getPokemonNumber("https://pokeapi.co/api/v2/pokemon/4/")  
  }
};

export const bulbasaur = {
  args: {
    title: 'bulbasaur',
    handleClick: ()=>{ console.log('bulbasaur') },
    fetchUrl: `https://pokeapi.co/api/v2/pokemon/1/`,
    imageKey: 'front_default',
    number: getPokemonNumber("https://pokeapi.co/api/v2/pokemon/1/")  
  }
};
