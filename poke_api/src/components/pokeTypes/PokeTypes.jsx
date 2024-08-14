import { useEffect } from 'react';
import './PokeTypes.css'

const PokeTypes = ({ svgTypes, types }) =>{

  return(
    <div className='container-types' >
      {
        svgTypes.map((svg, index)=>
          <div className='type' key={index} >{svg}</div>
        )
      }
    </div>
  )
}

export default PokeTypes;