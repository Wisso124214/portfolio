import { useEffect, useState } from "react";
import { custom } from "zod";

export default function WaitElement({ msRecall, parent, finalEl, customConfig }){

  //Si quiero retornar el elemento, hacerlo al final de la función customConfig

  let initEl = <div>div</div>
  const [el, setEl] = useState(initEl);
  const [configured, setConfigured] = useState(false);

  if(msRecall===undefined)
    msRecall=false
  else
    msRecall=true

  useEffect(()=>{
    callSetEl();
  },[])

  function callSetEl(){
    if(parent && el===initEl){
      setEl(finalEl)
      configEl()
    }else{
      setTimeout(() => {
        callSetEl();
      }, msRecall);
    }
  }
  
  function configEl(){
    if(document.getElementsByClassName('divall') && el!==initEl){
      
      if(customConfig)
        customConfig();

      setConfigured(true);
    }else{
      setTimeout(() => {
        configEl();
      }, msRecall);
    }
  }

  return(
    <>
      {configured && el!==initEl ? el : ''}
    </>
  )
}