import { useEffect } from 'react';
import './Characteristics.css'
import Ability from '../ability/Ability';

const Characteristics = ({ characteristics, showHidden })=>{

  return(
    <div className='poke-data'>
      <div className='titles' >
        <div >Category:</div>
        <div >Height:</div>
        <div >Weight:</div>
        <div >Abilities:</div>
      </div>
      
      <div className='containers-char'>
        <div className='cont cont-category'>{ characteristics.category.map(cat=>cat.genus) }</div>
        <div className='cont cont-height'>{ (characteristics.height/10).toFixed(1) + ' m' }</div>
        <div className='cont cont-weight'>{ (characteristics.weight/10).toFixed(1) + ' kg' }</div>
        <div className='cont cont-abilities'> <Ability showHidden={showHidden} characteristics={characteristics}/></div>
      </div>
      
      {/*Gender*/}
    </div>
  )
}

export default Characteristics;