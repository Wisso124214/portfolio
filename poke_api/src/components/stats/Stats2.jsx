import { useEffect, useRef, useState } from 'react';
import './Stats2.css'

const Stats = ({ dataStats, colors, activeColor, idOpacity })=>{

  activeColor ? '' : colors.midcolor = undefined //para desactivar manualmente el color
  
  let divStats = useRef();
  const [stats, setStats] = useState(undefined)
  const numberDivisions = 15;
  const maxStat = 255;

  const getBars = (numberDivisions, base_stat) => {
    let bars = []
    for (let i = 1; i <= numberDivisions; i++) {
      bars.push(
        <div 
          className= { Math.ceil(base_stat/(maxStat/numberDivisions)) >= i ? 'bar-s fill' : 'bar-s' }
          key={i}>
        </div>);
    }

    return bars;
  }

  useEffect(()=>{
    let newStats = dataStats.map((stat,index)=>{
      //console.log(stat.base_stat,stat.stat.name)
      return(
        <div className='stat' key={index} >
          <div className='name'>{
            stat.stat.name === 'hp' ? 'HP' : stat.stat.name.split('-').map((word,index)=>{
              return word.charAt(0).toUpperCase() + word.slice(1)
            }).join(' ')
          }</div>
          <div className='bars-s'>
            { getBars(numberDivisions, stat.base_stat) }
          </div>
        </div>
      )
    })

    let arrBar = document.getElementsByClassName('bar-s');

    Array.from(arrBar).forEach(bar=>{
      bar.style.width = '.45vw';
      bar.style.marginRight = '.15vw';
    })

    setStats(newStats)
  },[dataStats])

  useEffect(()=>{
    if(stats){
      let arrBars = document.getElementsByClassName('bar-s');

      Array.from(arrBars).forEach(bar=>{
        if(!bar.classList.contains('fill')){
          let newColor = colors.midcolor.split(',')
          newColor.pop()
          bar.style.background = newColor + `,${idOpacity})`;
        }else
          bar.style.background = colors.contrMidcolor;
      })
    }
  },[stats])

  return(
    <>
     <div className='stats-content'>
      <div className='stats' ref={divStats} >
        {stats}
      </div>
     </div>
    </>
  )
}

export default Stats;