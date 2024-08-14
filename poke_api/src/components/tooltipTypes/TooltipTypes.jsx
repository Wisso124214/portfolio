import { useEffect, useRef, useState } from "react";

const TootltipTypes = ({ types, colors, svgTypes  }) => {

  const [isHoverType, setIsHoverType] = useState(false)
  const [domDataTypes, setDomDataTypes] = useState([])
  const [typesChildren, setTypesChildren] = useState(undefined)
  const [position, setPosition] = useState({ x:0, y:0 });
  let divType = useRef([]);

  /*useEffect(()=>{
    if(divType.current){
      let {width, height} = divType.current.getBoundingClientRect();
      //console.log(domData.x/ domData.width )

      setPosition({
        y: -height*4/5,
        //x: - (width / 2) + domData.width2
      })
    }
  },[domDataTypes])*/

  useEffect(()=>{
    setTypesChildren(
      svgTypes.map((svg,index)=>
        <>
          <div 
            className='type' 
            ref={(el) => (divType.current[index] = el)}
            onMouseOver={()=>{ console.log('isHover'); setDomDataTypes(divType.current.getBoundingClientRect()); setIsHoverType(true); }}
            onMouseLeave={()=>{ console.log('isNotHover'); setIsHoverType(false); }}
            >
              {svg}
          </div>
          { isHoverType ? <span style={{ left: position.x, top: position.y }} className='tooltip'> {types[index]} </span> : ''}
        </>
      )
    )
  },[types, svgTypes, isHoverType, position])

  return (
    <div className='container-types' >
      { typesChildren }
    </div>
  );
}

export default TootltipTypes;