import { useCallback, useEffect, useRef, useState } from 'react'
import './BackgroundShapes.css'


const BackgroundShapes=({ getNumber, id, color })=>{
  
  let trnglDwnDmnd = useRef()
  let trnglUpDmnd = useRef()
  let trnglStyle = useRef()
  let trnglTW = useRef()
  let rectLeft = useRef()
  let rectRight = useRef()
  const [prevName, setPrevName] = useState('')
  const [nextName, setNextName] = useState('')

  useEffect(()=>{
    const handler = setTimeout(() => {
      setNames();
    }, 1);
    return () => clearTimeout(handler);
  },[])

  const setNames = useCallback(async()=>{
    getName(id-1).then(res=>setPrevName(res))
    getName(id+1).then(res=>setNextName(res))
    //getMaxAbilitiesNumber()
  },[])


  const getName = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data.name;
  }

  useEffect(()=>{

    trnglUpDmnd.current.style.background = `linear-gradient(180deg, ${color.color1}, ${color.midcolor})`;
    trnglDwnDmnd.current.style.background = `linear-gradient(0deg, ${color.color2}, ${color.midcolor})`;
    
    let midcolor = color.midcolor.split(',')
    midcolor.pop()
    midcolor.push(' 0.8)')
    midcolor = midcolor.join(',')
    
    rectLeft.current.style.backgroundColor = midcolor;
    rectRight.current.style.backgroundColor = midcolor;
    trnglStyle.current.style.background = `linear-gradient(0deg, ${color.color2}, ${color.midcolor})`;
    trnglTW.current.style.background = `linear-gradient(180deg, ${color.color1}, ${color.midcolor})`;
    
    let arrSpecs2 = document.getElementsByClassName('text-specs2');
    Array.from(arrSpecs2).forEach(spec=>{
      spec.style.color = color.textSpecs2;
    })

    let arrSpecs3 = document.getElementsByClassName('text-specs3');
    Array.from(arrSpecs3).forEach(spec=>{
      spec.style.color = color.textSpecs3;
    })

    let textArrws = document.getElementsByClassName('text-arrws');
    Array.from(textArrws).forEach(text=>{
      text.style.color = color.textArrws;
    })

    let arrleft = document.getElementsByClassName('arrow-left')[0]
    if(arrleft)
      arrleft.getElementsByTagName('path')[0].style.fill = color.textArrws;

    let arrright = document.getElementsByClassName('arrow-right')[0]
    if(arrright)
      arrright.getElementsByTagName('path')[0].style.fill = color.textArrws;

  },[trnglUpDmnd.current, trnglDwnDmnd.current])

  const nextPage = () =>{ id < 1025 ? location.replace(`/pokemon/${id+1}`): '' }

  const prevPage = () =>{ id > 1 ? location.replace(`/pokemon/${id-1}`) : '' }
  
  return(
    <>
      <div className='rectLeft' onClick={prevPage} ref={rectLeft}>
      {id > 1 ? 
      <>
        {<svg className='arrow-left' onClick={prevPage} width="50" height="50" viewBox="10 9 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z" fill="#fff" fillRule="evenodd" clipRule="evenodd"></path></svg> }
        <div className='text-arrws text-prev-poke' onClick={prevPage} >{getNumber(id-1)+ ' ' + prevName}</div>
      </> : ''
      }
      </div>
      
      <div className='rectRight' onClick={nextPage} ref={rectRight}>
      {id < 1025 ? 
      <>
        { <svg className='arrow-right' onClick={nextPage} width="50" height="50" viewBox="30 9 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z" fill="#fff" fillRule="evenodd" clipRule="evenodd"></path></svg> }
        <div className='text-arrws text-next-poke' onClick={nextPage} >{getNumber(id+1) + ' ' + nextName}</div>
      </> : ''
      }
      </div>

      <div className='trngl-style-cont'>
        <div className='trngl-style' ref={trnglStyle}></div>
      </div>

      <div className='trngl-tw-cont' >
        <div className='trngl-tw' ref={trnglTW}></div>
      </div>

      <div className='trngl-up-dmnd-cont'  >
        <div className='trngl-up-dmnd' ref={trnglUpDmnd} />
      </div>

      <div className='trngl-dwn-dmnd-cont' >
        <div className='trngl-dwn-dmnd' ref={trnglDwnDmnd}></div>
      </div>

      <div className='text-specs1 text-char'>CHARACTERISTICS</div>
      <div className='text-specs1 text-evols'>EVOLUTIONS</div>
      <div className='text-specs1 text-stats'>STATS</div>
      <div className='text-specs1 text-ver'>VERSIONS</div>
      
      <div className='text-specs2 text-type'>TYPE</div>
      <div className='text-specs2 text-weak'>WEAKNESS</div>
      <div className='text-specs3 text-style'>STYLE</div>
      
    </>
  )
}

export default BackgroundShapes;