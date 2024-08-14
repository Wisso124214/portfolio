import { useEffect, useRef, useState } from 'react'
import './CustomPokeVersion.css'
import Tooltip from '../tooltip/Tooltip';

export default function CustomPokeVersion({entrie, index, setIndexFlavor, color, idOpacity}){
  
  const [isHover, setIsHover] = useState(false);
  const [domData, setDomData] = useState(null)
  let thisVersion = useRef()
  let spanTooltip = useRef();
  const [position, setPosition] = useState({ x:0, y:0 });

  function clickVersion(index){
    setIndexFlavor(index);
  }

  useEffect(()=>{
    if(spanTooltip.current){
      //reemplazar alfa de hsla por el idOpacity
      let bg = color.bgComp.split(',')
      bg.pop()
      bg.push(` ${idOpacity+.25})`)

      spanTooltip.current.style.backgroundColor = bg.join(',');
    }
  },[spanTooltip.current])

  useEffect(()=>{
    if(spanTooltip.current){
      let {width, height} = spanTooltip.current.getBoundingClientRect();
      //console.log(domData.x/ domData.width )

      setPosition({
        y: -height*4/5,
        //x: - (width / 2) + domData.width2
      })
    }
  },[domData])

  return(
    <div class='version' ref={thisVersion} >
      <div className={entrie?.version?.name} >
        <svg className='svg-version' onClick={()=>{clickVersion(index)}} onMouseLeave={()=>{setIsHover(false)}} onMouseOver={()=>{ setDomData(thisVersion.current.getBoundingClientRect()); setIsHover(true)}} width='30' height='30' viewBox=' 0 0 30 30' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
          <rect width='30' height='30' stroke='none' fill='#000000' opacity='0'/>
          <g transform="matrix(1.15 0 0 1.15 15 15)" >
            <path style={{stroke: 'none', 'strokeWidth': 1, 'strokeDasharray': 'none', 'strokeLinecap': 'butt', 'strokeDashoffset': 0, 'strokeLinejoin': 'miter', 'strokeMiterlimit': 4, 'fillRule': 'nonzero', 'opacity': 1}} transform=" translate(-16, -16)" d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.199219 6 25.441406 9.933594 25.9375 15 L 19.84375 15 C 19.398438 13.28125 17.851563 12 16 12 C 14.148438 12 12.601563 13.28125 12.15625 15 L 6.0625 15 C 6.558594 9.933594 10.800781 6 16 6 Z M 16 14 C 17.117188 14 18 14.882813 18 16 C 18 17.117188 17.117188 18 16 18 C 14.882813 18 14 17.117188 14 16 C 14 14.882813 14.882813 14 16 14 Z M 16 15 C 15.449219 15 15 15.449219 15 16 C 15 16.550781 15.449219 17 16 17 C 16.550781 17 17 16.550781 17 16 C 17 15.449219 16.550781 15 16 15 Z M 6.0625 17 L 12.15625 17 C 12.601563 18.71875 14.148438 20 16 20 C 17.851563 20 19.398438 18.71875 19.84375 17 L 25.9375 17 C 25.441406 22.066406 21.199219 26 16 26 C 10.800781 26 6.558594 22.066406 6.0625 17 Z" strokeLinecap="round" />
          </g>
        </svg>
      </div>
      {isHover ? <span style={{ left: position.x, top: position.y }} ref={spanTooltip} className='tooltip'> {entrie.version.name} </span> : ''}
      {/*isHover ? <Tooltip	domData={domData} entrie={thisEntrie} color={color} parent={thisVersion} /> : ''*/}
    </div>
  )
}