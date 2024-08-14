import { useEffect, useState } from "react"
import { set } from "react-hook-form";

export default function Autocenter({element, msRefresh, setNeg, setLeft}){
  const [inter, setInter] = useState(null)
  
  msRefresh===undefined ? msRefresh=10 : ''
  setNeg===undefined ? setNeg=false : setNeg=true
  setLeft===undefined ? setLeft=false : setLeft=true

  useEffect(()=>{
    
    if(inter===null && element!==undefined){
      setInter(
        setInterval(async () => {
          
          let el, wcli, wel, hcli, hel, himg;

          if(element.current){
            el = element
            wcli = window.innerWidth
            wel = el.current.offsetWidth;

            hcli = window.innerHeight
            hel = el.current.offsetHeight;
            himg = 0
            
            if(wel!==0 && setLeft)
              el.current.style.marginLeft = ( wcli - wel )/2+'px';

            //el.current.style.marginTop = (-((himg-hcli)+(hcli-hel)/2+hel))+'px';
            if(!setNeg)
              el.current.style.marginTop = ((hcli-hel)/2)+'px';
          }
        }, msRefresh)
      )
    }
  })
}