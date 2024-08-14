import { useEffect, useRef, useState } from "react";
import Loading from "../loading/Loading";
import './Versions.css'

const Versions = ({ pokeVersions, colors, activeColor, idOpacity, hideBarSide, maxVerPerCol })=>{

  if(!activeColor){
    colors.bgComp = 'hsla(0, 0%, 60%, 1)'
    colors.hlComp = 'hsla(0, 0%, 100%, 1)'
  }

  const [verPerCol, setVerPerCol] = useState(getVerPerCol()) //Versions per columns
  const [colVersions, setColVersions] = useState(0)
  const [limit, setLimit] = useState(0)
  const [bars, setBars] = useState([])
  let divVersions = useRef();
  const barRefs = useRef([]);
  
  const msRefresh = 100;
  const [widthClient, setWidthClient] = useState(window.innerWidth)
  
  useEffect(()=>{
    isWidthChanged()
  },[])

  function getVerPerCol(){
    return  Math.ceil(window.innerWidth*maxVerPerCol/window.screen.availWidth);
  }

  function isWidthChanged(){
    setInterval(() => {
      if(window.innerWidth !== widthClient){
        setWidthClient(window.innerWidth)
        setVerPerCol(getVerPerCol())
      }
    }, msRefresh);
  }

  useEffect(()=>{
    if(pokeVersions){
      if((pokeVersions.length/verPerCol - Math.floor(pokeVersions.length/verPerCol)) > 0)
        setLimit(Math.floor(pokeVersions.length/verPerCol))
      else
        setLimit(pokeVersions.length/verPerCol - 1)
    }
  },[pokeVersions, verPerCol])

  useEffect(()=>{
    getBars(limit)
  },[limit])

  //cada vez que cambie colVersions se actualizan las clases de las barras
  useEffect(() => {
    if (barRefs.current.length > 0) {
      barRefs.current.forEach((bar, index) => {

        if (bar) {
          if (index === colVersions) {
            bar.classList.add('active');
            bar.style.background = colors.hlComp;

          } else if (bar.classList.contains('active')) {
            bar.classList.remove('active');
            let newColor = colors.bgComp.split(',')
            newColor.pop()
            bar.style.background = newColor + `,${idOpacity})`;
          }
        }
      });
    }
  }, [colVersions]);

  useEffect(()=>{
    if(barRefs.current){
      barRefs.current.forEach((bar, index) => {
        if(bar)
          hideBarSide ? bar.style.display = 'none' : bar.style.display = 'block';
      })

      if(limit > 0){
        barRefs.current.forEach(bar=>{
          if(bar){
            let space = (divVersions.current.offsetHeight/((limit+1)*2))
  
            if(bar.getAttribute('keyy')==='0')
              bar.style.marginTop = space/4 +'px';
    
            space += 'px';
            bar.style.height = space;
            bar.style.marginBottom = space;
            
            if(bar.classList.contains('active'))
              bar.style.background = colors.hlComp;
            else{
              let newColor = colors.bgComp.split(',')
              newColor.pop()
              bar.style.background = newColor + `,${idOpacity})`;
            }
          }
        })
      }
    }
  },[barRefs.current])

  const getBars = (limit) => {
    let newBars = [];
    barRefs.current = []; // Reinicia las referencias
  
    for (let i = 0; i <= limit; i++) {
        newBars.push(
          <div
            className={ hideBarSide ? (i===0 ? 'bar-v active' : 'bar-v') : (i===0 ? 'bar-v-an active' : 'bar-v-an')}
            key={i}
            keyy={i}
            ref={(el) => (barRefs.current[i] = el)}
          />
        );
      }
    setBars(newBars);
  };

  useEffect(()=>{
    let newColor = colors.bgComp.split(',')
    newColor.pop()
    divVersions.current.style.background = newColor + `,${idOpacity})`;
  },[divVersions])

  return(
    <div className='container-versions' 
      onMouseEnter={ () =>
        hideBarSide ? 
        barRefs.current.forEach((bar, index) => {
            bar.style.animation = '';
            bar.style.display = 'block';
          })
        : ''
      }
      onMouseLeave={ () =>
        hideBarSide ? 
          barRefs.current.forEach((bar, index) => {
            
            bar.classList.add('fade-out');
            // Forzar un reflujo para asegurar que la animación se ejecute inmediatamente
            bar.offsetHeight; 
            bar.addEventListener('animationend', (event) => {
              if (event.animationName === 'fade-out') {
                bar.classList.remove('fade-out');
                bar.style.display = 'none';
              }
            }, { once: true });
          })
        : ''
      }
    >
      <div className='versions' ref={divVersions} onWheel={(e)=>{
        if(e.deltaY > 0){

          if(colVersions < limit)
              setColVersions(colVersions+1)
          
        }else{
          if(colVersions > 0)
            setColVersions(colVersions-1)
        }

      }} >
        { pokeVersions ? pokeVersions.filter((entrie, index)=>index>=colVersions*verPerCol && index<(colVersions*verPerCol+verPerCol)) : <Loading /> }
      </div>
      
      <div className="bars-v">
        { bars }
      </div>
    </div>
  )
}

export default Versions;