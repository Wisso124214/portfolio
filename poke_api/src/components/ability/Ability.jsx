import { useRef } from 'react'
import './Ability.css'

const Ability = ({ characteristics, showHidden })=>{

  let thisAbility = useRef()

  const getAbilityName = (ab, index, thisAbility)=>{
    let str = '';
    ab.name.split('-').length > 1 ? 
      str += ab.name.split('-').join(' ') : 
      str += ab.name 
    
    index < ab.count-1 ? 
      str+= ',' : ''

    return str;
  }

  return(
    <div className='container-ab' >
      <div className='cont-ab' >
      {
        characteristics.abilities.map(ab=>{
          let obj = {}
          obj.name = ab.ability.name;
          obj.is_hidden = ab.is_hidden;
          obj.count = characteristics.abilities.map(ab=>ab.is_hidden).filter(ab=>ab===false).map(()=>1).length
          return obj;
        }).filter(ab=>ab.is_hidden===false).map((ab,index)=>
          <>
            <div className={'ab'} ref={thisAbility} >
              { getAbilityName(ab,index) } &nbsp;
            </div>
          </>
        )
      }
      </div>

      <div className='cont-abh' >
      { showHidden ? 
        characteristics.abilities.map(ab=>{
          let obj = {}
          obj.name = ab.ability.name;
          obj.is_hidden = ab.is_hidden;
          obj.count = characteristics.abilities.map(ab=>ab.is_hidden).filter(ab=>ab===true).map(()=>1).length
          return obj;
        }).filter(ab=>ab.is_hidden===true).map((ab,index)=>
          <>
            <div className={'ab hidden'} ref={thisAbility} >
              { getAbilityName(ab,index) } &nbsp;
            </div>
          </>
        ) : ''
      }
      </div>
    </div>
  )
}

export default Ability;