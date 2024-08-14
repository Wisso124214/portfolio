import { useEffect, useRef, useState } from 'react';
import './Stats.css'

const Stats = ({ dataStats, colors, activeColor, idOpacity, quantBarStats })=>{

  if(!activeColor){
    colors.bgComp = 'hsla(0, 0%, 60%, 1)'
    colors.hlComp = 'hsla(0, 0%, 100%, 1)'
  }
  
  let divStats = useRef();
  const [statsNames, setStatsNames] = useState(undefined)
  const [statsBars, setStatsBars] = useState(undefined)
  const maxStat = 255;
  const [isLoaded, setIsLoaded] = useState(false)

  const msRefresh = 100;
  const [widthClient, setWidthClient] = useState(window.innerWidth)
  
  useEffect(()=>{
    isWidthChanged()
  },[])

  function isWidthChanged(){
    setInterval(() => {
      if(window.innerWidth !== widthClient){
        setWidthClient(window.innerWidth)
      }
    }, msRefresh);
  }

  useEffect(()=>{
    getNames(dataStats, window.innerWidth)
  },[widthClient])

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

  const stat2name = (stat) => {
    return(
      stat.stat.name === 'hp' ? 'HP' : stat.stat.name.split('-').map((word,index)=>{
        return word.charAt(0).toUpperCase() + word.slice(1)
      }).join(' ')
    )
  }

  const getNames = (dataStats, width) => {
    if(width && width > 900){
      setStatsNames(
        dataStats.map((stat,index)=>{
          return(
            <div className='stat-name' key={index} >
              <div className='name'>{
                stat2name(stat)
              }</div>
            </div>
          )
        })
      )}else{
      setStatsNames(
        dataStats.map((stat, index)=>{
          return(
            <div className='stat-name' key={index} >
              <div className='name'>{
                abbrNames(index)
              }</div>
            </div>
          )}
        )
      )}
  }

  const abbrNames = (index) =>{
    let name = ['HP','ATK','DEF','SP ATK','SP DEF','SPD']
    return name[index]
  }

  useEffect(()=>{

    let newStatsBars = dataStats.map((stat,index)=>{
      return(
        <div className='stat-bars' key={index} >
          <div className='bars-s'>
            { getBars(quantBarStats, stat.base_stat) }
          </div>
        </div>
      )
    })

    let arrBar = document.getElementsByClassName('bar-s');

    Array.from(arrBar).forEach(bar=>{
      bar.style.width = '.45vw';
      bar.style.marginRight = '.15vw';
    })
    
    getNames(dataStats, window.innerWidth)
    setStatsBars(newStatsBars)

  },[dataStats])

  useEffect(()=>{
    if(statsNames){
      let arrBars = document.getElementsByClassName('bar-s');

      Array.from(arrBars).forEach(bar=>{
        if(!bar.classList.contains('fill')){
          let newColor = colors.bgComp.split(',')
          newColor.pop()
          bar.style.background = newColor + `,${idOpacity})`;
        }else
          bar.style.background = colors.hlComp;
      })
    }
  },[statsNames])

  return(
    <>
     <div className='stats-content'>
      <div className='stats-names' >
        {statsNames}
      </div>

      <div className='stats-bars' >
        {statsBars}
      </div>

     </div>
    </>
  )
}

export default Stats;