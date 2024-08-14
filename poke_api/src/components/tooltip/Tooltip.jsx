import { useEffect, useRef, useState } from "react";
import './Tooltip.css'

const Tooltip = (domData, entrie, color, parent)=>{

  let spanTooltip = useRef();
  const [position, setPosition] = useState({ x:0, y:0 });
  const [name, setName] = useState('asd')

  useEffect(()=>{
    console.log(domData, entrie, color)
  },[])

  useEffect(()=>{
    if(entrie){
      console.log('name',entrie)
      if(entrie.version){
        setName(entrie.version.name)
      }
    }
  },[entrie])

  useEffect(()=>{
    if(spanTooltip.current)
      spanTooltip.current.style.backgroundColor = color+'7f';
  },[spanTooltip.current])

  useEffect(()=>{
    if(spanTooltip.current){
      let {width, height} = spanTooltip.current.getBoundingClientRect();
      
      //console.log(domData)
      //console.log(domData.x/ domData.width )

      setPosition({
        y: -height*3/4,
        //x: domData.x - (width / 2) + (domData.width / 2)
      })
    }
  },[domData])

  return(
    name ? <span style={{ left: position.x, top: position.y }} ref={spanTooltip} className='tooltip'> {name} </span> : ''
  )
}

export default Tooltip;